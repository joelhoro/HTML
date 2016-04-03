var app = angular.module('volmarker', 
      ['utilsService','ngGrid','chart.js','dataService'] 
      );

app.controller("volmarkerCtrl", ['$scope','voldata', function($scope,voldata) {

      console.log("Starting app at %s", new Date());
      $scope.startTime = new Date();
 
      $scope.updateUnderlier = function(und) {
          if(und == undefined)
            und = $scope.activeUnderlier;
          $scope.data = $scope.volsurfaces[und];
          $scope.activeUnderlier = und;
          console.debug("Switching to ", und);//, $scope.data);
          $scope.$broadcast("underlierChanged",und);
      }

      $scope.reloadSurfaces = function() {
        $scope.volsurfaces = $scope.underliers.toObject(u => voldata.getVol(u));
        $scope.points = _.keys($scope.volsurfaces).toObject(und => $scope.volsurfaces[und].length)
        $scope.$broadcast("underlierChanged");
      }

      // user interaction
      $(document).keydown(evt => {
        if(evt.keyCode == 40)  // down
          $scope.next(1);
        if(evt.keyCode == 38)  // up
          $scope.next(-1); 
      })

      $scope.next = function(inc) {
        var idx = ($scope.activeUnderlierIndex() + inc)
         .capfloor(0,$scope.underliers.length-1);
        var und = $scope.underliers[idx];
        $scope.updateUnderlier(und);
        $scope.$apply();
        $(".list-group").scrollTo($(".active"), {offsetTop: '120', duration: 250});
      }

      function getUnderliers() {
        var search = location.search;
        if(search.contains("test"))
          $scope.underliers = ["SPX","NKY"];
        else if(search.contains("full"))
          $scope.underliers = voldata.underliers;
        else
          $scope.underliers = ["SPX", "SX5E", "NKY", "DAX", "SMI", "HSCEI" ];
      }
    
      $scope.activeUnderlierIndex = function() {
        return $scope.underliers.indexOf($scope.activeUnderlier);
      }

      $scope.gridConfig = voldata.gridConfig('data');

      $scope.initialize = function() {
        getUnderliers();
        $scope.reloadSurfaces();
        $scope.updateUnderlier($scope.underliers[0]);
      }

      $scope.initialize();
} ] );
  
