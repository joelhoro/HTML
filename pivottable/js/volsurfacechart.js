app.directive("volSurfaceChart", function() {
  return {
    restrict: "E",
     scope: {
       underlier : '@',
       listen: '@',
       name: '@',
       tooltip: '@',
     },
    template: `
      <div ng-controller="volSurfaceCtrl">
      <canvas  class="chart chart-line" chart-data="chartData"
                                  chart-labels="chartLabels" chart-options="chartOptions" chart-legend="true" chart-series="chartSeries"
                                  chart-hover="chartHover" >
                                </canvas> 
      </div>`,
  };
   } );
