app.directive("volSurfaceChart", function() {

  function controller($scope,voldata, utils, analytics) {
        utils.log("Initializing volsurface controller - scope=" + $scope.$id);  
        var underlier = $scope.underlier;
        var update = function(und) { 
            if(und != undefined)
              $scope.underlier = und;
            else
              und = $scope.underlier;
            var newCurve = $scope.$parent.volsurfaces[und];

            $scope.chartLabels = newCurve.map(r => r.tenor);
            if($scope.type == 'fwd') {
              $scope.chartSeries = [ "Fwd variance"  ];
              var fwdCurve = analytics.fwdVarCurve(newCurve, $scope.tenor);
              $scope.chartData = [ 
                  fwdCurve, 
                  ];                            
            }
            else if($scope.type == 'basis')  {
                $scope.chartSeries = [ "Basis (T-1)", "Basis (T)"  ];
                $scope.chartData = [ 
                    newCurve.map(r => r.basis), 
                    newCurve.map(r => r.newbasis), 
                    ];              
            }
            else if($scope.type == 'totalstdev')  {
                var today = new Date();
                $scope.chartSeries = [ "Total stdev"  ];
                $scope.chartData = [ analytics.stdevCurve(newCurve,'maturity','newmarkedvar',today) ];
            }
            else {
              $scope.chartSeries = [ "BM estimate", "Dealer" ];
              $scope.chartData = [ 
                  // newCurve.map(r => r.theovar), 
                  // newCurve.map(r => r.markedvar), 
                  // newCurve.map(r => r.newtheovar),
                  newCurve.map(r => r.newmarkedvar),
                  newCurve.map(r => r.dealervar),
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
  }

  function templateFn(elt,attr)     
  {
      var tmpl = '<div ng-transclude/><canvas  class="chart ' + 
        (attr.type=='basis' ? 'chart-bar' : 'chart-line') + '"' +
      ` chart-data="chartData" chart-legend=true chart-labels="chartLabels" chart-options="chartOptions"  chart-series="chartSeries"
       chart-hover="chartHover" >
        </canvas> 
      `;

     return tmpl;
  };


  return {
    restrict: "E",
    transclude: true,
    scope: {
       underlier : '@',
       listen: '@',
       name: '@',
       tooltip: '@',
       type: '@',
       tenor: '@'
     },
    template: templateFn,
    controller: controller
  } 

}
);
