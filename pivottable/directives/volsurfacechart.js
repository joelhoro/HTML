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
            $scope.underlier = und;
            var surface = $scope.volsurfaces[und];
            if(surface === undefined) {
              return;
            }

            var config = chartService.getChartSpecs($scope.volsurfaces, surface, 
              showdatesonaxis, $scope.tenor, $scope.type, $scope.tooltip);

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
       volsurfaces: '=',
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
