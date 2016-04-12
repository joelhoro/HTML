angular.module('volmarker')
  .service("chartService", function(analytics, ChartJs, settings) {

    Chart.defaults.global.animationSteps = 60 / settings.animationSpeed;

    function adjustScale(scope) {

          var filter = x => x.filter(y => y > 10);
          var min = scope.chartData.map(x => filter(x).min()).min();
          var width = 5;
          min = min - (min%width);
          var max = scope.chartData.map(x => filter(x).max()).max();
          scope.chartOptions.scaleOverride = true;
          scope.chartOptions.scaleSteps = (max-min)/width;
          scope.chartOptions.scaleStepWidth = width;
          scope.chartOptions.scaleStartValue = min;
        }

    function getChartSpecs(volsurfaces, surface, showdatesonaxis, tenor, type, tooltip) {
      var scope = {};
      var doAdjustScale = false;
      scope.chartOptions = { 
        //scaleLabel : "<%=value%>", 
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
        doAdjustScale = true;
      }
      else if(type === 'basis')  {
          scope.chartSeries = [ "Basis (T-1)", "Basis (T)"  ];
          scope.chartData = surface.ExtractMany('Basis','New basis'); 
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
          scope.chartSeries = [ "Total stdev"  ];
          var curve = surface.Curve("BM@T");
          scope.chartData = [ analytics.stdevCurve(curve,settings.today) ];
          scope.chartColours = [ '#F7464A' ];
    }
      else {
        scope.chartSeries = [ "MS", "SocGen", "BM", "Dealer average" ];
        scope.chartData = surface.ExtractMany( "Dealer.MS", "Dealer.SocGen", "BM@T", "Dealer.avg");
        doAdjustScale = true;
      }

      if(doAdjustScale)
        adjustScale(scope);
      return scope;
    }

    return { adjustScale: adjustScale, getChartSpecs: getChartSpecs };
  })
