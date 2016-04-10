angular.module("volmarker")
.service("volmarkerUtils", function(utils) {

  function filterUnderliers(underliers) {

    var search = location.search;
    if(search.contains("test")) {
      utils.log("Starting in test mode");
      return ["SPX","NKY"];
    }
    else if(search.contains("full")) {
      utils.log("Starting in full mode");
      return underliers;
    }
    else {
      utils.log("Starting in extended test mode");
      return ["SPX", "SX5E", "NKY", "DAX", "SMI", "HSCEI" ];
    }
  }

  return {
    filterUnderliers : filterUnderliers,
  }
});