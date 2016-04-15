angular.module("volmarker")
.service("volmarkerUtils", function(utils, settings) {
  utils.log("Loading volmarkerUtils");
  
  function filterUnderliers(allUnderliers, underlierString) {
    if(underlierString === undefined)
      underlierString = settings.underliers;
    
    if(underlierString === "") {
      utils.log("Starting in full mode - with {0} underliers", allUnderliers.length);
      return allUnderliers;
    }

    settings.underliers = underlierString.toUpperCase();
    var subset = settings.underliers.split(",").filter(x => allUnderliers.contains(x) );
    utils.log("Starting in test mode - with {0} underliers", subset.length);
    return subset;
  }

  return {
    filterUnderliers : filterUnderliers,
  }
});