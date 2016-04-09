var app = angular.module('volmarker', 
      ['utilsService','ngGrid','chart.js','dataService'] 
      );

app.controller("volmarkerCtrl", function($scope,voldata,utils,misc) {
  utils.log("Initializing volmarker controller - scope=" + $scope.$id);  

  $scope.settings = {
    showThumbnails : false,
    showFlags: true,
  }

  $scope.startTime = new Date();

  $scope.mode = 'browse';

  $scope.fwdVarTenors = ['1m','3m'];
  $scope.regionFlag = misc.regionFlag;

  $scope.isLeader = function(und) {
    return true;
    // var pt = $scope.volsurfaces[und][0];
    // return pt.leader;
  }

  $scope.surface = function() { return $scope.volsurfaces[$scope.activeUnderlier]; }
  $scope.surfaceAge = function() {
    return (( new Date() - new Date($scope.surface().Time() ) ) /1000/3600).round(0);
  }

  $scope.setActiveUnderlier = function(und) {

      if(und == undefined)
        und = $scope.activeUnderlier;
      $scope.data = $scope.volsurfaces[und].toDataTable();

      $scope.activeUnderlier = und;
  //    $scope.surface = $scope.volsurfaces[und];
      utils.log("Switching to {0} in scope#{1}", und, $scope.$id);//, $scope.data);
      //$scope.$broadcast("underlierChanged",und);
  }

  $scope.reloadSurfaces = function() {
    $scope.volsurfaces = $scope.underliers.toObject(u => voldata.getVol(u));
    $scope.points = $scope.underliers.toObject(und => $scope.volsurfaces[und].Points())
    //$scope.$broadcast("underlierChanged");
  }

  // user interaction
  $(document).keydown(evt => {
    if(evt.keyCode == 40)  // down
      $scope.next(1);
    if(evt.keyCode == 38)  // up
      $scope.next(-1); 
    if(evt.keyCode == 67)   // c
      utils.toggleConsole();
  })

  $scope.next = function(inc) {
    var idx = ($scope.activeUnderlierIndex() + inc)
     .capfloor(0,$scope.underliers.length-1);
    var und = $scope.underliers[idx];
    $scope.setActiveUnderlier(und);
    //$scope.$apply();
    $(".list-group").scrollTo($(".active"), {offsetTop: '120', duration: 250});
  }

  function getUnderliers() {
    var search = location.search;
    if(search.contains("test")) {
      utils.log("Starting in test mode");
      $scope.underliers = ["SPX","NKY"];
    }
    else if(search.contains("full")) {
      utils.log("Starting in full mode");
      $scope.underliers = voldata.underliers;
      debugger;
    }
    else {
      utils.log("Starting in extended test mode");
      $scope.underliers = ["SPX", "SX5E", "NKY", "DAX", "SMI", "HSCEI" ];
    }
    utils.log("Using {0} underliers", $scope.underliers.length);
  }

  $scope.activeUnderlierIndex = function() {
    return $scope.underliers.indexOf($scope.activeUnderlier);
  }

  $scope.gridConfig = voldata.gridConfig('data');
  //$scope.gridConfig.onRegisterApi = function(g) {
  //   debugger;
  // }

  $scope.initialize = function() {
    getUnderliers();
    $scope.reloadSurfaces();
    $scope.setActiveUnderlier($scope.underliers[0]);
  }

  $scope.initialize();
} );
  
