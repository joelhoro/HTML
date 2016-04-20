"use strict";

angular.module('utilities')
.service("dealerUtils", function(_) {

    var dealers = {
        socgen: {   shortname: "SG",    label: "SocGen"         },
        ms:     {   shortname: "MS",    label: "Morgan Stanley"  },
        jpm:    {   shortname: "JPM",   label: "JP Morgan"      },
        hsbc:   {   shortname: "HSBC",  label: "HSBC"           },
        ml:     {   shortname: "ML",    label: "Merrill"        },
    };

    for(var dealer in dealers)
        dealers[dealer].active = true;

    var dealerList = _.keys(dealers);

    var ActiveDealers = function() {
        return dealerList.filter(d => dealers[d].active);
    }

    return {
        dealers: dealerList,
        dealerInfo: dealers,
        dealerCount: dealerList.length,
        ActiveDealers: ActiveDealers,
    }
});