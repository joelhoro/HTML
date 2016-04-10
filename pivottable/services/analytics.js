"use strict";

angular.module('utilities')
.service("analytics", function(utils,dates,_, numeric) { 

  utils.log("Initializing analytics service");

  function interpolator(curve, conversion) {
    if(conversion === undefined) {
      conversion = [(t,v) => v, (t,v) => v];
    }

    var dates = _.keys(curve).map(t => new Date(t).valueOf());
    var values = _.keys(curve).map(t => conversion[0](new Date(t),curve[t]));

    var spline = numeric.spline(dates,values);
    return d => conversion[1](d,spline.at(d.valueOf()));
  }


  function fwdVarCurve(termCurve, tenor) {
    var today = new Date();
    var msPerYear = 1000*3600*365;
    var convertor = [
      (t,v)       => v*v*(t-today)/msPerYear,
      (t,totalv)  => Math.sqrt(totalv / (t - today)*msPerYear)
    ];

    var iCurve = interpolator(termCurve,convertor);
    var tenors = _.keys(termCurve).map(r => new Date(r));

    var interval = {'1m':30, '2m' : 60, '3m':90, '6m': 180, '1y':360}[tenor];
    var fwdVars = tenors
      .map(maturity => {
        var start = maturity;
        var end = maturity.addDays(interval);
        var front = iCurve(start);
        var back = iCurve(end);
        var fwdVar = Math.sqrt((back*back*(end-today)-front*front*(start-today))/(end-start));
        fwdVar = isNaN(fwdVar) ? 0 : fwdVar.round(2);
        return fwdVar;
      })

    return fwdVars;
  }

  function stdevCurve(curve,today) {
    return _.keys(curve).map(t => 
      (curve[t]*Math.sqrt(utils.yearFrac(today,new Date(t)))).round(2));
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
      this.Underlier = function() {
        return this.volSurface.Index;
      }
      this.Time = function() {
        return this.volSurface.VolSurfaceTime;
      }
      this.Spot = function() {
        return this.volSurface.Spot;
      }      

      this.Age = function() {
          return ( ( new Date() - new Date(this.Time() ) ) /1000/3600).round(0);
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
        if(fn != undefined)
          return fn(obs);

        if(obs == undefined) debugger;
        var val = obs.Quotes[col];
        if(val == undefined || val == 0)
          return null;
        return (val * 100).round(2);
      }

      var CalculateColumns = {
        basis : o => 0,
        'Dealer.avg' : o => [ this.GetQuote(o,'Dealer.SocGen'), this.GetQuote(o,'Dealer.MS') ].avg().round(2)
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
      this.toDataTable = function() {
        var tenors = this.TenorLabels();
        var i = 0;
        return tenors.map(t => {
          // need to renname coz ng-grid doesn't like fancy names
          var names = { "BM":"BM@T", "BMY": "BM@T-1", "D1" : "Dealer.MS", "D2" : "Dealer.SocGen", "D3" : "Dealer.avg" }
          var result = _.keys(names).toObject(f => {
            return this.GetQuote(this.volSurface.Observables[i], names[f]);
          } );
          i++;
          result.tenor = t;
          result.underlier = this.Underlier();
          return result;
        })
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
