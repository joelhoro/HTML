"use strict";

angular.module('dataService',['utilities','dataWarehouse'])
.service("voldata", function(utils,dataWarehouse,analytics,_, settings, dealerUtils, VolSurfaceCollection) { 

  utils.log("Initializing voldata service");
  // just so it's available in the lambdas;

  function retrieveVolSurfaces(successFn, errorHandler) {
      utils.log("Date=", settings.date);
    var convertSurface = data => {
        if (data.status !== undefined) data = data.data;
        var surfaceCollection = new VolSurfaceCollection(data, settings.date);
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
      dataWarehouse.getAjaxData(convertSurface, errorHandler, settings.dataMode,settings.date.format("y-m-d"), settings.withMetaData);
  }

  var gridConfig = function(dataField) {

        var count = 1;
        var columns = 
              [
           {field: 'tenor',       displayName: 'Expiry',      enableCellEdit: false,  width: 50   }, 
           // {field:'BMY',    displayName: 'BM yday',           enableCellEdit: false,   width: 55   },                         
           {field:'BMEST', displayName: 'BM est',               enableCellEditOnFocus: true,    width: 55    },
           {field:'D6', displayName: 'D-avg',                 enableCellEdit: false,   width: 55   }
              ];
        if(settings.showDealerDetails)
          columns = columns
           .concat(dealerUtils.dealers.map(dealer => ({
            field: 'D'+count++, displayName: dealerUtils.dealerInfo[dealer].shortname, 
            enableCellEdit: false,   width: 55   
           })));

        columns = columns
           .concat(
          [
           {field:'B1', displayName: 'Basis T-1',                  enableCellEdit: false,   width: 55   },
           {field:'B2', displayName: 'New basis',                  enableCellEdit: false,   width: 55   },
           {field:'Mark', displayName: 'Mark',               enableCellEdit: false,    width: 55    },
          ] );

        var config = {
            data: dataField,
            enableSorting: false,
            enableCellSelection: true,
            enableRowSelection: false,
            enableCellEditOnFocus: true,
            columnDefs: columns,
                };
        // set all readonly to a given class
        config.columnDefs
            .map(row => { if(!row.enableCellEdit) {row.cellClass="bold"; } });

        utils.log("Configuring grid: {0}", config);
        return config;
    };

return { 
    retrieveVolSurfaces: retrieveVolSurfaces, 
    gridConfig : gridConfig
};

} );
