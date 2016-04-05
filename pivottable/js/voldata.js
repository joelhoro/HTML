var app = angular.module('dataService',['utilsService','dataWarehouse'])
.service("voldata", function(utils,dataWarehouse) { 

  utils.log("Initializing voldata service");
  // just so it's available in the lambdas;
  var data = dataWarehouse.data;

  var double = x => { 
    if(typeof(x)=="number")
      return x;
    if(x == "#VALUE!" || x == undefined)
      return 0;
    var number = Number(x.replace("%",""));
    return number.round(2);
  };

  var date = x => {
    var d = new Date(x);
    return d.getMonthAbbr() + (d.getYear()-100);
  } 

  var getTime = x => x.substr(0,x.indexOf("M")+1);

  var cleanData = () => data.map(
    r => ( { 
        underlying:   r.Underlying,
        tenor:        date(r["End Date"]), 
        theovar:      double(r["Var from Surface (0 Basis)"]),
        markedvar:    double(r["Marked Var"]),
        newtheovar:   double(r["New Market Var Fn"]),//+Math.random()-0.5).round(2),
        basis:        double(r["Marked Basis\nYesterday"]),
        newmarkedvar: double(r["New Market Var Fn"]) + double(r["Market Basis"]),
        surfacetime:  getTime(r["SurfaceDateTime(local)"])
      } )
    );

  function getVol(underlier) {
      var result = _.filter(cleanData(),{underlying:underlier});
      utils.log("Getting volsurface for {0} - found {1} points", underlier, result.length);
      return result;
  }

  var gridConfig = function(dataField) {
        var config = {
            data: dataField,
            enableCellSelection: true,
            enableRowSelection: false,
            columnDefs: [
                         {field: 'tenor',       displayName: 'Tenor',           enableCellEdit: false,  width: 70   }, 
                         {field:'theovar',      displayName: 'Theo',            enableCellEdit: false,  width: 50   },
                         {field:'markedvar',    displayName: 'Marked',          enableCellEdit: true,   width: 60   },
                         {field:'basis',        displayName: 'Basis',           enableCellEdit: false,  width: 50   },
                         {field:'newtheovar',   displayName: 'NewTheo',         enableCellEdit: false,  width: 80   },
                         {field:'newmarkedvar', displayName: 'NewMark',         enableCellEdit: true,   width: 70   },
                         {field:'surfacetime',  displayName: 'Time',            enableCellEdit: false,  width: 200  },
                        ]
                };
        // set all readonly to a given class
        config.columnDefs
            .map(row => { if(!row.enableCellEdit) row.cellClass="bold"; })

        utils.log("Configuring grid: {0}", config);
        return config;
    };

  var underliers = _.uniq(data.map(r => r.Underlying));

return { 
    underliers : underliers,
    getVol: getVol, 
    gridConfig : gridConfig
};

} );
