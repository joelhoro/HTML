angular.module('utilsService',[])
.factory('utils', function() {
	// Generic array functions
	Array.prototype.sum = function(fn) { 
	      if ( fn == undefined )
	            fn = function(x) { return x; };
	      return this.map(fn).reduce(function(a,b) { return a+b; } ) 
	}

	Array.prototype.where = function(values) { return _.where(this,values); }
	Array.prototype.groupBy = function(fn) { return _.groupBy(this,fn); }
	Array.prototype.minus = function(remove) { return $(this).not(remove); }
	Array.prototype.toObject = function(fn) { 
	      var obj = {}; 
	      this.forEach(function(field) { obj[field] = fn(field); });
	      return obj;
	}

	function FieldExtractor(fieldName) { return function(obj) { return obj[fieldName]; } }
	function ObjectFn(obj) { return function(fieldName) { return obj[fieldName]; } }
	function ToObject(keys,values) {
	      return _.object(keys,values);
	}

	function HTMLWrapper(tagStyle) {
		return function(x) { return "<"+tagStyle+">"+x+"</"+tagStyle+">"; }
	}

	return { FieldExtractor: FieldExtractor, HTMLWrapper: HTMLWrapper, ObjectFn: ObjectFn };	
})

	