var app = angular.module('tests',['utilsService','dataService'])
.service("tests", function(utils,analytics,voldata) { 

  var testResults = [];
  var activeCategory = "Tests";

  function SetActiveCategory(category) {
    activeCategory = category;
  }

  function AssertTrue(success, description,details='') {
    var details = {category: activeCategory, description: description, success: success, details: details};
  //  console.debug("Test with success=", success, details);
    testResults.push(details);
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

  function RunTests() {
    testResults = [];
    TestBasic();
    TestArray();
    TestInterpolation();
    TestVolSurface();
    return testResults;
  }

  function TestBasic() {
    SetActiveCategory("Basic tests");
    AssertTrue(1+1==2, "Test that 1+1 = 2");
    AssertTrue(1+1==3, "Test that 1+1 = 3");

    AssertEqual(1.23,1.23456.round(2), "Test rounding");

    AssertEqual(3, [ x = 1, x.capfloor(3,8) ][1], "Test capfloor");
    AssertEqual(5, [ x = 5, x.capfloor(3,8) ][1], "Test capfloor");
    AssertEqual(8, [ x = 12, x.capfloor(3,8) ][1], "Test capfloor");

  }

  function TestArray() {
    SetActiveCategory("Basic tests");
    AssertEqual(6, [1,2,3].sum(), "Test the sum of an array");
    AssertEqual(2, [1,2,3].avg(), "Test the average of an array");
    AssertEqual(2, [2,null].avg(), "Test the average of an array with null values (ignored)");
    AssertEqual(1, [2,null].avg(false), "Test the average of an array with null values (considered as zeros)"); 
    AssertEqual(3, [6,3,9].min(), "Test the minimum of an array");
    AssertEqual(9, [6,3,9].max(), "Test the maximum of an array");

  }

  function TestInterpolation() {
    SetActiveCategory("Interpolation tests");
    // interpolator
    var flatCurve = {};
    var today = new Date();
    flatCurve[m1=today.addDays(30)] = 1;
    flatCurve[m2=today.addDays(60)] = 1;
    m3 = today.addDays(45);

    var interpolator = new analytics.interpolator(flatCurve);
    AssertEqual(1,interpolator(m1),"Testing interpolation on constant curve at sample point");
    AssertEqual(1,interpolator(m2),"Testing interpolation on constant curve at sample point");
    AssertEqual(1,interpolator(m3),"Testing interpolation on constant curve at non-sample point");
    
    var curve = {};
    curve[m1] = 1;
    curve[m2] = 2;

    var interpolator = new analytics.interpolator(curve);
    AssertEqual(1,interpolator(m1),"Testing interpolation at sample point");
    AssertEqual(2,interpolator(m2),"Testing interpolation at sample point");
    AssertEqual(1.5,interpolator(m3),"Testing interpolation at non-sample point");
    
    var msPerYear = 1000*3600*24*365;
    var convertor = [
      (t,v)       => v*v*(t-today)/msPerYear,
      (t,totalv)  => Math.sqrt(totalv / (t - today)*msPerYear)
    ];

    var interpolator = new analytics.interpolator(curve, convertor);
    AssertEqual(1,interpolator(m1),"Testing interpolation at sample point, using convertors");
    AssertEqual(2,interpolator(m2),"Testing interpolation at sample point, using convertors");
    AssertEqual(1.7320510835475713,interpolator(m3),"Testing interpolation at non-sample point, using convertors");
  }

  function TestVolSurface() {
    SetActiveCategory("VolSurface tests");
    var volSurface = voldata.getVol("SPX");
    AssertEqual(21, volSurface.Points(), "Testing the number of points on the surface");
    AssertEqual("Aug16", volSurface.TenorLabels()[4], "Testing the tenor labels")
  }

  return { RunTests : RunTests };
} );