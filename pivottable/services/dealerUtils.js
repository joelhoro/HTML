"use strict";

angular.module('utilities')
.service("dealerUtils", function(_) {

    var dealers = {
        socgen: {   shortname: "SG",    label: "SocGen"         },
        jpm:    {   shortname: "JPM",   label: "JP Morgan"      },
        ml:     {   shortname: "ML",    label: "Merrill"        },
        hsbc:   {   shortname: "HSBC",  label: "HSBC"           },
        ms:     {   shortname: "MS",    label: "Morgan Stanley"  }
    };

    return {
        dealers: _.keys(dealers),
        dealerInfo: dealers,
        dealerCount: _.keys(dealers).length
    }
});