"use strict";
angular.module('volmarker')
  .service("settings", function() {

  return {
    showThumbnails : false,
    showFlags: true,
    console: false,
    fwdVarTenors: ['1m','3m'],
    dataMode: 'local'
  };

} );
