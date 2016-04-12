"use strict";
angular.module('volmarker')
  .service("chartService", function(analytics, ChartJs) {
    function adjustScale(scope) {
          var min = scope.chartData.map(x => x.min()).min();
          var width = 5;
          min = min - (min%width);
          var max = scope.chartData.map(x => x.max()).max();
          scope.chartOptions.scaleOverride = true;
          scope.chartOptions.scaleSteps = (max-min)/width;
          scope.chartOptions.scaleStepWidth = width;
          scope.chartOptions.scaleStartValue = min;
        }

    function getChartSpecs(volsurfaces, surface, showdatesonaxis, tenor, type, tooltip) {
      var scope = {};
      scope.chartOptions = { 
        scaleLabel : "<%=value%>%", 
        datasetFill: false,
        showTooltips: tooltip === "1",
        legendTemplate: 
     "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      };

      scope.chartColours = ChartJs.Chart.defaults.global.colours

      scope.chartLabels = surface.TenorLabels(showdatesonaxis);

      if(type === 'fwd') {
        scope.chartSeries = [ "Fwd variance"  ];
        var newCurve = surface.Curve('BM@T');
        var fwdCurve = analytics.fwdVarCurve(newCurve, tenor);
        scope.chartData = [ 
            fwdCurve, 
            ];      
        scope.chartColours = [ '#F7464A' ];
      }
      else if(type === 'basis')  {
          scope.chartSeries = [ "Basis (T-1)", "Basis (T)"  ];
          scope.chartData = surface.ExtractMany('basis','newbasis'); 
      }
      else if(type === 'ratio')  {
          scope.chartColours = [ '#F7464A' ];
          scope.chartSeries = [ "Ratio to SPX"  ];

          var spxCurveFn = volsurfaces.SPX.CurveFn("BM@T");
          var thisCurve = surface.Extract("BM@T");
          var tenors = surface.Tenors();
          var i = 0;
          scope.chartData = [
            tenors.map(t => (thisCurve[i++] / spxCurveFn(t) * 100).round(2))
          ];
      }
      else if(type === 'totalstdev')  {
          var today = new Date().addDays(-2);
          scope.chartSeries = [ "Total stdev"  ];
          var curve = surface.Curve("BM@T");
          scope.chartData = [ analytics.stdevCurve(curve,today) ];
          scope.chartColours = [ '#F7464A' ];
    }
      else {
        scope.chartSeries = [ "MS", "SocGen", "BM", "Dealer average" ];
        scope.chartData = surface.ExtractMany( "Dealer.MS", "Dealer.SocGen", "BM@T", "Dealer.avg");
        adjustScale(scope);
      }

      return scope;
    }

    return { adjustScale: adjustScale, getChartSpecs: getChartSpecs };
  })
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
