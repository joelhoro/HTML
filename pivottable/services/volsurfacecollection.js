"use strict";

angular.module('utilities')
.factory("VolSurfaceCollection", function(utils,analytics) { 

  utils.log("Initializing volsurfacecollection factory");
  class VolSurfaceCollection {
    constructor(volSurfaces) {
      if(volSurfaces === undefined )
        volSurfaces = []
      this.collection = volSurfaces.toObject(row => new analytics.VolSurface(row), row => row.Index);
      this.originalCollection = utils.clone(this.collection);      
  
      this.Underliers = function() {
        return _.keys(this.collection);
      }
      this.UnderliersCount = function() {
        return this.Underliers().length;
      }
      this.Points = function() {
        return this.Underliers().toObject(und => this.collection[und].Points());
      }

      this.MetaData = function(underlier) {
        return this.collection[underlier].MetaData();
      }

      this.Update = function(volsurfacecollection,underlier) {
        if(underlier !== null && underlier !== undefined) {
            var slice = volsurfacecollection.collection[underlier];
            this.collection[underlier] = slice;
            this.originalCollection[underlier] = utils.clone(slice);
          }
          else {
            this.collection = volsurfacecollection.collection;
            this.originalCollection = utils.clone(volsurfacecollection.collection);
          }

      }

      this.changesForUnderlier = function(underlier) {
      var mapIt = vs => vs.volSurface.Observables.toObject(o => o.Quotes["BM@T"], o => o.Name);
      var obs1 = mapIt(this.collection[underlier]);
      var obs2 = mapIt(this.originalCollection[underlier]);
      var observables = _.keys(obs1);
      var allDiffs = [];
      var getQuote = v => (v*100).round(2) + "%";
      observables.map(k => { 
        //utils.log("{0} vs {1}", obs1[k], obs2[k]);
        if(obs1[k] !== obs2[k]) {
          allDiffs.push( { obs: k.substr(k.length-5), diff: getQuote(obs2[k])+"->"+getQuote(obs1[k]) } );
        }
      });
      utils.log("Calculating changes for " + underlier + " : " + allDiffs.length + " changes found");
      return allDiffs;
  };


    }

  

  }


  return VolSurfaceCollection;
} );

