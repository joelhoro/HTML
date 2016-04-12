"use strict";
angular.module('utilities')
  .service("settings", function() {

  return {
    showThumbnails : false,
    showFlags: true,
    console: false,
    fwdVarTenors: ['1m','3m'],
    dataMode: 'local',
    today: new Date("2016-4-7"),
  };

} );
