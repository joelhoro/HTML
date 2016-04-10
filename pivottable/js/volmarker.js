var app = angular.module('volmarker', 
      ['utilsService','ngGrid','chart.js','dataService'] 
      );

app.controller("volmarkerCtrl", function($scope,voldata,utils,misc) {
  utils.log("Initializing volmarker controller - scope=" + $scope.$id);  
  $scope.initialized = false;

  $scope.settings = {
    showThumbnails : false,
    showFlags: true,
    console: false,
    fwdVarTenors: ['1m','3m'],
  }

  $scope.startTime = new Date();

  $scope.mode = 'browse';

  $scope.regionFlag = misc.regionFlag;
  $scope.gridConfig = voldata.gridConfig('data');

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
      utils.log("Switching to {0} in scope#{1}", und, $scope.$id);//, $scope.data);
  }

  $scope.initialize = function() {
      voldata.retrieveVolSurfaces(result => {
        $scope.volsurfaces = result;
        $scope.underliers = _.keys(result);
        $scope.points = $scope.underliers.toObject(und => result[und].Points());
        $scope.setActiveUnderlier($scope.underliers[0]);
        $scope.initialized = true;
        $scope.$broadcast("DataChanged", $scope.activeUnderlier);
      }) 
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

  function getUnderliers(successFn) {
    var ultimateFn = u => {
      successFn(u);
      utils.log("Using {0} underliers", u.length);
    }

    var search = location.search;
    search = 'test';
    if(search.contains("test")) {
      utils.log("Starting in test mode");
      var u = ["SPX","NKY"];
      ultimateFn(u);
    }
    else if(search.contains("full")) {
      utils.log("Starting in full mode");
      voldata.getUnderliers(ultimateFn);
    }
    else {
      utils.log("Starting in extended test mode");
      var u = ["SPX", "SX5E", "NKY", "DAX", "SMI", "HSCEI" ];
      ultimateFn(u);
    }
  }

  $scope.activeUnderlierIndex = function() {
    return $scope.underliers.indexOf($scope.activeUnderlier);
  }

  $scope.initialize();
} );
  
