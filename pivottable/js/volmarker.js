var app = angular.module('volmarker', 
      ['utilsService','ngGrid','chart.js','dataService'] 
      );
app.controller("volmarkerCtrl", function($scope,$http,voldata) {

      console.log("Starting app at %s", new Date());
      $scope.startTime = new Date();
      $scope.voldata = voldata;


      $scope.updateUnderlier = function(und) {
          if(und == undefined)
            und = $scope.activeUnderlier;
          $scope.data = $scope.volsurfaces[und];
          $scope.activeUnderlier = und;
          console.debug("Switching to ", und);//, $scope.data);
          $scope.$broadcast("underlierChanged",und);
      }

      $scope.reloadSurfaces = function() {
        $scope.volsurfaces = $scope.underliers.toObject(u => voldata.getVol(u));
        $scope.$broadcast("underlierChanged");
      }

      var testMode = false;
      if(testMode)
        $scope.underliers = ["SPX","NKY"];
      else
        $scope.underliers = ["SPX", "SX5E", "NKY", "DAX", "SMI", "HSCEI" ];
                          //voldata.underliers;

      $scope.activeUnderlierIndex = function() {
        return $scope.underliers.indexOf($scope.activeUnderlier);
      }
      

      $scope.gridConfig = {
        data: 'data',
        enableCellSelection: true,
        enableRowSelection: false,
        columnDefs: [
                     {field: 'tenor',   displayName: 'Tenor',           enableCellEdit: false, width: 70 }, 
                     {field:'theovar',  displayName: 'Theoretical', enableCellEdit: false, width: 100 },
                     {field:'markedvar',displayName: 'Marked',      enableCellEdit: true, width: 70 },
                     {field:'newvar',   displayName: 'New Var',         enableCellEdit: true, width: 70 },
                     {field:'surfacetime',   displayName: 'Time',         enableCellEdit: false, width: 200 },

                    ]
      };

      $scope.initialize = function() {
        $scope.reloadSurfaces();
        $scope.activeUnderlier = $scope.underliers[0];
        $scope.updateUnderlier($scope.activeUnderlier);
      }

      $scope.initialize();
} );
  
app.controller("volSurfaceCtrl", function($scope) {
  var parent = $scope.$parent;
  this.tooltip = function(flag) { $scope.tooltip = flag };
  $scope.points = parent.volsurfaces[parent.activeUnderlier].length;
  var update = function(n,o) { 
      var newCurve = parent.volsurfaces[parent.activeUnderlier];    
      $scope.chartLabels = newCurve.map(r => r.tenor);
      $scope.chartSeries = [ "Theo", "Marked", "New"];
      $scope.chartData = [ newCurve.map(r => r.theovar), newCurve.map(r => r.markedvar), newCurve.map(r => r.newvar) ];
      $scope.chartOptions = { 
          scaleLabel : "<%=value%>%", 
          showTooltips: $scope.tooltip,
          legendTemplate: 
       "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        };
      
      // "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
      $scope.chartHover = 
        () => parent.updateUnderlier($scope.activeUnderlier);
      
    };
    parent.$watch('data',update, true);
    parent.$on('underlierChanged', update)

} );  // chartCtrl

app.directive("volSurfaceChart", function() {
  return {
    restrict: "E",
    template: `
     <canvas  class="chart chart-line" chart-data="chartData"
                          chart-labels="chartLabels" chart-options="chartOptions" chart-legend="true" chart-series="chartSeries"
                          chart-hover="chartHover" >
                        </canvas> 
            `
  };
   } );

