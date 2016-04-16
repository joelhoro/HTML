angular.module('tests')
.service("tests", function(utils,testscore, volsurfacetests, interpolationtests, dates, analytics,voldata,settings,VolSurfaceCollection) { 
  utils.log("Loading tests service")

  var AssertTrue = testscore.AssertTrue;
  var AssertEqual = testscore.AssertEqual;
  var AssertNotEqual = testscore.AssertNotEqual;
  var SetActiveCategory = testscore.SetActiveCategory;

  function RunTests() {
    TestBasic();
    TestArray();
    TestDates();
    interpolationtests.Test();
    volsurfacetests.Test();
    return testscore.testResults;
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

    var m = 1000 * 60;
    AssertEqual( "1 minute", utils.toFriendlyTime(m), "Testing toFriendTime");
    AssertEqual( "50 minutes", utils.toFriendlyTime(50*m), "Testing toFriendTime");
    AssertEqual( "8 hours", utils.toFriendlyTime(60*m*8), "Testing toFriendTime");
    AssertEqual( "1 day", utils.toFriendlyTime(60*m*27), "Testing toFriendTime");
    AssertEqual( "4 days", utils.toFriendlyTime(60*m*24*4), "Testing toFriendTime");
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


  
  return { RunTests : RunTests };
} );