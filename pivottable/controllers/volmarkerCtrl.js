"use strict";

angular.module("volmarker")
.controller("volmarkerCtrl", function($scope, $, _, voldata,utils,misc,volmarkerUtils) {
  utils.log("Initializing volmarker controller - scope=" + $scope.$id);  

  $scope.settings = {
    showThumbnails : false,
    showFlags: true,
    console: false,
    fwdVarTenors: ['1m','3m'],
    dataMode: 'local'
  };

  $scope.initialized = false;
  $scope.startTime = new Date();
  $scope.mode = 'browse';

  $scope.regionFlag = misc.regionFlag;
  $scope.gridConfig = voldata.gridConfig('data');

  // active underlier fns
  $scope.surface = () => $scope.volsurfaces[$scope.activeUnderlier];
  $scope.activeUnderlierIndex = () => $scope.underliers.indexOf($scope.activeUnderlier);

  $scope.setActiveUnderlier = function(und) {
    if(und === undefined) {
        und = $scope.activeUnderlier;
    }

    $scope.data = $scope.volsurfaces[und].toDataTable();
    $scope.activeUnderlier = und;
    utils.log("Switching to {0} in scope#{1}", und, $scope.$id);//, $scope.data);
  };

  $scope.changesForUnderlier = function(underlier) {
      var mapIt = vs => vs.volSurface.Observables.toObject(o => o.Quotes["BM@T"], o => o.Name);
      var obs1 = mapIt($scope.volsurfaces[underlier]);
      var obs2 = mapIt($scope.volsurfaceOriginal[underlier]);
      var observables = _.keys(obs1);
      var allDiffs = {};
      var getQuote = v => (v*100).round(2) + "%";
      observables.map(k => { 
        if(obs1[k] !== obs2[k]) {
          allDiffs[k] = getQuote(obs2[k])+"->"+getQuote(obs1[k]);
        }
      });
      return allDiffs;
  };

  $scope.surfaceChanges = function() {
    if($scope.volsurfaces === undefined) { return; }
    var diff = $scope.underliers.toObject($scope.changesForUnderlier);
    for(var und in diff) {
      if(diff[und].length === 0) {
        delete(diff[und]);
      }
    }
    return diff;
    // need to implement diff better
  };

  $scope.hasChanges = function(underlier) {
    if(underlier === undefined) {
      underlier = $scope.activeUnderlier;
    }
    var changes = $scope.changesForUnderlier(underlier);
    return _.keys(changes).length > 0;
  };

  // initialization
  $scope.update = function(initialize=true, underlier=null) {
      console.debug("Changes: ", $scope.surfaceChanges());  
      if(initialize) {
        $scope.initialized = false;        
        voldata.retrieveVolSurfaces(result => {
          if(underlier !== null && underlier !== undefined)
            $scope.volsurfaces[underlier] = result[underlier];
          else
            $scope.volsurfaces = result;
          $scope.volsurfaceOriginal = JSON.parse(JSON.stringify($scope.volsurfaces));
          var allUnderliers = _.keys(result);
          $scope.underliers = volmarkerUtils.filterUnderliers(allUnderliers);
          $scope.points = $scope.underliers.toObject(und => result[und].Points());
          var underlier = ($scope.activeUnderlier == undefined) ? $scope.underliers[0] : $scope.activeUnderlier;
          $scope.setActiveUnderlier(underlier);
          $scope.initialized = true;
        }, $scope.settings.dataMode) 
      }

      $scope.$broadcast("DataChanged", $scope.activeUnderlier);
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
    $(".list-group").scrollTo($(".active"), {offsetTop: '120', duration: 250});
  }


  $scope.save = function() {
    alert("Not yet implemented");
  }


  $scope.update();
} );
  
