"use strict";

angular.module('utilities')
.service("dealerUtils", function(_) {

    class Dealer {
        constructor(shortname, label) {
            this.shortname = shortname;
            this.label = label;
        }
    }

    var dealers = {
        socgen: new Dealer("SG", "SocGen"),
        ms:     new Dealer("MS", "Morgan Stanley"),
        jpm:    new Dealer("JPM", "JP Morgan" ),
        ml:     new Dealer("ML",  "Merrill" ),
        hsbc:   new Dealer("HSBC", "HSBC"),
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