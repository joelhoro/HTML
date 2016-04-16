"use strict";
angular.module('volmarker')

  .directive("volSurfaceChart", function(utils, chartService) {

  function controller($scope,voldata, utils) {

        utils.log("Running volsurface controller - scope=" + $scope.$id);  

        var underlier = $scope.underlier;
        var showdatesonaxis = ($scope.showdatesonaxis === undefined) || ($scope.showdatesonaxis === '1');

        var description = function() {
          return "VolSurfaceChart[type="+$scope.type+"|tenor="+$scope.tenor+"] - Id=" + $scope.$id;
        }

        var setChartData = function(und) { 
            if(und !== undefined)
              $scope.underlier = und;
            var surface = $scope.volSurfaceCollection.collection[$scope.underlier];
            if(surface === undefined) {
              return;
            }

            var config = chartService.getChartSpecs(surface, $scope.volSurfaceCollection.collection.SPX,
              showdatesonaxis, $scope.tenor, $scope.type, $scope.tooltip, $scope.$parent.ratioDelta);

//            _.extend($scope, config);
            ["Data","Series","Labels","Options", "Colours"].map(t => {
              var field = "chart" + t;
              if(!utils.areEqual($scope[field],config[field])) {
                $scope[field] = config[field];
              }
            });

            if(!$scope.listen) {
              $scope.chartHover = () => setChartData(underlier);
            }
          };

        setChartData(underlier);


        if($scope.listen === "1") {
           $scope.$watch('underlier', newUnd => setChartData(newUnd));
           $scope.$on("DataChanged", (_,und) => { utils.log("data changed for "+und + " in " + description()); setChartData(und); });
        }
        if($scope.type == "ratio")
           $scope.$parent.$watch('ratioDelta', _ => { console.debug("ratio changed to " + _); setChartData() });
  }

  function templateFn(elt,attr)     
  {
      var tmpl = '<div ng-transclude/><canvas  class="chart ' + 
        (attr.type === 'basis' ? 'chart-bar' : 'chart-line') + '"' +
      ' chart-data="chartData" chart-legend=' +
        (attr.nolegend === '1' ? "false" : "true" ) +
        ` chart-labels="chartLabels" chart-options="chartOptions"  chart-series="chartSeries"
       chart-hover="chartHover" chart-Colours="chartColours" >
        </canvas> 
      `;

     return tmpl;
  }


  return {
    restrict: "E",
    transclude: true,
    scope: {
       //// variables
       underlier : '=',
       volSurfaceCollection: '=volsurfacecollection',
       tenor: '=',
       //// settings
       listen: '@',
       name: '@',
       tooltip: '@',
       type: '@',
       showdatesonaxis : '@',
       //volsurface: '@',
       scale: '@',
     },
    template: templateFn,
    controller: controller
  };

}
);
