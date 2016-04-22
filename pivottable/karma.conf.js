// Karma configuration
// Generated on Wed Apr 20 2016 21:28:42 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/underscore/underscore-min.js",
         //"bower_components/angular/angular.min.js",
         "lib/jasmine-2.4.1/angular.js",
         "lib/jasmine-2.4.1/angular-mocks.js",

         "lib/numeric-1.2.6.js",
        "apps/volmarker.js",
        "data/datawarehouse.js",
        "services/utils.js",
        "services/dateUtils.js",
        "services/analytics.js",
        "services/settings.js",
        "services/voldata.js",
        "services/volsurfacecollection.js",
        "services/volmarkerUtils.js",
        "services/chartService.js",
        "services/dealerUtils.js",
        "controllers/volmarkerCtrl.js",
        "directives/volsurfacechart.js",

        // "tests/*.js",        

      'test-main.js',
      {pattern: 'tests/*.js', included: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
