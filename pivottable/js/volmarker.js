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
        $scope.points = _.keys($scope.volsurfaces).toObject(und => $scope.volsurfaces[und].length)
        $scope.$broadcast("underlierChanged");
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
                     {field: 'tenor',     displayName: 'Tenor',           enableCellEdit: false, width: 70 }, 
                     {field:'theovar',    displayName: 'Theo',            enableCellEdit: false, width: 50 },
                     {field:'markedvar',  displayName: 'Marked',          enableCellEdit: true, width: 60 },
                     {field:'basis',      displayName: 'Basis',           enableCellEdit: false, width: 50 },
                     {field:'newtheovar',   displayName: 'NewTheo',       enableCellEdit: false, width: 80 },
                     {field:'newmarkedvar',   displayName: 'NewMark',     enableCellEdit: true, width: 70 },
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
  //debugger;
  var parent = $scope.$parent.$parent;
  $scope.underlier = $scope.$parent.underlier;
  var underlier = $scope.underlier;
  // this.init = function(und) { $scope.underlier = und; };
  // this.tooltip = function(flag) { $scope.tooltip = flag };

  var update = function(und) { 
      if(und != undefined)
        $scope.underlier = und;
      else
        und = $scope.underlier;
      var newCurve = parent.volsurfaces[und];    
      $scope.chartLabels = newCurve.map(r => r.tenor);
      $scope.chartSeries = [ "Theo", "Marked", "NewTheo", "NewMark"];
      $scope.chartData = [ 
          newCurve.map(r => r.theovar), 
          newCurve.map(r => r.markedvar), 
          newCurve.map(r => r.newtheovar),
          newCurve.map(r => r.newmarkedvar) 
          ];
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
    update(underlier);
    parent.$watch('data',(n,o) => { 
      var newUnderlier = n[0].underlying;
      if(newUnderlier == underlier)
        update(newUnderlier);
    }, true);
    if($scope.listen=="1")
      parent.$on('underlierChanged', (evt,und) => update(und))

} );  // chartCtrl

app.directive("volSurfaceChart", function() {
  return {
    restrict: "E",
     scope: {
       underlier : '@',
       listen: '@',
       name: '@',
     },
    transclude: true,
    template: `
<div ng-controller="volSurfaceCtrl">
<canvas  class="chart chart-line" chart-data="chartData"
                            chart-labels="chartLabels" chart-options="chartOptions" chart-legend="true" chart-series="chartSeries"
                            chart-hover="chartHover" >
                          </canvas> 
</div>

    `,
    lindddk:  (scope,elt,attr) => {
      scope.underlier = attr.underlier;
      var html = `
        Und => {{underlier}}
       <canvas  class="chart chart-line" chart-data="chartData"
                            chart-labels="chartLabels" chart-options="chartOptions" chart-legend="true" chart-series="chartSeries"
                            chart-hover="chartHover" >
                          </canvas> 
              `;
              debugger;
      elt.html(html);              

    } 
  };
   } );

