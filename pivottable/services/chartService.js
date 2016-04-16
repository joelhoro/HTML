angular.module('volmarker')
  .service("chartService", function(analytics, ChartJs, settings, dealerUtils) {

    function adjustScale(scope) {

          var filter = x => x.filter(y => y > 10);
          var min = scope.chartData.map(x => filter(x).min()).filter(x => x!==undefined).min();
          var width = 2.5;
          min = min - (min%width);
          var max = scope.chartData.map(x => filter(x).max()).filter(x => x!==undefined).max();
          scope.chartOptions.scaleOverride = true;
          scope.chartOptions.scaleSteps = (max-min)/width;
          scope.chartOptions.scaleStepWidth = width;
          scope.chartOptions.scaleStartValue = min;
        }

    function getChartSpecs(surface, spxSurface, showdatesonaxis, tenor, type, tooltip, ratioDelta) {
      Chart.defaults.global.animationSteps = 60 / settings.animationSpeed;

      var scope = {};
      var doAdjustScale = false;
      scope.chartOptions = { 
        //scaleLabel : "<%=value%>", 
        datasetFill: false,
        showTooltips: tooltip === "1",
        legendTemplate: 
     "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      };

      if(type == 'ratio')
        scope.chartOptions.animationSteps = 1;

      scope.chartColours = [
            '#F7464A', // red
            '#97BBCD', // blue
            '#DCDCDC', // light grey
            '#46BFBD', // green
            '#FDB45C', // yellow
            '#949FB1', // grey
            '#4D5360'  // dark grey
            ];

      scope.chartLabels = surface.TenorLabels(showdatesonaxis);

      if(type === 'fwd') {
        scope.chartSeries = [ "Fwd variance"  ];
        var newCurve = surface.Curve('BMEstimate');
        var fwdCurve = analytics.fwdVarCurve(newCurve, tenor);
        scope.chartData = [ 
            fwdCurve, 
            ];      
        doAdjustScale = true;
      }
      else if(type === 'basis')  {
          scope.chartSeries = [ "Basis (T-1)", "Basis (T)"  ];
          scope.chartData = surface.ExtractMany('Basis','New basis'); 
      }
      else if(type === 'ratio')  {
          scope.chartSeries = [ "Variance", "Vol at " + Math.round(ratioDelta) + "% delta"  ];

          var spxCurveFn = spxSurface.CurveFn("BMEstimate");
          var thisCurve = surface.Extract("BMEstimate");
          var tenors = surface.Tenors().splice(1);
          var i = 1;
          var varRatio = tenors.map(t => (thisCurve[i++] / spxCurveFn(t) * 100).round(2));
          var volRatio = tenors.map(t => ((surface.VolAtDeltaFn(t)(ratioDelta/100) / spxSurface.VolAtDeltaFn(t)(ratioDelta/100))*100).round(2));
          scope.chartData = [
            varRatio,
            settings.showVolRatio ? volRatio : []
          ];
      }
      else if(type === 'totalstdev')  {
          scope.chartSeries = [ "Total stdev"  ];
          var curve = surface.Curve("BMEstimate");
          scope.chartData = [ analytics.stdevCurve(curve,settings.today) ];
    }
      else if(type === 'bmonly' || type === '') {

          scope.chartSeries = ["BlueMountain estimate", "Dealer average"];
          var tickers = ["BMEstimate", "Dealer.avg"];
          if(settings.showDealerDetails) {
            scope.chartSeries = scope.chartSeries.concat(dealerUtils.dealers.map(d => dealerUtils.dealerInfo[d].label));
            tickers = tickers.concat(dealerUtils.dealers.map(d => "Dealer." + d));            
          }
          
          if(type=== 'bmonly')
            tickers = [ tickers[0] ];

          scope.chartData = tickers.map(t => surface.Extract(t));
          doAdjustScale = true;
      }

      if(doAdjustScale)
        adjustScale(scope);
      return scope;
    }

    return { adjustScale: adjustScale, getChartSpecs: getChartSpecs };
  })
