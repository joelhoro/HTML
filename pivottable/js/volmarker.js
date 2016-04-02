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
          $scope.activeUnderlier = und;
          $scope.$broadcast("underlierChanged",und);
          $scope.data = $scope.volsurfaces[und];
          console.debug("Switching to ", und);//, $scope.data);
      }

      $scope.reloadSurfaces = function() {
        $scope.volsurfaces = $scope.underliers.toObject(u => voldata.getVol(u));
        $scope.$broadcast("underlierChanged");
      }

      $scope.next = function(inc) {
        var idx = $scope.activeUnderlierIndex() + inc;
        if(idx >= $scope.underliers.length)
          idx = 0;
        if(idx < 0)
          idx = 0;
        var und = $scope.underliers[idx];
        $scope.updateUnderlier(und);
      }

      var testMode = true;
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

        $(document).keydown(evt => {
          if(evt.keyCode == 40)
            $scope.next(1);
          if(evt.keyCode == 38)
            $scope.next(-1);
        })

      }

      $scope.initialize();
} );
  
app.controller("volSurfaceCtrl", function($scope) {
  var parent = $scope.$parent;
  //$scope.active = false;
  //debugger;
  this.initialize = function(und, tooltip = false, listen = false) { 
    console.debug("Initializing ",$scope.$id, " with listen=",listen, " und=", und);
    $scope.underlier = und; 
    $scope.tooltip = tooltip;
    $scope.listen = listen;
  }

  var thisCopy = this;

  var update = function(und) { 
      if(und == undefined)
        und = $scope.underlier;
      else
        $scope.underlier = und;
      thisCopy.initialize(und,$scope.tooltip,$scope.listen);
      //$scope.points = parent.volsurfaces[und].length;
      var newCurve = parent.volsurfaces[und]; 
      //console.debug(und, newCurve[0]);
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
        () => parent.updateUnderlier(und);
    };

    if($scope.listen) {
      parent.$on('underlierChanged', (evt,und) => update(und))
    }
    else
      parent.$watch('data', (n,o) => update(n[0].underlier), true);

} );  // chartCtrl

app.directive("volSurfaceChart", function() {
  return {
    restrict: "E",
    scope: true,//{ vs : "@"},
    template: `{{underlier}}
     <canvas  class="chart chart-line" chart-data="chartData"
                          chart-labels="chartLabels" chart-options="chartOptions" chart-legend="true" chart-series="chartSeries"
                          chart-hover="chartHover" >
                        </canvas> 
            `
  };
   } );

