"use strict";
angular.module('volmarker')
  .directive("volSurfaceChart", function(utils, chartService) {

  function controller($scope,voldata, utils) {

        utils.log("Running volsurface controller - scope=" + $scope.$id);  
        var underlier = $scope.underlier;
        var showdatesonaxis = ($scope.showdatesonaxis === undefined) || ($scope.showdatesonaxis === '1');

        var update = function(und) { 
            $scope.underlier = und;
            var surface = $scope.volsurfaces[und];
            if(surface === undefined) {
              return;
            }

            var config = chartService.getChartSpecs($scope.volsurfaces, surface, 
              showdatesonaxis, $scope.tenor, $scope.type, $scope.tooltip);

//            _.extend($scope, config);
            ["Data","Series","Labels","Options"].map(t => {
              var field = "chart" + t;
              if(!utils.areEqual($scope[field],config[field])) {
                $scope[field] = config[field];
              }
            });

            if(!$scope.listen) {
              $scope.chartHover = () => update(underlier);
            }
          };

        update(underlier);

        var parent = $scope.$parent;

        parent.$watch('data', newdata => { 
          if(newdata === undefined) { return; }
          var surfaces = $scope.volsurfaces;
          var refresh = false;
          var idx = 0;

          var underlier = newdata[0].underlier;
          newdata.map(row => {
            var obs = surfaces[underlier].volSurface.Observables[idx++];
            var oldValue = obs.Quotes["BM@T"].round(4);
            var newValue = (row.BM / 100);
            
            var tolerance = 1e-6;
            if(Math.abs(oldValue-newValue)>tolerance) {
              utils.log("Changing mark for {1}: {2}->{3}", underlier, obs.Name, oldValue, newValue);
              obs.Quotes["BM@T"] = newValue;
              refresh = true;
            }
          });
          if(refresh) {
            parent.update(false);
          }

        }, true);

        if($scope.listen === "1") {
           $scope.$watch('underlier', newUnd => update(newUnd));
           $scope.$on("DataChanged", (_,und) => { utils.log("data changed for "+und); update(und); });
        }
  }

  function templateFn(elt,attr)     
  {
      var tmpl = '<div ng-transclude/><canvas  class="chart ' + 
        (attr.type === 'basis' ? 'chart-bar' : 'chart-line') + '"' +
      ' chart-data="chartData" chart-legend=' +
        (attr.nolegend === '1' ? "false" : "true" ) +
        ` chart-labels="chartLabels" chart-options="chartOptions"  chart-series="chartSeries"
       chart-hover="chartHover" >
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
