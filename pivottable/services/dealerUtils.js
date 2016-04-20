"use strict";

angular.module('utilities')
.service("dealerUtils", function(_) {

    var dealers = {
        socgen: {   shortname: "SG",    label: "SocGen"         },
        ms:     {   shortname: "MS",    label: "Morgan Stanley"  },
        jpm:    {   shortname: "JPM",   label: "JP Morgan"      },
        ml:     {   shortname: "ML",    label: "Merrill"        },
        hsbc:   {   shortname: "HSBC",  label: "HSBC"           },
    };

    for (var dealer in dealers)
        dealers[dealer].active = dealer !== "hsbc";

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