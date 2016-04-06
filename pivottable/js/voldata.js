var app = angular.module('dataService',['utilsService','dataWarehouse'])
.service("voldata", function(utils,dataWarehouse) { 

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

  var cleanData = downloadedData =>
   downloadedData.map(function(r)
   {
      var dealer = double(r["SGVS"]);
      var newbasis;
      if(dealer == null)
        newbasis = null;
      else
        newbasis = double(r["SGVS"])- double(r["New Market Var Fn"]);

      return { 
          underlying:   r.Underlying,
          maturity:     new Date(r["End Date"]),
          tenor:        date(r["End Date"]), 
          theovar:      double(r["Var from Surface (0 Basis) \nToday"]),
          markedvar:    double(r["Marked Var"]),
          newtheovar:   double(r["New Market Var Fn"]),//+Math.random()-0.5).round(2),
          basis:        double(r["Marked Basis\nYesterday"]),
          newmarkedvar: double(r["New Market Var Fn"]) + double(r["Market Basis"]),
          dealervar:    double(r["SGVS"]),
          newbasis:     newbasis,
          surfacetime:  getTime(r["SurfaceDateTime(local)"]),
          leader:       r["Leader/Follower"] == "Leader"
        } 
    })

 var cleanDataAsync = successFn => {
    var totalFn = d => successFn(cleanData(d));
    if(dataMode == 'ajax')
      dataWarehouse.getAjaxData(totalFn);
    else {
      totalFn(dataWarehouse.data);
    }
 }

  function getVol(underlier,successFn) {
      cleanDataAsync(data => {
        var result = _.filter(data,{underlying:underlier});
        utils.log("Getting volsurface for {0} - found {1} points", underlier, result.length);
        successFn(result);
      })
    }

  var gridConfig = function(dataField) {
        var config = {
            data: dataField,
            enableCellSelection: true,
            enableRowSelection: false,
            columnDefs: [
                         {field: 'tenor',       displayName: 'Expiry',           enableCellEdit: false,  width: 50   }, 
                         // {field:'theovar',      displayName: 'Theo',            enableCellEdit: false,  width: 40   },
                         // {field:'markedvar',    displayName: 'Marked',          enableCellEdit: true,   width: 40   },
                         {field:'basis',        displayName: 'Basis',           enableCellEdit: false,  width: 40   },
                         // {field:'newtheovar',   displayName: 'NewTheo',         enableCellEdit: false,  width: 50   },
                         {field:'newmarkedvar', displayName: 'BM est',         enableCellEdit: true,   width: 55   },
                         {field:'dealervar',    displayName: 'SocGen',            enableCellEdit: false,   width: 55   },                         
                         {field:'surfacetime',  displayName: 'Time',            enableCellEdit: false,  width: 200  },
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
      var underliers = _.uniq(data.map(r => r.Underlying));
      successFn(underliers);
    });
  }

return { 
    getUnderliers: getUnderliers,
    getVol: getVol, 
    gridConfig : gridConfig
};

} );
