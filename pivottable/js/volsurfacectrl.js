var app = angular.module('volmarker');

app.controller("volSurfaceCtrl", function($scope) {
  var parent = $scope.$parent.$parent;
  $scope.underlier = $scope.$parent.underlier;
  var underlier = $scope.underlier;

  var update = function(und) { 
      if(und != undefined)
        $scope.underlier = und;
      else
        und = $scope.underlier;
      var newCurve = parent.volsurfaces[und];    
      $scope.chartLabels = newCurve.map(r => r.tenor);
      $scope.chartSeries = [ "Theo", "Marked", "NewTheo", "NewMark"];
      $scope.chartData = [ 
          newCurve.map(r => r.theovar), 
          newCurve.map(r => r.markedvar), 
          newCurve.map(r => r.newtheovar),
          newCurve.map(r => r.newmarkedvar) 
          ];
      $scope.chartOptions = { 
          scaleLabel : "<%=value%>%", 
          showTooltips: $scope.tooltip == "1",
          legendTemplate: 
       "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        };
      
      // "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
      $scope.chartHover = 
        () => parent.updateUnderlier(und);
      
    };
    update(underlier);
    parent.$watch('data',(n,o) => { 
      var newUnderlier = n[0].underlying;
      if(newUnderlier == underlier)
        update(newUnderlier);
    }, true);
    if($scope.listen=="1")
      parent.$on('underlierChanged', (evt,und) => update(und))

} );  // chartCtrl

