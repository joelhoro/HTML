angular.module('volmarker')
  .service("chartService", function(analytics) {
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

      scope.chartLabels = surface.TenorLabels(showdatesonaxis);

      if(type === 'fwd') {
        scope.chartSeries = [ "Fwd variance"  ];
        var newCurve = surface.Curve('BM@T');
        var fwdCurve = analytics.fwdVarCurve(newCurve, tenor);
        scope.chartData = [ 
            fwdCurve, 
            ];                            
      }
      else if(type === 'basis')  {
          scope.chartSeries = [ "Basis (T-1)", "Basis (T)"  ];
          scope.chartData = surface.ExtractMany('basis','newbasis'); 
      }
      else if(type === 'ratio')  {
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
      }
      else {
        scope.chartSeries = [ "MS", "SocGen", "BM", "Dealer average" ];
        scope.chartData = surface.ExtractMany( "Dealer.MS", "Dealer.SocGen", "Dealer.avg", "BM@T");
        adjustScale(scope);
      }

      return scope;
    }

    return { adjustScale: adjustScale, getChartSpecs: getChartSpecs };
  })
