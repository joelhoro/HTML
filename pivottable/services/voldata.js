"use strict";

angular.module('dataService',['utilities','dataWarehouse'])
.service("voldata", function(utils,dataWarehouse,analytics,_, settings) { 

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
        var config = {
            data: dataField,
            enableSorting: false,
            enableCellSelection: true,
            enableRowSelection: false,
            enableCellEditOnFocus: true,
            columnDefs: [
                         {field: 'tenor',       displayName: 'Expiry',      enableCellEdit: false,  width: 50   }, 
                         {field:'BMY',    displayName: 'BM yday',           enableCellEdit: false,   width: 55   },                         
                         {field:'BM', displayName: 'BM tday',               enableCellEditOnFocus: true,    width: 55    },
                         {field:'D6', displayName: 'D-avg',                 enableCellEdit: false,   width: 55   },
                         {field:'D1', displayName: 'MS',                  enableCellEdit: false,   width: 55   },
                         {field:'D2', displayName: 'SG',                  enableCellEdit: false,   width: 55   },
                         {field:'D3', displayName: 'ML',                  enableCellEdit: false,   width: 55   },
                         {field:'D4', displayName: 'JPM',                  enableCellEdit: false,   width: 55   },
                         {field:'D5', displayName: 'HSBC',                  enableCellEdit: false,   width: 55   },
                         {field:'B1', displayName: 'Basis T-1',                  enableCellEdit: false,   width: 55   },
                         {field:'B2', displayName: 'New basis',                  enableCellEdit: false,   width: 55   },
                         {field:'Mark', displayName: 'Mark',               enableCellEdit: false,    width: 55    },
                        ]
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
