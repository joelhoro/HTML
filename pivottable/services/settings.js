"use strict";
angular.module('utilities')
  .service("settings", function($location) {

    var isLocal = $location.$$absUrl.startsWith("file://");

    var settings = {
        showThumbnails : false,
        showFlags: true,
        console: false,
        fwdVarTenors: '["1m","3m"]',
        dataMode: isLocal ? 'local' : 'ajaxASP',
        today: new Date("2016-4-7"),
        animationSpeed: 6,	// 1 is default
        withMetaData: true,
        showDealerDetails: false,
      };

    var defaultSettings = _.clone(settings);

    settings.reset = function() {
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
