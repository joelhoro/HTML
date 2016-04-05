app.directive("volSurfaceChart", function() {
  return {
    restrict: "E",
     scope: {
       underlier : '@',
       listen: '@',
       name: '@',
       tooltip: '@',
      type: '@'
     },
     controller : function($scope,voldata, utils) {
        utils.log("Initializing volsurface controller - scope=" + $scope.$id);  
        var underlier = $scope.underlier;
        $scope.basis = $scope.type === 'basis';
        $scope.chartClass='chart-line';
        var update = function(und) { 
            if(und != undefined)
              $scope.underlier = und;
            else
              und = $scope.underlier;
            var newCurve = $scope.$parent.volsurfaces[und];

            $scope.chartLabels = newCurve.map(r => r.tenor);
            if($scope.basis)  {
              $scope.chartSeries = [ "Basis" ];
              $scope.chartData = [ 
                  newCurve.map(r => r.basis), 
                  ];              
            }
            else {
              $scope.chartSeries = [ "Theo", "Marked", "NewTheo", "NewMark"];
              $scope.chartData = [ 
                  newCurve.map(r => r.theovar), 
                  newCurve.map(r => r.markedvar), 
                  newCurve.map(r => r.newtheovar),
                  newCurve.map(r => r.newmarkedvar) 
                  ];              
            }
              $scope.chartOptions = { 
                scaleLabel : "<%=value%>%", 
                showTooltips: $scope.tooltip == "1",
                legendTemplate: 
             "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
              };

            if(!$scope.listen)
              $scope.chartHover = () => parent.updateUnderlier(und);
            
          };

          update(underlier);
          var parent = $scope.$parent;
          parent.$watch('data',(n,o) => { 
            var newUnderlier = n[0].underlying;
            if(newUnderlier == underlier)
              update(newUnderlier);
          }, true);
          if($scope.listen=="1")
            parent.$on('underlierChanged', (evt,und) => update(und))
     },
    template: (elt,attr) => {
      var tmpl = '<canvas  class="chart ' + 
        (attr.type=='basis' ? 'chart-line' : 'chart-line') + 
      ` 
        " chart-data="chartData" chart-labels="chartLabels" chart-options="chartOptions" chart-legend="true" chart-series="chartSeries"
        chart-hover="chartHover" >
        </canvas> 
      `;

      return tmpl;
     },
  };
   } );
