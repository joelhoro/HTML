"use strict";

angular.module('dataService',['utilities','dataWarehouse'])
.service("voldata", function(utils,dataWarehouse,analytics,_, settings, dealerUtils, VolSurfaceCollection) { 

  utils.log("Initializing voldata service");
  // just so it's available in the lambdas;

  function retrieveVolSurfaces(successFn, errorHandler) {
      utils.log("Date=", settings.date);
    var convertSurface = data => {
        var surfaceCollection;
        if(data == undefined)
          surfaceCollection = new VolSurfaceCollection([],settings.date);
        else {
          if (data.status !== undefined) data = data.data;
          surfaceCollection = new VolSurfaceCollection(data.VolData, settings.date);
        }
        utils.log("Getting volsurfaces - found {1} underliers", surfaceCollection.UnderliersCount());
        successFn(surfaceCollection);
      };
    if(settings.dataMode === 'local') {
      var timeOut = settings.fakeSleepOnLocalMode ? 1000 : 0;
      utils.log("Sleeping for {0}ms to fake server request", timeOut);
      var date = settings.date.format("y-m-d")
      var action = () => convertSurface(dataWarehouse.dataFn()[date]);
      if(timeOut>0)
        setTimeout(action, timeOut);
      else
        action(); // for testing purposes
    }
    else
      dataWarehouse.getAjaxData(convertSurface, errorHandler, settings.dataMode,
        settings.date.format("y-m-d"), settings.withMetaData, settings.forceRefresh);
  }

return { 
    retrieveVolSurfaces: retrieveVolSurfaces, 
};

} );
