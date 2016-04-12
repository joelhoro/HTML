"use strict";
angular.module('utilities')
  .service("settings", function() {

    var settings = {
        showThumbnails : false,
        showFlags: true,
        console: false,
        fwdVarTenors: ['1m','3m'],
        dataMode: 'ajaxASP',
        today: new Date("2016-4-7"),
        animationSpeed: 6,	// 1 is default
      };

    settings.set = function(key, value) {
        settings[key] = value;
    }

    return settings;
} );
