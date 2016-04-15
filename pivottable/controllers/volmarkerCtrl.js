"use strict";

angular.module("volmarker")
.controller("volmarkerCtrl", function($scope, $, _, voldata,utils,misc,volmarkerUtils, 
  settings, dealerUtils, VolSurfaceCollection) {
    utils.log("Initializing volmarker controller - scope=" + $scope.$id);

  $scope.requestBusy = false;
  $scope.settings = settings;
  $scope.pricingDate = '2016-4-11';
  $scope.volSurfaceCollection = new VolSurfaceCollection();
  $scope.showMetadata = u => $scope.volsurfaceCollection.MetaData(u);

  $scope.initialized = false;
  $scope.startTime = new Date();
  $scope.mode = 'browse';

  $scope.regionFlag = misc.regionFlag;
  $scope.gridConfig = voldata.gridConfig('data');

  // active underlier fns
  $scope.surface = () => $scope.volSurfaceCollection.collection[$scope.activeUnderlier];
  $scope.activeUnderlierIndex = () => $scope.underliers.indexOf($scope.activeUnderlier);
  $scope.dealerInfo = dealerUtils.dealerInfo;

  $scope.setActiveUnderlier = function(und, setData=true) {
    if(und === undefined) {
        und = $scope.activeUnderlier;
    }
    if(setData) {
      utils.log("Setting data in volmarkerCtrl");
      $scope.data = $scope.volSurfaceCollection.collection[und].toDataTable();

      $scope.activeUnderlier = und;
    }
    utils.log("Calculating changes");
    $scope.calculateChanges();

    utils.log("Switching to {0} in scope#{1}", und, $scope.$id);//, $scope.data);
  };

  $scope.changesStored = {};

  $scope.calculateChanges = function() {
    if($scope.underliers === undefined) return;
      $scope.underliers.map(underlier => {
        var changes = $scope.volSurfaceCollection.changesForUnderlier(underlier);
        if(changes.length)
          $scope.changesStored[underlier] = changes;
        else
          delete($scope.changesStored[underlier]);
      } )
  }


  $scope.hasChanges = function(underlier) {
    return $scope.numberOfChanges(underlier) > 0;
  }

  $scope.numberOfChanges = function(underlier) {
    if(underlier === undefined) {
      underlier = $scope.activeUnderlier;
    }
    var changes = $scope.changesStored[underlier];
    if(changes === undefined) changes = {};
    return changes.length;
  };

  // initialization
  $scope.refreshVolSurfaces = function(initialize=true, underlier,broadcast) {
      $scope.requestBusy = true;
      if(broadcast === undefined) broadcast = true;

      var underlierCopy = underlier; // otherwise lambda does not see it

      $scope.calculateChanges();      
      console.debug("Changes: ", $scope.changesStored);  
      if(initialize) {
        $scope.initialized = false;        
        voldata.retrieveVolSurfaces(result => {
          var underlier = underlierCopy;
          $scope.volSurfaceCollection.Update(result,underlier);
          var allUnderliers = $scope.volSurfaceCollection.Underliers();
          $scope.allUnderliers = allUnderliers;
          $scope.underliers = volmarkerUtils.filterUnderliers(allUnderliers);

          $scope.points = $scope.volSurfaceCollection.Points();
          var underlier = ($scope.activeUnderlier == undefined) ? $scope.underliers[0] : $scope.activeUnderlier;
          $scope.setActiveUnderlier(underlier,broadcast);
          $scope.initialized = true;
          $scope.requestBusy = false;

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

  $scope.showSettingsMenu = function() {
    $('#settingsMenu').modal('show');
  }

  $scope.save = function() {
    alert("Not yet implemented");
  }

  $scope.setDateAndLoad = function() {
      var date = $scope.pricingDate;
      settings.set('today', new Date(date));
      settings.date = date;
      $scope.refreshVolSurfaces();
  }

  // watches
  $scope.$watch('settings', function(n,o) { 
    if(n.showDealerDetails !== o.showDealerDetails)
      $scope.gridConfig = voldata.gridConfig('data');
    if(n.underliers !== o.underliers)
      $scope.underliers = volmarkerUtils.filterUnderliers($scope.allUnderliers,n.underliers);
   }, true);

  $scope.$watch('data', newdata => { 
    if(newdata === undefined) { return; }
    var surfaces = $scope.volSurfaceCollection;

    var refresh = false;
    var idx = 0;

    var underlier = newdata[0].underlier;
    newdata.map(row => {
      var obs = surfaces.collection[underlier].volSurface.Observables[idx++];
      var oldValue = obs.Quotes["BM@T"].round(4);
      var newValue = (row.BM / 100);
      
      var tolerance = 1e-6;
      if(Math.abs(oldValue-newValue)>tolerance) {
        utils.log("Changing mark for {1}: {2}->{3} in {4}", underlier, obs.Name, oldValue, newValue);
        obs.Quotes["BM@T"] = newValue;
        refresh = true;
      }
    });
    if(refresh) {
      $scope.refreshVolSurfaces(false, undefined, false);
    }
    
  }, true);

  $scope.showSettingsMenu();
  $scope.setDateAndLoad();

} );
  
