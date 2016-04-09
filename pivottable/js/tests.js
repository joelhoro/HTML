var app = angular.module('tests',['utilsService'])
.service("tests", function(utils,analytics) { 

  var testResults = [];

  function AssertTrue(success, description,details='') {
    testResults.push({description: description, success: success, details: details});
    //$scope.failures = $scope.testresults.where({success: false}).length;
  }

  function AssertEqual(expected, actual, description) {
    var tolerance = 1e-5;
    var diff = Math.abs(expected-actual) < tolerance;
    if(!diff) {
      var details = 'Expected=' + expected + ' vs actual=' + actual;
    }
    AssertTrue(diff,description,details);
  }

  function RunTests(scope) {
    testResults = scope;
    TestBasic();
    TestInterpolation();
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
    
    var interpolator = new analytics.interpolator(curve, [(t,v) => v*v*(t-today), (t,v) => Math.sqrt(v/(t-today))]);
    AssertEqual(1,interpolator.at(m1),"Testing interpolation at sample point, using convertors");
    AssertEqual(2,interpolator.at(m2),"Testing interpolation at sample point, using convertors");
    AssertEqual(1.22474487139159,interpolator.at(m3),"Testing interpolation at non-sample point, using convertors");
  }


  return { RunTests : RunTests };
} );