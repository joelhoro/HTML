"use strict";

angular.module('utilities')
.service("analytics", function(utils,dates,_, numeric, settings, dealerUtils) { 

  utils.log("Initializing analytics service");

  function interpolator(curve, conversion) {
    for(var k in curve) {
      if(curve[k] == null)
        delete(curve[k]);
    }
    
    if(_.keys(curve).length === 0) return d => null;

    //utils.log("Creating interpolator for {0}", curve)
    if(conversion === undefined) {
      conversion = [(t,v) => v, (t,v) => v];
    }
    var keys = _.keys(curve);

    if( keys[0] instanceof Date || Number.isNaN(Number(keys[0])) ) {
      var dates = keys.map(t => new Date(t).valueOf());
      var values = keys.map(t => conversion[0](new Date(t),curve[t]));
    } else
    {
      var dates = keys;
      var values = _.values(curve);
    }

    var spline = numeric.spline(dates,values);
    return d => conversion[1](d,spline.at(d.valueOf()));
  }


  function fwdVarCurve(termCurve, tenor) {
    var msPerYear = 1000*3600*365;
    var convertor = [
      (t,v)       => v*v*(t-settings.today)/msPerYear,
      (t,totalv)  => Math.sqrt(totalv / (t - settings.today)*msPerYear)
    ];

    var iCurve = interpolator(termCurve,convertor);
    var tenors = _.keys(termCurve).map(r => new Date(r));

    var interval = {'1w': 7, '2w': 14, '3w' : 21, '4w': 28, '1m':30, '2m' : 60, '3m':90, '6m': 180, '1y':360}[tenor];
    var fwdVars = tenors
      .map(maturity => {
        var start = maturity;
        var end = maturity.addDays(interval);
        var front = iCurve(start);
        var back = iCurve(end);
        var fwdVar = Math.sqrt((back*back*(end-settings.today)-front*front*(start-settings.today))/(end-start));
        fwdVar = isNaN(fwdVar) ? 0 : fwdVar.round(2);
        return fwdVar;
      })

    return fwdVars;
  }

  function stdevCurve(curve) {
    return _.keys(curve).map(t => 
      (curve[t]*Math.sqrt(utils.yearFrac(settings.today,new Date(t)))).round(2));
  }

  Array.prototype.getScaleAndUnits = function() {
    var max = this.map(Math.abs).max();
    var scale1000 = Math.floor(Math.log10(max)/3);
    var fixedScale1000 = Math.max(Math.min(3,scale1000),0)
    var scale = Math.pow(1000,fixedScale1000);
    var unit = { 0 : '', 1 : 'k', 2 : 'M', 3 : 'B' }[fixedScale1000];
    var template = "<%=value / " + scale+"%>" + unit;
    return { scale: scale, unit: unit, template: template };
  }

  class VolSurface {
    constructor(volSurface) {
      this.volSurface = volSurface;
      var defaults = { MetaData: {}, Observables: [] };
      this.volSurface = _.extend(defaults, this.volSurface);
      this.Underlier = function() {
        return this.volSurface.Index;
      }
      this.Time = function() {
        return this.volSurface.VolSurfaceTime;
      }
      this.Spot = function() {
        return this.volSurface.Spot;
      }   

      this.IsFollower = function() {
        return !this.IsLeader();
      }

      this.IsLeader = function() {
        return this.volSurface.Leader === undefined || this.volSurface.Leader == "";
      }

      this.Leader = function() {
        if(!this.IsLeader())
          return this.volSurface.Leader;
        return "SPX";
      }   

      this.Age = function() {
          return utils.toFriendlyTime( new Date() - new Date(this.Time()) );
      }

      this.Points = function() {
        return this.volSurface.Observables.length;
      }
      this.Tenors = function() {
        return this.volSurface.Observables.map(o => new Date(o.Maturity))
      }
      this.TenorLabels = function(visible = true) {
        return this.Tenors().map(t => !visible ? "" : t.getMonthAbbr()+(t.getYear()-100));
      }
      this.ExtractMany = function(...columns) {
        return columns.map(col => this.Extract(col));
      }

      this.GetQuote = function(obs,col) {
        var fn = CalculateColumns[col];
        if(fn != undefined) {
          var calculatedValue = fn(obs);
          if(Number.isNaN(calculatedValue))
            return null;
          //utils.log("{0}.{1}={2}", obs, col, calculatedValue);
          return calculatedValue.round(2);
        }

        if(obs == undefined) debugger;
        var val = obs.Quotes[col];
        //utils.log("{0}.{1}={2}", obs, col, val);
        if(val == undefined || val == 0)
          return null;
        return (val * 100).round(2);
      }

      var CalculateColumns = {
        Basis : o => this.GetQuote(o,"BM@T-1") - this.GetQuote(o,"BMComputed@T-1"),
        'Dealer basis' : o => this.GetQuote(o,"Dealer.avg") - this.GetQuote(o,"BMComputed@T"),
        'Dealer.avg' : o => dealerUtils.dealers
          .filter(d => dealerUtils.dealerInfo[d].active)
          .map(d => this.GetQuote(o,'Dealer.' + d))
          .avg()
          .round(2),
        'Basis diff' : o => this.GetQuote(o,'Dealer basis') - this.GetQuote(o, 'Basis'),
        BMEstimate: o => this.GetQuote(o,"BMComputed@T") + this.GetQuote(o,"Basis")
      };

      // returns the list of values (without dates)
      this.Extract = function(col) {
        var fn = o => this.GetQuote(o,col);

        return this.volSurface.Observables.map(fn);
      }

      // returns a dictionary date->value
      this.Curve = function(col) {
        var extract = this.Extract(col);
        var i = 0;
        return this.Tenors().toObject(t => extract[i++]);
      }
      this.CurveFn = function(col) {
        return interpolator(this.Curve(col));
      }

      this.VolAtDeltaFn = function(tenor) {
        // finding, among all observables, the one closer to the tenor given
        var closestObservable = this.volSurface.Observables
          .map(o => ({ obs : o, dist : Math.abs((new Date(o.Maturity)-new Date(tenor))/1000/3600/24) }))
          .sortBy(r => r.dist)[0]
          .obs

        // utils.log("All maturities: ", this.Tenors());
        // utils.log("Closest to " + tenor + " = " + closestObservable.Maturity);
        var volCurve = closestObservable.Vols;
        var deltas = _.keys(volCurve).map(r => Number(r)).sort();
        return interpolator(deltas.toObject(d => volCurve[d]));
      }


      // Defines what column get displayed in table
      this.ColSpecs = function() {

        var blockStoreTemplate = _.template("http://blockstore/#?token=EqiVar_<%= underlier %>_<%= maturity %>");

        var expiryLink = t => blockStoreTemplate({ underlier : this.Underlier(), maturity: t.toUpperCase() } );

        var colSpecs = [
          [ "ColumnName",      "Formula",                                       "Class"  ],
          [ "Expiry",           (t,obs) => t,                                   "bold", { Link : expiryLink }     ],
          [ "BM Mark",           (t,obs) => this.GetQuote(obs, "BM@T"),       "vartable_bmestimate" ],
          [ "BM Est",           (t,obs) => this.GetQuote(obs, "BMEstimate"),    "vartable_bmestimate" ],
          [ "D avg",            (t,obs) => this.GetQuote(obs, "Dealer.avg"), "vartable_dealeravgquote" ],
        ];

        if(settings.showDealerDetails) {
          var dealerInfo = dealerUtils.dealerInfo;
          var isActive = d => dealerInfo[d].active;
          var inactiveClass = d => isActive(d) ? "" : " vartable_inactive";
          dealerUtils.dealers.map(d => colSpecs.push(
            [ dealerInfo[d].shortname,  (t,obs) => this.GetQuote(obs, "Dealer." + d),   "info" + inactiveClass(d), { IsDealerColumn: true, IsActiveDealer: isActive(d), Dealer: dealerInfo[d] } ]
            ));
        }

        colSpecs = colSpecs.concat([

          [ "Basis",            (t,obs) => this.GetQuote(obs, "Basis"), "vartable_basis" ],
          [ "Dealer basis",     (t,obs) => this.GetQuote(obs, "Dealer basis"),"vartable_basis" ],
          [ "Diff",             (t,obs) => this.GetQuote(obs, "Basis diff"),"vartable_basis" ],
          //[ "Mark",             (t,obs) => -1 ],

          ]);

        return colSpecs.toObjectList();
      }


      this.toDataTable = function() {
        utils.log("Creating data table for volsurface of " + this.Underlier());
        var tenors = this.TenorLabels();
        var i = 0;
        utils.log("Running through tenors=", tenors);

        var columnSpecs = this.ColSpecs();

        var data = tenors.map(t => {
          var result = {};
          var obs = this.volSurface.Observables[i++];
          columnSpecs.map(spec => {
              result[spec.ColumnName] = spec.Formula(t, obs);
          } );

          return result;
        });

        var columns = columnSpecs.map(spec => spec.ColumnName);
        var classes = columnSpecs.map(spec => spec.Class);
        return { data: data, columnSpecs: columnSpecs, underlier: this.Underlier() };
      }

      this.MetaData = function() {
        return this.volSurface.Metadata;
      }

      this.HasMetaData = function() {
        return _.keys(this.MetaData()).length > 0;
      }
    }
  }

  return { 
      fwdVarCurve: fwdVarCurve, 
      stdevCurve : stdevCurve, 
      interpolator : interpolator,
      VolSurface: VolSurface,
       };
} );

