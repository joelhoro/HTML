"use strict";
angular.module('utilities')
  .service("settings", function() {

    var settings = {
        showThumbnails : false,
        showFlags: true,
        console: false,
        fwdVarTenors: '["1m","3m"]',
        dataMode: 'local',
        today: new Date("2016-4-7"),
        animationSpeed: 6,	// 1 is default
        withMetaData: true,
        showDealerDetails: false,
      };

    var defaultSettings = _.clone(settings);

    settings.reset = function() {
    	debugger;
    	for(var k in defaultSettings)
    		settings[k] = defaultSettings[k];
    }

    settings.fwdVarTenorsList = function() {
    	debugger;
    	return JSON.parse(settings.fwdVarTenors)
    }
    settings.set = function(key, value) {
        settings[key] = value;
    }

    return settings;
} );
