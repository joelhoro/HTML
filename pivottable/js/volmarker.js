var app = angular.module('volmarker', 
      ['utilsService','ngGrid','chart.js','dataService'] 
      );
app.controller("volmarkerCtrl", function($scope,$,$http,voldata) {

      console.log("Starting app at %s", new Date());
      $scope.startTime = new Date();

      class VolSurface {
          constructor(underlier) {
            this.underlier = underlier;
            this.curve = voldata.getVol(underlier);
          }
      }

      $scope.updateUnderlier = function(und) {
          if(und == undefined)
            und = $scope.underlier;
          $scope.activeVolSurface = new VolSurface(und);
          $scope.data = $scope.activeVolSurface.curve;
          console.debug("Switching to ", und, $scope.data);
          //$scope.button("#underlier [value="+und+"]").selected = true;
      }

      $scope.underliers = //["SPX", "SX5E", "NKY", "DAX", "SMI", "HSCEI" ];
                          voldata.underliers;
      $scope.underlier = $scope.underliers[0];
      $scope.updateUnderlier($scope.underlier);

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
      
  $scope.$watch('data', function(newCurve,oldCurve) {
    // update chart when curve changes
    console.debug("Switching from ", oldCurve, " to ", newCurve);
    $scope.chartLabels = newCurve.map(r => r.tenor);
    $scope.chartSeries = [ "Var (0 basis)", "Marked var", "New var"];
    $scope.chartData = [ newCurve.map(r => r.theovar), newCurve.map(r => r.markedvar), newCurve.map(r => r.newvar) ];
    $scope.chartOptions = { scaleLabel : "<%=value%>%"};
  },true)


} );
