angular.module('tests',['utilities','dataService'])
.service("testscore", function(utils,dates, analytics,voldata,settings,VolSurfaceCollection) { 
  utils.log("Loading tests service")

  var testResults = [];

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

  
  return { 
    AssertEqual : AssertEqual,
    AssertTrue : AssertTrue,
    AssertNotEqual: AssertNotEqual,
    SetActiveCategory : SetActiveCategory,
    testResults: testResults,
     };
} );