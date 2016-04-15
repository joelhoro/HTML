"use strict";

angular.module("volmarker")
.controller("volmarkerCtrl", function($scope, $, _, voldata,utils,misc,volmarkerUtils, 
  settings, dealerUtils, VolSurfaceCollection) {
    utils.log("Initializing volmarker controller - scope=" + $scope.$id);

  $scope.expertMode = false;
  $scope.requestBusy = false;
  $scope.settings = settings;
  $scope.pricingDate = new Date().addDays(-1);
  $scope.volSurfaceCollection = new VolSurfaceCollection();
  $scope.showMetadata = $scope.volSurfaceCollection.MetaData;


  $scope.initialized = false;
  $scope.startTime = new Date();
  $scope.mode = 'browse';

  $scope.regionFlag = misc.regionFlag;
  $scope.gridConfig = voldata.gridConfig('data');

  // active underlier fns
  $scope.surface = () => $scope.volSurfaceCollection.collection[$scope.activeUnderlier];
  $scope.activeUnderlierIndex = () => $scope.underliers.indexOf($scope.activeUnderlier);
  $scope.dealerInfo = dealerUtils.dealerInfo;

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[1];
  $scope.altInputFormats = ['M!/d!/yyyy'];
  $scope.dateOptions = {
      // dateDisabled: disabled,
      formatYear: 'yy',
      minDate: new Date().addDays(-30),
      maxDate: new Date(),
      startingDay: 1
    };

  $scope.openPricingDatePicker = function() {
    $scope.pricingDatePicker.opened = true;
  };

  $scope.pricingDatePicker = {
    opened: false
  };



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
    $scope.volSurfaceCollection.CalculateChanges();

    utils.log("Switching to {0} in scope#{1}", und, $scope.$id);//, $scope.data);
  };


  // initialization
  $scope.refreshVolSurfaces = function(initialize=true, underlier,broadcast) {
      $scope.showLoadingPage();

      $scope.requestBusy = true;
      $scope.ajaxError = "";
      if(broadcast === undefined) broadcast = true;

      var underlierCopy = underlier; // otherwise lambda does not see it

      $scope.volSurfaceCollection.CalculateChanges();      
      console.debug("Changes: ", $scope.changesStored);  
      if(initialize) {
        $scope.initialized = false;        
        voldata.retrieveVolSurfaces(result => {
          var underlier = underlierCopy;
          // all this should be factored out even more on volsurfacecollection
          $scope.volSurfaceCollection.Update(result,underlier, settings.date);
          var allUnderliers = $scope.volSurfaceCollection.Underliers();
          $scope.allUnderliers = allUnderliers;
          $scope.underliers = volmarkerUtils.filterUnderliers(allUnderliers);

          $scope.points = $scope.volSurfaceCollection.Points();
          var underlier = ($scope.activeUnderlier == undefined) ? $scope.underliers[0] : $scope.activeUnderlier;
          $scope.setActiveUnderlier(underlier,broadcast);
          $scope.initialized = true;
          $scope.requestBusy = false;

          $scope.showLoadingPage(false);
          $scope.$apply();
        }, () => {
          $scope.ajaxError = "An error happened requesting the data from the server!";
          $scope.initialized = true;
          $scope.requestBusy = false;
        }) 
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

  $scope.showLoadingPage = function(show=true) {
    $('#loadingPage').modal(show ? 'show' : 'hide');
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
    // whenever settings change, save to localStorage
    settings.Save();
    // update the grid if needed
    if(n.showDealerDetails !== o.showDealerDetails)
      $scope.gridConfig = voldata.gridConfig('data');
    // update the list of underliers if needed
    if(n.underliers !== o.underliers)
      $scope.underliers = volmarkerUtils.filterUnderliers($scope.allUnderliers,n.underliers);
   }, true);

  $scope.$watch('data', newdata => { 
    // when data changes in the grid, update the volsurfaces if needed
    var refresh = $scope.volSurfaceCollection.UpdateFromData(newdata);
    if(refresh) {
      $scope.refreshVolSurfaces(false, undefined, false);
    }
    
  }, true);

  /// INITIALIZATION
  if(settings.loadMenuOnStartup)
    $scope.showSettingsMenu();

  $scope.setDateAndLoad();

} );
  
