angular.module('volmarker')
  .directive("volSurfaceChart", function(utils) {

  utils.log("Defining volsurface controller");
  function controller($scope,voldata, utils, analytics) {

        utils.log("Running volsurface controller - scope=" + $scope.$id);  
        var underlier = $scope.underlier;

        var showdatesonaxis = ($scope.showdatesonaxis == undefined) || ($scope.showdatesonaxis == '1');

        function adjustScale(scope) {
          var min = scope.chartData.map(x => x.min()).min();
          var width = 5;
          min = min - (min%width);
          var max = scope.chartData.map(x => x.max()).max();
          $scope.chartOptions.scaleOverride = true;
          $scope.chartOptions.scaleSteps = (max-min)/width;
          $scope.chartOptions.scaleStepWidth = width;
          $scope.chartOptions.scaleStartValue = min;
        }

        var update = function(und) { 
            if(und != undefined)
              $scope.underlier = und;
            else
              und = $scope.underlier;
            var surface = $scope.volsurfaces[und];

            $scope.chartOptions = { 
              scaleLabel : "<%=value%>%", 
              datasetFill: false,
              showTooltips: $scope.tooltip == "1",
              legendTemplate: 
           "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
            }

            $scope.chartLabels = surface.TenorLabels(showdatesonaxis);

            //newCurve.map(r => $scope.showdatesonaxis === 'true' ? r.tenor : "");
            if($scope.type == 'fwd') {
              $scope.chartSeries = [ "Fwd variance"  ];
              var newCurve = surface.Curve('BM@T');
              var fwdCurve = analytics.fwdVarCurve(newCurve, $scope.tenor);
              $scope.chartData = [ 
                  fwdCurve, 
                  ];                            
            }
            else if($scope.type == 'basis')  {
                $scope.chartSeries = [ "Basis (T-1)", "Basis (T)"  ];
                $scope.chartData = surface.ExtractMany('basis','newbasis'); 
            }
            else if($scope.type == 'ratio')  {
                $scope.chartSeries = [ "Ratio to SPX"  ];

                var spxCurveFn = $scope.volsurfaces['SPX'].CurveFn("BM@T");
                var thisCurve = surface.Extract("BM@T");
                var tenors = surface.Tenors();
                var i = 0;
                $scope.chartData = [
                  tenors.map(t => thisCurve[i++] / spxCurveFn(t) * 100)
                ]
            }
            else if($scope.type == 'totalstdev')  {
                var today = new Date();
                $scope.chartSeries = [ "Total stdev"  ];
                var curve = surface.Curve("BM@T");
                $scope.chartData = [ analytics.stdevCurve(curve,today) ];
            }
            else {
              $scope.chartSeries = [ "MS", "SocGen", "BM", "Dealer average" ];
              $scope.chartData = surface.ExtractMany( "Dealer.MS", "Dealer.SocGen", "Dealer.avg", "BM@T");
              adjustScale($scope);
            }

            if(!$scope.listen)
              $scope.chartHover = () => update(underlier);
          };

          update(underlier);

          var parent = $scope.$parent;
          parent.$watch('data',(n,o) => {  
            var surfaces = $scope.volsurfaces;
            var refresh = false;
            var idx = 0;
            var underlier = n[0].underlier;
            n.map(row => {
              var obs = surfaces[underlier].volSurface.Observables[idx++];
              var oldValue = obs.Quotes["BM@T"].round(4);
              var newValue = (row.BM / 100);
              var tolerance = 1e-6;
              if(Math.abs(oldValue-newValue)>tolerance) {
                obs.Quotes["BM@T"] = newValue;
                refresh = true;
              }
            });
            if(refresh) {
              //update(underlier);
              $scope.$emit("DataChanged", underlier);
            }
          }, true);

          if($scope.listen=="1") {
             $scope.$watch('underlier',newUnd => update(newUnd));
             $scope.$on("DataChanged", (_,und) => { update(und) });            
          }
  }

  function templateFn(elt,attr)     
  {
      var tmpl = '<div ng-transclude/><canvas  class="chart ' + 
        (attr.type=='basis' ? 'chart-bar' : 'chart-line') + '"' +
      ' chart-data="chartData" chart-legend='
      + (attr.nolegend=='1' ? "false" : "true" )
        + ` chart-labels="chartLabels" chart-options="chartOptions"  chart-series="chartSeries"
       chart-hover="chartHover" >
        </canvas> 
      `;

     return tmpl;
  };


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
  } 

}
);
