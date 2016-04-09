var app = angular.module('tests',['utilsService','dataService'])
.service("tests", function(utils,analytics,voldata) { 

  var testResults = [];

  function AssertTrue(success, description,details='') {
    testResults.push({description: description, success: success, details: details});
    //$scope.failures = $scope.testresults.where({success: false}).length;
  }

  function AssertEqual(expected, actual, description) {
    if(typeof(expected)=="string")
      var diff = expected === actual;
    else {
      var tolerance = 1e-5;
      var diff = Math.abs(expected-actual) < tolerance;
    }

   if(!diff)
      var details = 'Expected=' + expected + ' vs actual=' + actual;

    AssertTrue(diff,description + " to be=" + expected + " - actual=" + actual,details);
  }

  function RunTests(scope) {
    testResults = scope;
    TestBasic();
    TestInterpolation();
    TestVolSurface();
  }

  function TestBasic() {
    AssertTrue(true,"Starting Basic Test");
    AssertTrue(1+1==2, "Test that 1+1 = 2");
  }

  function TestInterpolation() {
    // interpolator
    AssertTrue(true,"Starting TestInterpolation");
    var flatCurve = {};
    var today = new Date();
    flatCurve[m1=today.addDays(30)] = 1;
    flatCurve[m2=today.addDays(60)] = 1;
    m3 = today.addDays(45);

    var interpolator = new analytics.interpolator(flatCurve);
    AssertEqual(1,interpolator.at(m1),"Testing interpolation on constant curve at sample point");
    AssertEqual(1,interpolator.at(m2),"Testing interpolation on constant curve at sample point");
    AssertEqual(1,interpolator.at(m3),"Testing interpolation on constant curve at non-sample point");
    
    var curve = {};
    curve[m1] = 1;
    curve[m2] = 2;

    var interpolator = new analytics.interpolator(curve);
    AssertEqual(1,interpolator.at(m1),"Testing interpolation at sample point");
    AssertEqual(2,interpolator.at(m2),"Testing interpolation at sample point");
    AssertEqual(1.5,interpolator.at(m3),"Testing interpolation at non-sample point");
    
    var msPerYear = 1000*3600*24*365;
    var convertor = [
      (t,v)       => v*v*(t-today)/msPerYear,
      (t,totalv)  => Math.sqrt(totalv / (t - today)*msPerYear)
    ];

    var interpolator = new analytics.interpolator(curve, convertor);
    AssertEqual(1,interpolator.at(m1),"Testing interpolation at sample point, using convertors");
    AssertEqual(2,interpolator.at(m2),"Testing interpolation at sample point, using convertors");
    AssertEqual(1.7320510835475713,interpolator.at(m3),"Testing interpolation at non-sample point, using convertors");
  }

  function TestVolSurface() {
    AssertTrue(true,"Starting TestVolSurface");
    var volSurface = voldata.getVol("SPX");
    AssertEqual(21, volSurface.Points(), "Testing the number of points on the surface");
    AssertEqual("Aug16", volSurface.TenorLabels()[4], "Testing the tenor labels")
  }

  return { RunTests : RunTests };
} );