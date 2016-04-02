var app = angular.module('volmarker', 
      ['utilsService','ngGrid','chart.js','dataService'] 
      );
app.controller("volmarkerCtrl", function($scope,$,$http,voldata) {

      console.log("Starting app at %s", new Date());
      $scope.startTime = new Date();
      $scope.voldata = voldata;


      $scope.updateUnderlier = function(und) {
          if(und == undefined)
            und = $scope.activeUnderlier;
          $scope.data = $scope.volsurfaces[und];
          $scope.activeUnderlier = und;
          console.debug("Switching to ", und, $scope.data);
      }

      $scope.underliers = ["SPX", "SX5E", "NKY", "DAX", "SMI", "HSCEI" ];
                          //voldata.underliers;
      $scope.volsurfaces = $scope.underliers.toObject(u => voldata.getVol(u));

      $scope.activeUnderlierIndex = function() {
        return $scope.underliers.indexOf($scope.underlier);
      }
      
      $scope.activeUnderlier = $scope.underliers[0];
      $scope.updateUnderlier($scope.activeUnderlier);
      $scope.edit = function(a,b,c) { debugger; }
      $scope.gridConfig = {
        data: 'data',
        enableCellSelection: true,
        enableRowSelection: false,
        enableCellEdit: true,
        columnDefs: [
                     {field: 'tenor',   displayName: 'Tenor',           enableCellEdit: false }, 
                     {field:'theovar',  displayName: 'Theoretical Var', enableCellEdit: false },
                     {field:'markedvar',displayName: 'Marked Var',      enableCellEdit: true },
                     {field:'newvar',   displayName: 'New Var',         enableCellEdit: true },
                    ]
      };

} );
  
app.controller("chartCtrl", function($scope,$,$http,voldata) {
  var parent = $scope.$parent;
  $scope.underlier = parent.underlier;
//  debugger;
  $scope.index = parent.underliers.indexOf(parent.underlier);
  parent.$watch('data', function() { 
      var n = parent.volsurfaces[parent.underlier];    
      var newCurve = n;// parent.volsurfaces[parent.underlier];// n;//.getVol($scope.underlier);
      $scope.chartLabels = newCurve.map(r => r.tenor);
      $scope.chartSeries = [ "Var (0 basis)", "Marked var", "New var"];
      $scope.chartData = [ newCurve.map(r => r.theovar), newCurve.map(r => r.markedvar), newCurve.map(r => r.newvar) ];
      $scope.chartOptions = { scaleLabel : "<%=value%>%"};
      $scope.chartHover = 
        () => parent.updateUnderlier($scope.underlier);
      
    }, true);

    //})
    }

);