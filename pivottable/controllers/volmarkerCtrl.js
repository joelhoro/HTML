"use strict";

angular.module("volmarker")
.controller("volmarkerCtrl", function($scope, $location, $, _, voldata,utils,misc,volmarkerUtils, 
  settings, dealerUtils, VolSurfaceCollection) {
    utils.log("Initializing volmarker controller - scope=" + $scope.$id);
  console.groupEnd();

  // importing some scopes
  $scope.misc = misc;
  $scope.dealerInfo = dealerUtils.dealerInfo;

  // use options in url to set settings
  settings.SetFromUrl($location.search());

  // right so this laundry list of variables starts really looking bad...
  $scope.volSurfaceCollection = new VolSurfaceCollection();
  $scope.expertMode = false;
  $scope.requestBusy = false;
  $scope.settings = settings;
  $scope.pricingDate = new Date().addWeekDays(-1);

  $scope.ratioDelta = 40;
  $scope.ChangeRatioDelta = function(n) {
    $scope.ratioDelta = n;
  }

  $scope.initialized = false;

  $scope.ActiveSurface = () => $scope.volSurfaceCollection.Get($scope.activeUnderlier);

  $scope.format = 'yyyy/MM/dd';
  $scope.dateOptions = {
      // dateDisabled: disabled,
      formatYear: 'yy',
      minDate: new Date().addDays(-300),
      maxDate: new Date(),
      startingDay: 1
    };


  $scope.openPricingDatePicker = function() {
    $scope.pricingDatePicker.opened = true;
  };

  $scope.pricingDatePicker = {
    opened: false
  };

  $scope.toggleDealer = function(dealer) {
    if(dealer !== undefined) {
      dealer.active = !dealer.active;
      $scope.data = $scope.ActiveSurface().toDataTable();
      $scope.refreshVolSurfaces(false, undefined, false);
    }
  }

  $scope.setActiveUnderlier = function(und, setData=true) {
    if(und === undefined) {
        und = $scope.activeUnderlier;
    }
    if(setData) {
      utils.log("Setting data in volmarkerCtrl");
      $scope.data = $scope.volSurfaceCollection.Get(und).toDataTable();

      $scope.activeUnderlier = und;
    }
    utils.log("Calculating changes");
    $scope.volSurfaceCollection.CalculateChanges();

    utils.log("Switching to {0} in scope#{1}", und, $scope.$id);//, $scope.data);
  };


  // initialization
  $scope.refreshVolSurfaces = function(initialize=true, underlier,broadcast) {
      if(broadcast === undefined) broadcast = true;

      $scope.volSurfaceCollection.CalculateChanges();      
      console.debug("Changes: ", $scope.changesStored);  
      if(initialize) {
        $scope.showLoadingPage();

        $scope.requestBusy = true;
        $scope.ajaxError = "";
        $scope.initialized = false;    

        var setVolSurfaceCollection = function() {
          var allUnderliers = $scope.volSurfaceCollection.Underliers();
          $scope.allUnderliers = allUnderliers;
          $scope.underliers = volmarkerUtils.filterUnderliers(allUnderliers);

          $scope.points = $scope.volSurfaceCollection.Points();
          var underlier = ($scope.activeUnderlier == undefined) ? $scope.underliers[0] : $scope.activeUnderlier;
          $scope.setActiveUnderlier(underlier,broadcast);
          $scope.initialized = true;
          $scope.requestBusy = false;
        }

        voldata.retrieveVolSurfaces(result => {
          $scope.volSurfaceCollection.Update(result,underlier, settings.date);
          setVolSurfaceCollection()
          $scope.showLoadingPage(false);
        }, () => {
          $scope.ajaxError = "An error happened requesting the data from the server!";
          $scope.volSurfaceCollection.Update(new VolSurfaceCollection(),undefined, settings.date);
          setVolSurfaceCollection()          
        }) 
      }

      $scope.$broadcast("DataChanged", $scope.activeUnderlier);
  }

  var showSettingsMenu = function() {
    $('#settingsMenu').modal('show');
  }

  $scope.showSettingsMenuCb = function(evt) {
    if(evt.altKey) {
      // play here...
      debugger;
      return;
    }

    $scope.expertMode = evt.ctrlKey;
    showSettingsMenu();
  }


  $scope.showLoadingPage = function(show=true) {
    $('#loadingPage').modal(show ? 'show' : 'hide');
  }

  $scope.showMetadataPage = function() {
    $('#metadataPage').modal('show');    
  }

  $scope.save = function() {
    alert("Not yet implemented");
  }

  // pressing Ctrl while clicking will cause a force refresh on the server
  // (i.e. calculate instead of loading the cached data)
  $scope.shiftPricingDate = function(shift, evt) {
    $scope.pricingDate = $scope.pricingDate.addWeekDays(shift);
    var forceRefresh = evt.ctrlKey;
    $scope.setDateAndLoad(forceRefresh);
  }

  $scope.setDateAndLoad = function(forceRefresh = false) {
      var date = $scope.pricingDate;
      settings.set('today', new Date(date));
      settings.date = date;
      var oldForceRefresh = settings.forceRefresh;
      settings.forceRefresh = forceRefresh;
      $scope.refreshVolSurfaces();
      settings.forceRefresh = oldForceRefresh;
  }

  // watches

  $scope.$watch('settings', function(n,o) { 
    // whenever settings change, save to localStorage
    settings.Save();
    // update the grid if needed
    if(n.showDealerDetails !== o.showDealerDetails) {
      //$scope.gridConfig = voldata.gridConfig('data');
      $scope.data = $scope.ActiveSurface().toDataTable();
      $scope.$broadcast("DataChanged");
    }
    // update the list of underliers if needed
    if(n.underliers !== o.underliers)
      $scope.underliers = volmarkerUtils.filterUnderliers($scope.allUnderliers,n.underliers);
   }, true);

  $scope.$watch('data', newdata => { 
    // when data changes in the grid, update the volsurfaces if needed
    var dataHasChanged = $scope.volSurfaceCollection.UpdateFromData(newdata);
    if(dataHasChanged) {
      $scope.refreshVolSurfaces(false, undefined, false);
    }
    
  }, true);

  /// INITIALIZATION
  if(settings.loadMenuOnStartup)
    showSettingsMenu();

  $scope.setDateAndLoad();

} );
  
