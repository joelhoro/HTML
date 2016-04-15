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
  
      this.changesStored = {};

      this.Underliers = function() {
        return _.keys(this.collection);
      }
      this.UnderliersCount = function() {
        return this.Underliers().length;
      }
      this.Points = function() {
        return this.Underliers().toObject(und => this.Get(und).Points());
      }

      this.Get = function(underlier) {
        return this.collection[underlier];
      }

      this.ChangesCount = function(underlier) {
        var changes = this.changesStored[underlier];
        if(changes === undefined) changes = {};
        return _.keys(changes).length;
      }

      this.MetaData = function(underlier) {
        return this.Get(underlier).MetaData();
      }

      this.HasMetaData = function(underlier) {
        return _.keys(this.MetaData(underlier)).length > 0;
      }

      // Update this collection from another one, either all underliers
      // or only the one specified
      this.Update = function(volsurfacecollection, underlier) {
        // if underlier is specified, only update this one
        if(underlier !== null && underlier !== undefined) {
            var slice = volsurfacecollection.Get(underlier);
            this.collection[underlier] = slice;
            this.originalCollection[underlier] = utils.clone(slice);
          }
          else {
            this.collection = volsurfacecollection.collection;
            this.originalCollection = utils.clone(volsurfacecollection.collection);
          }

      }

      this.UpdateFromData = function(dataGrid) {
        if(dataGrid === undefined) { return false; }  // would happened before any data was loaded;
        var refresh = false;
        var idx = 0;

        var underlier = dataGrid[0].underlier;  // not super kosher...
        dataGrid.map(row => {
          var obs = this.Get(underlier).volSurface.Observables[idx++];
          var oldValue = obs.Quotes["BM@T"].round(4);
          var newValue = (row.BM / 100);
          
          var tolerance = 1e-6;
          if(Math.abs(oldValue-newValue)>tolerance) {
            utils.log("Changing mark for {1}: {2}->{3} in {4}", underlier, obs.Name, oldValue, newValue);
            obs.Quotes["BM@T"] = newValue;
            refresh = true;
          }
        });

        return refresh;

      }

      function ChangesForUnderlier(obj,underlier) {
        var mapIt = vs => vs.volSurface.Observables.toObject(o => o.Quotes["BM@T"], o => o.Name);
        var obs1 = mapIt(obj.Get(underlier));
        var obs2 = mapIt(obj.originalCollection[underlier]);
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
      }

      this.CalculateChanges = function() {
        this.Underliers().map(underlier => {
            var changes = ChangesForUnderlier(this,underlier);
            if(changes.length)
              this.changesStored[underlier] = changes;
            else
              delete(this.changesStored[underlier]);
          } );
      }
    
      this.HasChanges = function(underlier) {
        return this.NumberOfChanges(underlier) > 0;
      }

      this.NumberOfChanges = function(underlier) {
        return this.ChangesCount(underlier);
      };
    }

  }


  return VolSurfaceCollection;
} );

