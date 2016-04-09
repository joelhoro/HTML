angular.module('utilsService',[])
.service('underscore', function() { var _ = window._; return _; })
.service('jquery', function() { 
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
.service('utils', function(underscore,jquery) {
	// Generic array functions
	Array.prototype.sum = function(fn = x=>x) { 
	      return this.map(fn).reduce((a,b) => a+b) 
	}

	var _ = window._;

	Array.prototype.where = function(values) { return _.where(this,values); }
	Array.prototype.groupBy = function(fn) { return _.groupBy(this,fn); }
	Array.prototype.sortBy = function(fn) { return _.sortBy(this,fn); }
	Array.prototype.toObject = function(fn) { 
	      var obj = {}; 
	      this.forEach(field => obj[field] = fn(field));
	      return obj;
	}

    Array.prototype.max = function() {
      var max = this[0];
      this.map(x => { if(x != null)  max = Math.max(max,x) });
      return max;
    }
    Array.prototype.min = function() {
      var min = this[0];
      this.map(x => { if(x != null) min = Math.min(min,x) });
      return min;
    }
    Array.prototype.avg = function(ignorenulls=true) {
    	var length = ignorenulls ? this.filter(x => x != null).length : this.length;
    	return this.sum() / length;
    }

	Number.prototype.round = function(n) { base = Math.pow(10,n); return Math.round(this*base)/base; }
	Number.prototype.capfloor = function(floor,cap) { return Math.max(floor,Math.min(cap,this)); }

	String.prototype.contains = function(substr) { return this.indexOf(substr)>-1 };
    String.prototype.format = function(...arguments) {
        var str = this.toString();
        if (!arguments.length)
            return str;
        var args = typeof arguments[0],
            args = (("string" == args || "number" == args) ? arguments : arguments[0]);
        for (arg in args)
            str = str.replace(RegExp("\\{" + arg + "\\}", "gi"), JSON.stringify(args[arg]));
        return str;
    }

    var id = 0;

	scrollTo = window._.throttle(spanId => $("#console").scrollTo($("#"+spanId)));

	// console stuff
    function log(message,...arg) {
    	console.debug(message,arg);
    	var spanId = "console_" + id;
    	var html = "<p># <span id=" + spanId + ">" + message.format(arg) + "</span>";
		$("#console").append(html);
		scrollTo(spanId);
		id++;
    }

	var consoleElt = $("#console");
	var originalConsoleWidth = 600;
	var maxConsoleWidth = 1000;
	var consoleWidthIncrement = 200;
	var consoleOn = true;

    var setConsoleWidth = w => {
    	consoleWidth = w;
		consoleElt.animate({ width : consoleWidth+"px" });    		
    }

   	setConsoleWidth(originalConsoleWidth);

    function toggleConsole() {
    	if(!consoleOn) {
    		consoleElt.animate({bottom: 10});
    		consoleOn= true;
    		setConsoleWidth(originalConsoleWidth);
    	}
    	else {
    		consoleWidth += consoleWidthIncrement;
    		if(consoleWidth>maxConsoleWidth) {
				consoleElt.animate({bottom:-300, width: originalConsoleWidth+"px"});
				consoleOn = false;
    		}
    		else
				setConsoleWidth(consoleWidth);
    	}
    }

    function yearFrac(d1,d2) {
    	return (d2-d1) / (1000*3600*24) / 365;
    }

	return { 
		FieldExtractor	: fieldName => obj => obj[fieldName], 
		ObjectFn		: obj => fieldName => obj[fieldName],
		HTMLWrapper		: (tagStyle,attributes="") => x => "<"+tagStyle+" " + attributes + ">"+x+"</"+tagStyle+">",
		log				: log,
		toggleConsole	: window._.throttle(toggleConsole,200),
		yearFrac 		: yearFrac
	};	
})
.service('misc', function() {
	  var path = "assets/flags/";
	  var svgFlags = _.template(path + "<%= flag %>.svg" );
	  var regionFlag = function(und) { 

	  	if(und == 'SPX')
	  		return path + "SPXlogo.jpg";
	  	if(und == 'NDX')
	  		return path + "nasdaq_logo-660.jpg";
		if(und == "NIZ6" || und == "NIZ7")	  	
			return "http://www.fxmarker.com/sites/all/themes/fxmarker/uploads/commodities_icon.png";
		
	  	var cme = "https://s3.amazonaws.com/media.agricharts.com/sites/658/New%20Stories/CME%20Group%20Story/Chicago%20Mer%20Logo%20Picture.jpg";
	  	var specialFlags = {

	  		"CLM6": cme,
			"CLZ7": cme,
   	      "GLD UP": cme,
			"GDX UP": cme,

	  	}

	  	var flag = specialFlags[und];
	  	if(flag != undefined)
	  		return flag;

	    var flags = {
	      "AS51": "us",
	      "HSI": "cn",
	      "KOSPI2": "kr", 
	      "SPX": "us",
	      "SX5E": "eu",
	      "UKX": "gb",
	      "AUDUSD WMCO": "au",
	      "CLM6": "us",
	      "DEDZ6": "us",
	      "DEDZ7": "us",
	      "DEDZ8": "us",
	      "EURUSD WMCO": "eu",
	      "FTSEMIB": "gb",
	      "GBPUSD WMCO": "gb",
	      "HYG UP": "us",
	      "IEF UP": "us",
	      "NIZ6": "us",
	      "NIZ7": "us",
	      "NKY": "jp",
	      "USDJPY": "jp",
	      "UVXYIV": "us",
	      "XIVIV": "us",
	      "SMI": "ch",
	      "TPX": "jp",
	      "CAC": "fr",
	      "DAX": "de",
	      "EEM UP": "us",
	      "EWJ UP": "us",
	      "HSCEI": "cn",
	      "IBEX": "es",
	      "NDX": "us",
	      "RTY": "us",
	      "SPY UP": "us",
	      "SX7E": "eu",
	      "TWSE": "tw",
	      "XLB UP": "us",
	      "XLE UP": "us",
	      "XLF UP": "us",
	      "XLI UP": "us",
	      "XLK UP": "us",
	      "XLP UP": "us",
	      "XLU UP": "us",
	      "XLV UP": "us",
	      "XLY UP": "us",
	      "XME UP": "us"
	    };

	    return svgFlags({flag: flags[und]}); 
	  }

	  var categories = [
	    	
	    	[ "Majors", [
		      "SPX",
		      "SX5E",
		      "HSI",
		      "NKY",
	    	] ],

	    [ "Minors", [
	      "AS51",
	      "KOSPI2", 
	      "UKX",
	      "FTSEMIB",
	      "HYG UP",
	      "IEF UP",
	      "UVXYIV",
	      "XIVIV",
	      "SMI",
	      "TPX",
	      "CAC",
	      "DAX",
	      "EEM UP",
	      "EWJ UP",
	      "HSCEI",
	      "IBEX",
	      "NDX",
	      "RTY",
	      "SPY UP",
	      "SX7E",
	      "TWSE"
	      ] ],

		[	"FX",  [
		  "AUDUSD WMCO",
	      "EURUSD WMCO",
	      "GBPUSD WMCO",
	      "USDJPY",
				] ],

	      [ "ETFs", [ 
	      "NIZ6",
	      "NIZ7",
		      "CLM6",
		      "DEDZ6",
		      "DEDZ7",
		      "DEDZ8",
		      "XLB UP",
		      "XLE UP",
		      "XLF UP",
		      "XLI UP",
		      "XLK UP",
		      "XLP UP",
		      "XLU UP",
		      "XLV UP",
		      "XLY UP",
		      "XME UP"
	      ] ]
	];	


	  return { regionFlag: regionFlag, categories : categories };
	} )
