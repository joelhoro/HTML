angular.module('utilsService')
.service("analytics", function(utils) { 

  utils.log("Initializing analytics service");
  // just so it's available in the lambdas;

  function interpolator(curve,dateKey,valueKey, conversion) {
    if(conversion == undefined)
      conversion = [x=>x[valueKey],x=>x[valueKey]];

    var dates = curve.map(r => r[dateKey].valueOf());
    var values = curve.map(r => conversion[0](r));

    var spline = numeric.spline(dates,values);
    this.at = function(d) {
      var result = {};
      result[dateKey] = d;
      result[valueKey] = spline.at(d.valueOf());
      return conversion[1](result);
    }
  }

  Date.prototype.addDays = function(d) {return new Date(this.valueOf()+d*1000*3600*24); }

  function fwdVarCurve(termCurve, tenor) {
    var today = new Date();
    var convertor = [
      x => x.newmarkedvar*x.newmarkedvar*(x.maturity-today),
      x => Math.sqrt(x.newmarkedvar/(x.maturity-today))
    ];
    var iCurve = new interpolator(termCurve,'maturity','newmarkedvar',convertor);
    var tenors = termCurve.map(r => r.tenor);

    var interval = {'1m':30, '3m':90, '6m': 180, '1y':360}[tenor];
//debugger;
    var fwdVars = termCurve
      .map(r => {
        start = r.maturity;
        end = r.maturity.addDays(interval);
        front = iCurve.at(start);
        back = iCurve.at(end);
        var fwdVar = Math.sqrt((back*back*(end-today)-front*front*(start-today))/(end-start));
        fwdVar = isNaN(fwdVar) ? null : fwdVar;
        return fwdVar;
      })

    return fwdVars;
  }

  return { fwdVarCurve: fwdVarCurve };
} );
