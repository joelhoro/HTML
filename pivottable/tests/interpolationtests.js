angular.module('tests')
.service("interpolationtests", function(utils,testscore, dates, analytics,voldata,settings,VolSurfaceCollection) { 

  function TestInterpolation() {
    testscore.SetActiveCategory("Interpolation tests");
    // interpolator
    var flatCurve = {};
    var today = new Date();
    flatCurve[m1=today.addDays(30)] = 1;
    flatCurve[m2=today.addDays(60)] = 1;
    m3 = today.addDays(45);

    var interpolator = new analytics.interpolator(flatCurve);
    testscore.AssertEqual(1,interpolator(m1),"Testing interpolation on constant curve at sample point");
    testscore.AssertEqual(1,interpolator(m2),"Testing interpolation on constant curve at sample point");
    testscore.AssertEqual(1,interpolator(m3),"Testing interpolation on constant curve at non-sample point");
    
    var curve = {};
    curve[m1] = 1;
    curve[m2] = 2;

    var interpolator = new analytics.interpolator(curve);
    testscore.AssertEqual(1,interpolator(m1),"Testing interpolation at sample point");
    testscore.AssertEqual(2,interpolator(m2),"Testing interpolation at sample point");
    testscore.AssertEqual(1.5,interpolator(m3),"Testing interpolation at non-sample point");
    
    var msPerYear = 1000*3600*24*365;
    var convertor = [
      (t,v)       => v*v*(t-today)/msPerYear,
      (t,totalv)  => Math.sqrt(totalv / (t - today)*msPerYear)
    ];

    var interpolator = new analytics.interpolator(curve, convertor);
    testscore.AssertEqual(1,interpolator(m1),"Testing interpolation at sample point, using convertors");
    testscore.AssertEqual(2,interpolator(m2),"Testing interpolation at sample point, using convertors");
    testscore.AssertEqual(1.7320510835475713,interpolator(m3),"Testing interpolation at non-sample point, using convertors");
  }


  return { Test: TestInterpolation };
} );