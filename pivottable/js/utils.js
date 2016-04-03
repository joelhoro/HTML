angular.module('utilsService',[])
.service('_', function() { var _ = window._; return _; })
.service('$', function() { 
	var $ = window.$; 
	
	$.fn.goTo = function(parent) {
	  parent.animate({
	      scrollTop: ($(this).offset().top - parent.offset().top )+ 'px'
	  }, 'slow');
	  return this; // for chaining...
	}


	$.fn.scrollTo = function( target, options, callback ){
	  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
	  var settings = $.extend({
	    scrollTarget  : target,
	    offsetTop     : 50,
	    duration      : 500,
	    easing        : 'swing'
	  }, options);
	  return this.each(function(){
	    var scrollPane = $(this);
	    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
	    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
	    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
	      if (typeof callback == 'function') { callback.call(this); }
	    });
	  });
	}

	return $; 
})
.service('utils', function(_,$) {
	// Generic array functions
	Array.prototype.sum = function(fn = x=>x) { 
	      return this.map(fn).reduce((a,b) => a+b) 
	}

	Array.prototype.where = function(values) { return _.where(this,values); }
	Array.prototype.groupBy = function(fn) { return _.groupBy(this,fn); }
	Array.prototype.sortBy = function(fn) { return _.sortBy(this,fn); }
	Array.prototype.toObject = function(fn) { 
	      var obj = {}; 
	      this.forEach(field => obj[field] = fn(field));
	      return obj;
	}

	Number.prototype.round = function(n) { base = Math.pow(10,n); return Math.round(this*base)/base; }
	Number.prototype.capfloor = function(floor,cap) { return Math.max(floor,Math.min(cap,this)); }
	
	String.prototype.contains = function(substr) { return this.indexOf(substr)>-1 };
	
	return { 
		FieldExtractor	: fieldName => obj => obj[fieldName], 
		ObjectFn		: obj => fieldName => obj[fieldName],
		HTMLWrapper		: (tagStyle,attributes="") => x => "<"+tagStyle+" " + attributes + ">"+x+"</"+tagStyle+">"
	};	
})

	