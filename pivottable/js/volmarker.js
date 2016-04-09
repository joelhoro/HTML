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
  }

  $scope.startTime = new Date();

  $scope.mode = 'browse';

  $scope.fwdVarTenors = ['1m','3m'];
  $scope.regionFlag = misc.regionFlag;
  $scope.gridConfig = voldata.gridConfig('');

  $scope.isLeader = function(und) {
<<<<<<< HEAD
    if($scope.volsurfaces[und] == undefined)
        return false;
    var pt = $scope.volsurfaces[und][0];
    return pt.leader;
=======
    return true;
    // var pt = $scope.volsurfaces[und][0];
    // return pt.leader;
  }

  $scope.surface = function() { return $scope.volsurfaces[$scope.activeUnderlier]; }
  $scope.surfaceAge = function() {
    return (( new Date() - new Date($scope.surface().Time() ) ) /1000/3600).round(0);
>>>>>>> master
  }

  $scope.setActiveUnderlier = function(und) {

      if(und == undefined)
        und = $scope.activeUnderlier;
<<<<<<< HEAD
      $scope.data = $scope.volsurfaces[und];
      $scope.gridConfig = voldata.gridConfig('data');
=======
      $scope.data = $scope.volsurfaces[und].toDataTable();

>>>>>>> master
      $scope.activeUnderlier = und;
  //    $scope.surface = $scope.volsurfaces[und];
      utils.log("Switching to {0} in scope#{1}", und, $scope.$id);//, $scope.data);
      //$scope.$broadcast("underlierChanged",und);
  }

<<<<<<< HEAD
  $scope.reloadSurfaces = function(underliers, successFn) {
    underliers.map(und => 
      voldata.getVol(und,result => {
        $scope.volsurfaces[und] = result;
        $scope.points[und] = result.length;
        //$scope.$apply();
        $scope.$broadcast("underlierChanged");
        successFn();
      }) );
    //$scope.volsurfaces = $scope.underliers.toObject(u => voldata.getVol(u));
//    $scope.points = _.keys($scope.volsurfaces).toObject(und => $scope.volsurfaces[und].length)
=======
  $scope.reloadSurfaces = function() {
    $scope.volsurfaces = $scope.underliers.toObject(u => voldata.getVol(u));
    $scope.points = $scope.underliers.toObject(und => $scope.volsurfaces[und].Points())
    //$scope.$broadcast("underlierChanged");
    $scope.setActiveUnderlier($scope.underliers[0]);
    $scope.$broadcast("DataChanged", $scope.activeUnderlier);
>>>>>>> master
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

  //$scope.gridConfig.onRegisterApi = function(g) {
  //   debugger;
  // }


  $scope.initialize = function() {
<<<<<<< HEAD
    $scope.volsurfaces = {}
    $scope.underliers = [];
    $scope.points = {}
    getUnderliers(u => {
      $scope.reloadSurfaces(u, () => {
        if(u.length == _.keys($scope.volsurfaces).length)
          $scope.underliers = u;    
          $scope.updateUnderlier(u[0]);
          $scope.initialized = true;
          $scope.$apply();
      } );

      });
=======
    getUnderliers();
    $scope.reloadSurfaces();
    $scope.setActiveUnderlier($scope.underliers[0]);
>>>>>>> master
  }

  $scope.initialize();
} );
  
