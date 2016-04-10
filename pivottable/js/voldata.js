var app = angular.module('dataService',['utilsService','dataWarehouse'])
.service("voldata", function(utils,dataWarehouse,analytics) { 

  utils.log("Initializing voldata service");
  // just so it's available in the lambdas;
  var dataMode = 'local';
  //dataMode = 'ajax';

  var double = x => { 
    if(x == "#VALUE!" || x == undefined || x === 0)
      return null;
    if(typeof(x)=="number")
      return x;
    var number = Number(x.replace("%",""));
    return number.round(2);
  };

  var date = x => {
    var d = new Date(x);
    return d.getMonthAbbr() + (d.getYear()-100);
  } 

  var getTime = x => x.substr(0,x.indexOf("M")+1);


 var cleanDataAsync = successFn => {
    var totalFn = d => successFn(d);
    if(dataMode == 'ajax')
      dataWarehouse.getAjaxData(totalFn);
    else {
      totalFn(dataWarehouse.dataFn());
    }
 }

  function getVol(underlier,successFn) {
      cleanDataAsync(data => {
        var result = _.filter(data,{Index:underlier})[0];
        var surface = new analytics.VolSurface(result);
        utils.log("Getting volsurface for {0} - found {1} points", underlier, result.length);
        successFn(surface);
      })
    }

  // function getVol(underlier) {
  //     var data = dataWarehouse.dataFn();
  //     return new analytics.VolSurface(_.filter(data, { Index: underlier})[0]);
  //     utils.log("Getting volsurface for {0} - found {1} points", underlier, result.length);
  //     return result;
  // }


  var gridConfig = function(dataField) {
        var config = {
            data: dataField,
            enableCellSelection: true,
            enableRowSelection: false,
            columnDefs: [
                         {field: 'tenor',       displayName: 'Expiry',      enableCellEdit: false,  width: 50   }, 
                         // {field:'theovar',      displayName: 'Theo',            enableCellEdit: false,  width: 40   },
                         // {field:'markedvar',    displayName: 'Marked',          enableCellEdit: true,   width: 40   },
                         //{field:'basis',        displayName: 'Basis',       enableCellEdit: false,  width: 40   },
                         // {field:'newtheovar',   displayName: 'NewTheo',        enableCellEdit: false,  width: 50   },
                         {field:'BMY',    displayName: 'BM yday',           enableCellEdit: false,   width: 55   },                         
                         {field:'BM', displayName: 'BM tday',               enableCellEdit: true,    width: 55    },
                         {field:'D3', displayName: 'D-avg',                 enableCellEdit: false,   width: 55   },
                         {field:'D1', displayName: 'MS',                  enableCellEdit: false,   width: 55   },
                         {field:'D2', displayName: 'SG',                  enableCellEdit: false,   width: 55   },
                        ]
                };
        // set all readonly to a given class
        config.columnDefs
            .map(row => { if(!row.enableCellEdit) row.cellClass="bold"; })

        utils.log("Configuring grid: {0}", config);
        return config;
    };


  var getUnderliers = function(successFn) {
    cleanDataAsync(data => {
      var underliers = _.uniq(data.map(r => r.Index));
      successFn(underliers);
    });
  }


return { 
    getUnderliers: getUnderliers,
    getVol: getVol, 
    gridConfig : gridConfig
};

} );
