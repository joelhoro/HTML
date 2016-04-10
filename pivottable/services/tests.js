angular.module('tests',['utilities','dataService'])
.service("tests", function(utils,dates, analytics,voldata) { 

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

  function AssertNotEqual(expected, actual, description) {
  	return AssertEqual(expected, actual, description, true);
  }

  function AssertEqual(expected, actual, description,flip=false) {
    if(typeof(expected)!="number" && typeof(expected) != "Date")
      var diff = utils.areEqual(expected,actual);
    else {
      var tolerance = 1e-5;

      var diff = Math.abs(expected-actual) < tolerance;
    }

   var s = JSON.stringify;
   if(!diff)
      var details = 'Expected=' + s(expected) + ' vs actual=' + s(actual);
  	if(flip) diff = !diff;

    AssertTrue(diff,description + " to be=" + s(expected) + " - actual=" + s(actual),details);
  }

  function RunTests() {
    testResults = [];
    TestBasic();
    TestArray();
    TestDates();
    TestInterpolation();
    //TestVolSurface();
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
    var a = {a:{b:[1,2,3], c: [1, { d : [2,3]}]}};
    var b = {a:{b:[1,2,3], c: [1, { d : [2,5]}]}};
    AssertEqual(a, utils.clone(a), "Test cloning object");
	AssertNotEqual(a, utils.clone(b), "Test cloning object");
  }

  function TestDates() {
    SetActiveCategory("Dates tests");
    AssertEqual("Apr", new Date("2016-4-9").getMonthAbbr(), "Test the month abbreviation");
    AssertEqual(new Date(),new Date(), "Test date equality");
    AssertEqual(new Date("2016-4-29"),new Date("2016-4-19").addDays(10), "Test addDays");
  }

  function TestArray() {
    SetActiveCategory("Basic tests");
    AssertEqual(6, [1,2,3].sum(), "Test the sum of an array");
    AssertEqual(2, [1,2,3].avg(), "Test the average of an array");
    AssertEqual(2, [2,null].avg(), "Test the average of an array with null values (ignored)");
    AssertEqual(1, [2,null].avg(false), "Test the average of an array with null values (considered as zeros)"); 
    AssertEqual(3, [6,3,9].min(), "Test the minimum of an array");
    AssertEqual(9, [6,3,9].max(), "Test the maximum of an array");

    AssertEqual({a: 123}, {a: 123}, "Test that 2 identical objects are equal");
    AssertEqual({1: "Label1", 2: "Label2"}, [1,2].toObject(x => "Label"+x),"Test toObject with one argument");
    AssertEqual({"Label1" : 1, "Label2" : 4}, [1,2].toObject(x => x*x, x => "Label"+x),"Test toObject with 2 arguments");
    AssertEqual({"A" : 1, "B" : 2}, ["A","B"].toObjectWithValues([1,2]), "Test 'toObjectWithValues'");

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