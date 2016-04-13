"use strict";

angular.module('dataService',['utilities','dataWarehouse'])
.service("voldata", function(utils,dataWarehouse,analytics,_, settings, dealerUtils) { 

  utils.log("Initializing voldata service");
  // just so it's available in the lambdas;

  function retrieveVolSurfaces(successFn, dataMode) {
      utils.log("Date=", settings.date);
    var convertSurface = data => {
        if (data.status !== undefined) data = data.data;
        var surface = data.toObject(row => new analytics.VolSurface(row), row => row.Index);
        utils.log("Getting volsurfaces - found {1} underliers", _.keys(surface).length);
        successFn(surface);
      };
    if(dataMode === 'local') {
      convertSurface(dataWarehouse.dataFn());   
      return;
    }
    else
      dataWarehouse.getAjaxData(convertSurface,dataMode,settings.date, settings.withMetaData);
  }

  var gridConfig = function(dataField) {

        var count = 1;
        var columns = 
              [
           {field: 'tenor',       displayName: 'Expiry',      enableCellEdit: false,  width: 50   }, 
           {field:'BMY',    displayName: 'BM yday',           enableCellEdit: false,   width: 55   },                         
           {field:'BM', displayName: 'BM tday',               enableCellEditOnFocus: true,    width: 55    },
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
