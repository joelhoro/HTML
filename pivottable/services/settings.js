"use strict";
angular.module('utilities')
  .service("settings", function($location) {

    var isLocal = $location.$$absUrl.startsWith("file://");

    var defaultSettings = {
        showThumbnails : false,
        showFlags: true,
        console: false,
        fwdVarTenors: '["1m","3m"]',
        dataMode: isLocal ? 'local' : 'ajaxASP',
        today: new Date("2016-4-7"),
        animationSpeed: 6,	// 1 is default
        withMetaData: true,
        showDealerDetails: false,
        underliers: "SPX,SX5E,NKY,HSCEI",
        loadMenuOnStartup: true,
        fakeSleepOnLocalMode: false, // allows to pretend local request takes time - for testing gui
      };

    var settings;
    // loading and saving from localStorage
    if(localStorage.volMarkerSettings !== undefined)
    	settings = _.extend(defaultSettings,JSON.parse(localStorage.volMarkerSettings));
    else {
    	settings = _.clone(defaultSettings);
    	localStorage.volMarkerSettings = JSON.stringify(settings);
    }

    settings.Save = function() {
        localStorage.volMarkerSettings = JSON.stringify(settings);
    }

    settings.Reset = function() {
    	for(var k in defaultSettings)
    		settings[k] = defaultSettings[k];
    }

    settings.fwdVarTenorsList = function() {
    	return JSON.parse(settings.fwdVarTenors)
    }
    settings.set = function(key, value) {
        settings[key] = value;
    }



    return settings;
} );
