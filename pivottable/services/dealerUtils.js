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

    return {
        dealers: _.keys(dealers),
        dealerInfo: dealers,
        dealerCount: _.keys(dealers).length
    }
});