angular.module('dataWarehouse',['utilities'])
.service("dataWarehouse", function($http,utils) { 

var $ = window.$;
utils.log("Initializing datawareHouse service");

function getAjaxData(successFn,mode, date) {
    var url = { 'ajaxfull' : 'http://localhost:17041/services/DBAccessor.asmx/RetrieveVolSurfaces',
      'ajax' : 'data/volsurfaces.json',
      'ajaxASP': 'http://localhost/Blink/EquityVol.asmx/RetrieveVolSurfaces?date=' + date }[mode];

    var method = mode === 'ajaxfull' ? 'post' : 'get';
    var req = { method: method, url: url };
    utils.log("Making Ajax request {0}", req);
    $http(req).then(successFn);
}

return { 

    getAjaxData : getAjaxData,
    dataFn: () => 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// COPY PASTE DUMMY DATA HERE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

[
  {
    "Index": "AS51",
    "Ticker": "EQI.AS51",
    "Spot": 4931.532,
    "VolSurfaceTime": "4/11/2016 4:00:00 PM",
    "Observables": [
      {
        "Name": "AS51_JUN16",
        "Maturity": "6/16/2016",
        "Quotes": {
          "BM@T": 0.2080661323,
          "BMComputed@T": 0.20123462137570489,
          "BM@T-1": 0.207931613,
          "BMComputed@T-1": 0.20112687067228521,
          "Dealer.MS": 0.21233215,
          "Dealer.SocGen": 0.210651930925056,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.20700000000000002
        }
      },
      {
        "Name": "AS51_SEP16",
        "Maturity": "9/15/2016",
        "Quotes": {
          "BM@T": 0.2157224894,
          "BMComputed@T": 0.21110980256201056,
          "BM@T-1": 0.214718034,
          "BMComputed@T-1": 0.21011316895989463,
          "Dealer.MS": 0.21824365,
          "Dealer.SocGen": 0.221073867713353,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.21599995
        }
      },
      {
        "Name": "AS51_DEC16",
        "Maturity": "12/15/2016",
        "Quotes": {
          "BM@T": 0.2205127531,
          "BMComputed@T": 0.21537767209617514,
          "BM@T-1": 0.2196242193,
          "BMComputed@T-1": 0.21448975630997727,
          "Dealer.MS": 0.22035265,
          "Dealer.SocGen": 0.224214490654111,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.22099995
        }
      },
      {
        "Name": "AS51_MAR17",
        "Maturity": "3/16/2017",
        "Quotes": {
          "BM@T": 0.2225816457,
          "BMComputed@T": 0.21615817853545116,
          "BM@T-1": 0.221771572,
          "BMComputed@T-1": 0.21535028752560595,
          "Dealer.MS": 0.22318985,
          "Dealer.SocGen": 0.227387821092941,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.223
        }
      },
      {
        "Name": "AS51_JUN17",
        "Maturity": "6/15/2017",
        "Quotes": {
          "BM@T": 0.2256862606,
          "BMComputed@T": 0.21896303516918211,
          "BM@T-1": 0.2249320704,
          "BMComputed@T-1": 0.21821050838317321,
          "Dealer.MS": 0.22377575,
          "Dealer.SocGen": 0.23041760799899902,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.225
        }
      },
      {
        "Name": "AS51_DEC17",
        "Maturity": "12/21/2017",
        "Quotes": {
          "BM@T": 0.2272257613,
          "BMComputed@T": 0.22297315789731106,
          "BM@T-1": 0.226563034,
          "BMComputed@T-1": 0.22231373465349855,
          "Dealer.MS": 0.22583560000000003,
          "Dealer.SocGen": 0.23303003995792898,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.228
        }
      }
    ]
  },
  {
    "Index": "AUDUSD WMCO",
    "Ticker": "FX.AUD.USD",
    "Spot": 0.76055,
    "VolSurfaceTime": "4/11/2016 4:00:00 PM",
    "Observables": [
      {
        "Name": "AUDUSD WMCO_JUN16",
        "Maturity": "6/16/2016",
        "Quotes": {
          "BM@T": 0.1348814007,
          "BMComputed@T": 0.12893628762510315,
          "BM@T-1": 0.1348814007,
          "BMComputed@T-1": 0.13001286796268205,
          "Dealer.MS": 0.0,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "CAC",
    "Ticker": "EQI.CAC",
    "Spot": 4312.63,
    "VolSurfaceTime": "4/11/2016 11:29:14 AM",
    "Observables": [
      {
        "Name": "CAC_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.252,
          "BMComputed@T": 0.23927140020972038,
          "BM@T-1": 0.2539286633,
          "BMComputed@T-1": 0.24134087237624283,
          "Dealer.MS": 0.2489946,
          "Dealer.SocGen": 0.25239999999999996,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "DAX",
    "Ticker": "EQI.DAX",
    "Spot": 9682.99,
    "VolSurfaceTime": "4/11/2016 11:29:16 AM",
    "Observables": [
      {
        "Name": "DAX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.2496,
          "BMComputed@T": 0.23953507743677452,
          "BM@T-1": 0.2520639391,
          "BMComputed@T-1": 0.24320705126827649,
          "Dealer.MS": 0.2435651,
          "Dealer.SocGen": 0.2506,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.247
        }
      },
      {
        "Name": "DAX_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.261,
          "BMComputed@T": 0.25505563465348297,
          "BM@T-1": 0.2608694289,
          "BMComputed@T-1": 0.2540429665540051,
          "Dealer.MS": 0.2617841,
          "Dealer.SocGen": 0.2685,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.265
        }
      },
      {
        "Name": "DAX_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.267,
          "BMComputed@T": 0.25352847105334342,
          "BM@T-1": 0.2593294113,
          "BMComputed@T-1": 0.26059137574325369,
          "Dealer.MS": 0.26638110000000004,
          "Dealer.SocGen": 0.2718,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.26800005000000005
        }
      },
      {
        "Name": "DAX_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.269,
          "BMComputed@T": 0.25592097009938219,
          "BM@T-1": 0.2675,
          "BMComputed@T-1": 0.25604858765693184,
          "Dealer.MS": 0.26727369999999995,
          "Dealer.SocGen": 0.269,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.267
        }
      },
      {
        "Name": "DAX_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2674,
          "BMComputed@T": 0.24938750549918481,
          "BM@T-1": 0.269,
          "BMComputed@T-1": 0.25022056090231631,
          "Dealer.MS": 0.2714535,
          "Dealer.SocGen": 0.2733,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.26899989999999996
        }
      },
      {
        "Name": "DAX_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.2711,
          "BMComputed@T": 0.24380616768304636,
          "BM@T-1": 0.271,
          "BMComputed@T-1": 0.25279205476879607,
          "Dealer.MS": 0.27245395,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "DAX_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2747,
          "BMComputed@T": 0.24395652866599843,
          "BM@T-1": 0.273,
          "BMComputed@T-1": 0.25227841349129648,
          "Dealer.MS": 0.27619125,
          "Dealer.SocGen": 0.27190000000000003,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.2710001
        }
      },
      {
        "Name": "DAX_JUN18",
        "Maturity": "6/15/2018",
        "Quotes": {
          "BM@T": 0.2734,
          "BMComputed@T": 0.25459494913173442,
          "BM@T-1": 0.275,
          "BMComputed@T-1": 0.22651468637367989,
          "Dealer.MS": 0.2805204,
          "Dealer.SocGen": 0.2696,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "DAX_DEC18",
        "Maturity": "12/21/2018",
        "Quotes": {
          "BM@T": 0.28,
          "BMComputed@T": 0.235388161545278,
          "BM@T-1": 0.2773,
          "BMComputed@T-1": 0.23835816870677576,
          "Dealer.MS": 0.2844798,
          "Dealer.SocGen": 0.2746,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.276
        }
      },
      {
        "Name": "DAX_JUN19",
        "Maturity": "6/21/2019",
        "Quotes": {
          "BM@T": 0.2869,
          "BMComputed@T": 0.23587395149619164,
          "BM@T-1": 0.281,
          "BMComputed@T-1": 0.23875305382170414,
          "Dealer.MS": 0.27913555,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "DAX_DEC19",
        "Maturity": "12/20/2019",
        "Quotes": {
          "BM@T": 0.281,
          "BMComputed@T": 0.23637148360389429,
          "BM@T-1": 0.281,
          "BMComputed@T-1": 0.23915840814799391,
          "Dealer.MS": 0.27714395,
          "Dealer.SocGen": 0.28300000000000003,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.28600000000000003
        }
      }
    ]
  },
  {
    "Index": "EURUSD WMCO",
    "Ticker": "FX.EUR.USD",
    "Spot": 1.1443,
    "VolSurfaceTime": "4/11/2016 4:00:00 PM",
    "Observables": [
      {
        "Name": "EURUSD WMCO_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.104783784,
          "BMComputed@T": 0.10023287667662202,
          "BM@T-1": 0.104783784,
          "BMComputed@T-1": 0.10263890892669079,
          "Dealer.MS": 0.0,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "EURUSD WMCO_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.1136169664,
          "BMComputed@T": 0.11025885178594141,
          "BM@T-1": 0.1131902521,
          "BMComputed@T-1": 0.10988714604811063,
          "Dealer.MS": 0.0,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "FTSEMIB",
    "Ticker": "EQI.FTSEMIB",
    "Spot": 17722.66,
    "VolSurfaceTime": "4/11/2016 11:40:00 AM",
    "Observables": [
      {
        "Name": "FTSEMIB_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.3337418992,
          "BMComputed@T": 0.34068795193044354,
          "BM@T-1": 0.3337418992,
          "BMComputed@T-1": 0.31940127901054777,
          "Dealer.MS": 0.31472164999999996,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "GBPUSD WMCO",
    "Ticker": "FX.GBP.USD",
    "Spot": 1.42645,
    "VolSurfaceTime": "4/11/2016 4:00:00 PM",
    "Observables": [
      {
        "Name": "GBPUSD WMCO_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1130430749,
          "BMComputed@T": 0.1337534548646194,
          "BM@T-1": 0.1130430749,
          "BMComputed@T-1": 0.14292108257472425,
          "Dealer.MS": 0.0,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "GBPUSD WMCO_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.1487837609,
          "BMComputed@T": 0.15458763359619457,
          "BM@T-1": 0.1487837609,
          "BMComputed@T-1": 0.15544812131896799,
          "Dealer.MS": 0.0,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "HSCEI",
    "Ticker": "EQI.HSCEI",
    "Spot": 8807.06,
    "VolSurfaceTime": "4/11/2016 4:00:00 PM",
    "Observables": [
      {
        "Name": "HSCEI_APR16",
        "Maturity": "4/28/2016",
        "Quotes": {
          "BM@T": 0.3033,
          "BMComputed@T": 0.26255845389505278,
          "BM@T-1": 0.324,
          "BMComputed@T-1": 0.27847381605731586,
          "Dealer.MS": 0.0,
          "Dealer.SocGen": 0.277104005156749,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "HSCEI_JUN16",
        "Maturity": "6/29/2016",
        "Quotes": {
          "BM@T": 0.3117,
          "BMComputed@T": 0.29784655771901669,
          "BM@T-1": 0.3230854939,
          "BMComputed@T-1": 0.31140660656586955,
          "Dealer.MS": 0.30637015,
          "Dealer.SocGen": 0.295800011105604,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.30569999999999997
        }
      },
      {
        "Name": "HSCEI_SEP16",
        "Maturity": "9/29/2016",
        "Quotes": {
          "BM@T": 0.3237,
          "BMComputed@T": 0.31744954505221162,
          "BM@T-1": 0.3310873318,
          "BMComputed@T-1": 0.32437980781691939,
          "Dealer.MS": 0.32025975,
          "Dealer.SocGen": 0.316736418773454,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.3195
        }
      },
      {
        "Name": "HSCEI_DEC16",
        "Maturity": "12/29/2016",
        "Quotes": {
          "BM@T": 0.3322,
          "BMComputed@T": 0.33729750194818381,
          "BM@T-1": 0.3376378835,
          "BMComputed@T-1": 0.34371058478800742,
          "Dealer.MS": 0.33058219999999994,
          "Dealer.SocGen": 0.328450810223573,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.32789999999999997
        }
      },
      {
        "Name": "HSCEI_MAR17",
        "Maturity": "3/30/2017",
        "Quotes": {
          "BM@T": 0.3338,
          "BMComputed@T": 0.34157180952459337,
          "BM@T-1": 0.3376676059,
          "BMComputed@T-1": 0.34223517793162994,
          "Dealer.MS": 0.3307193,
          "Dealer.SocGen": 0.335263444350467,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.33390010000000003
        }
      },
      {
        "Name": "HSCEI_JUN17",
        "Maturity": "6/29/2017",
        "Quotes": {
          "BM@T": 0.3388,
          "BMComputed@T": 0.34457232415208777,
          "BM@T-1": 0.3427651606,
          "BMComputed@T-1": 0.34452044464823989,
          "Dealer.MS": 0.3337329,
          "Dealer.SocGen": 0.33991356879386997,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.33690005
        }
      },
      {
        "Name": "HSCEI_DEC17",
        "Maturity": "12/28/2017",
        "Quotes": {
          "BM@T": 0.3437,
          "BMComputed@T": 0.34165316123441208,
          "BM@T-1": 0.3473755265,
          "BMComputed@T-1": 0.34103916139750351,
          "Dealer.MS": 0.34265959999999995,
          "Dealer.SocGen": 0.344242882378743,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.34190005
        }
      },
      {
        "Name": "HSCEI_MAR18",
        "Maturity": "3/28/2018",
        "Quotes": {
          "BM@T": 0.3466,
          "BMComputed@T": 0.33963076524796149,
          "BM@T-1": 0.35,
          "BMComputed@T-1": 0.33884003525715439,
          "Dealer.MS": 0.34393720000000005,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "HSI",
    "Ticker": "EQI.HSI",
    "Spot": 20440.81,
    "VolSurfaceTime": "4/11/2016 4:00:00 PM",
    "Observables": [
      {
        "Name": "HSI_APR16",
        "Maturity": "4/28/2016",
        "Quotes": {
          "BM@T": 0.2246980896,
          "BMComputed@T": 0.18949043564932219,
          "BM@T-1": 0.24,
          "BMComputed@T-1": 0.20479234607276808,
          "Dealer.MS": 0.0,
          "Dealer.SocGen": 0.202769555104658,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "HSI_JUN16",
        "Maturity": "6/29/2016",
        "Quotes": {
          "BM@T": 0.2323724191,
          "BMComputed@T": 0.22596233193858475,
          "BM@T-1": 0.2408607455,
          "BMComputed@T-1": 0.23445467201286085,
          "Dealer.MS": 0.231127,
          "Dealer.SocGen": 0.233259600364722,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.23099995
        }
      },
      {
        "Name": "HSI_SEP16",
        "Maturity": "9/29/2016",
        "Quotes": {
          "BM@T": 0.249882734,
          "BMComputed@T": 0.24294484971059757,
          "BM@T-1": 0.2555963993,
          "BMComputed@T-1": 0.24866254305152594,
          "Dealer.MS": 0.25388160000000004,
          "Dealer.SocGen": 0.249900210364701,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.248
        }
      },
      {
        "Name": "HSI_DEC16",
        "Maturity": "12/29/2016",
        "Quotes": {
          "BM@T": 0.2600969791,
          "BMComputed@T": 0.25353579280516481,
          "BM@T-1": 0.2643407179,
          "BMComputed@T-1": 0.25778347802429857,
          "Dealer.MS": 0.265947,
          "Dealer.SocGen": 0.261785454548921,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.25700005000000004
        }
      },
      {
        "Name": "HSI_MAR17",
        "Maturity": "3/30/2017",
        "Quotes": {
          "BM@T": 0.2654823714,
          "BMComputed@T": 0.25928515221227694,
          "BM@T-1": 0.268567954,
          "BMComputed@T-1": 0.26237452547927731,
          "Dealer.MS": 0.26978305,
          "Dealer.SocGen": 0.272433106182578,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.265
        }
      },
      {
        "Name": "HSI_JUN17",
        "Maturity": "6/29/2017",
        "Quotes": {
          "BM@T": 0.2707074704,
          "BMComputed@T": 0.26823350525874035,
          "BM@T-1": 0.2739098979,
          "BMComputed@T-1": 0.27144307209718843,
          "Dealer.MS": 0.27521045,
          "Dealer.SocGen": 0.277288726906471,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.27
        }
      },
      {
        "Name": "HSI_DEC17",
        "Maturity": "12/28/2017",
        "Quotes": {
          "BM@T": 0.2789580559,
          "BMComputed@T": 0.27889231851463875,
          "BM@T-1": 0.2819235639,
          "BMComputed@T-1": 0.28186449719650525,
          "Dealer.MS": 0.2845291,
          "Dealer.SocGen": 0.286282769871063,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.28
        }
      },
      {
        "Name": "HSI_MAR18",
        "Maturity": "3/28/2018",
        "Quotes": {
          "BM@T": 0.280228598,
          "BMComputed@T": 0.28343853506027095,
          "BM@T-1": 0.283,
          "BMComputed@T-1": 0.28621623277501279,
          "Dealer.MS": 0.2898373,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "IBEX",
    "Ticker": "EQI.IBEX",
    "Spot": 8497.6,
    "VolSurfaceTime": "4/11/2016 11:35:00 AM",
    "Observables": [
      {
        "Name": "IBEX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.2748275482,
          "BMComputed@T": 0.30213948336896612,
          "BM@T-1": 0.2748275482,
          "BMComputed@T-1": 0.28891592916689884,
          "Dealer.MS": 0.27035685,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "KOSPI2",
    "Ticker": "EQI.KOSPI2",
    "Spot": 242.06,
    "VolSurfaceTime": "4/11/2016 3:15:00 PM",
    "Observables": [
      {
        "Name": "KOSPI2_JUN16",
        "Maturity": "6/9/2016",
        "Quotes": {
          "BM@T": 0.1564117114,
          "BMComputed@T": 0.1499143959103271,
          "BM@T-1": 0.1578419783,
          "BMComputed@T-1": 0.15134466283962517,
          "Dealer.MS": 0.15224005000000002,
          "Dealer.SocGen": 0.15424455910843698,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.14700000000000002
        }
      },
      {
        "Name": "KOSPI2_SEP16",
        "Maturity": "9/8/2016",
        "Quotes": {
          "BM@T": 0.1812877767,
          "BMComputed@T": 0.17957229602044011,
          "BM@T-1": 0.1808784701,
          "BMComputed@T-1": 0.17916298942073028,
          "Dealer.MS": 0.17426685000000003,
          "Dealer.SocGen": 0.178385377489061,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.175
        }
      },
      {
        "Name": "KOSPI2_DEC16",
        "Maturity": "12/8/2016",
        "Quotes": {
          "BM@T": 0.1964000975,
          "BMComputed@T": 0.18764947413476524,
          "BM@T-1": 0.1964229606,
          "BMComputed@T-1": 0.18767233725961868,
          "Dealer.MS": 0.19020195,
          "Dealer.SocGen": 0.192366746361933,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.19299994999999998
        }
      },
      {
        "Name": "KOSPI2_MAR17",
        "Maturity": "3/9/2017",
        "Quotes": {
          "BM@T": 0.2015155072,
          "BMComputed@T": 0.19296692202535129,
          "BM@T-1": 0.2019170175,
          "BMComputed@T-1": 0.19336843233322393,
          "Dealer.MS": 0.19840245,
          "Dealer.SocGen": 0.201334069344532,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.20200005000000001
        }
      },
      {
        "Name": "KOSPI2_JUN17",
        "Maturity": "6/8/2017",
        "Quotes": {
          "BM@T": 0.209042895,
          "BMComputed@T": 0.19680827464253309,
          "BM@T-1": 0.2093978712,
          "BMComputed@T-1": 0.19716325088677394,
          "Dealer.MS": 0.2047065,
          "Dealer.SocGen": 0.20933747693906798,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.20700005
        }
      },
      {
        "Name": "KOSPI2_DEC17",
        "Maturity": "12/14/2017",
        "Quotes": {
          "BM@T": 0.2199681719,
          "BMComputed@T": 0.20148514980857038,
          "BM@T-1": 0.2207249395,
          "BMComputed@T-1": 0.20224191744453693,
          "Dealer.MS": 0.21530434999999998,
          "Dealer.SocGen": 0.218782673303277,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.214
        }
      }
    ]
  },
  {
    "Index": "NDX",
    "Ticker": "EQI.NDX",
    "Spot": 4458.706,
    "VolSurfaceTime": "4/11/2016 4:14:42 PM",
    "Observables": [
      {
        "Name": "NDX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.2055001656,
          "BMComputed@T": 0.1957726789400287,
          "BM@T-1": 0.2064209127,
          "BMComputed@T-1": 0.19667067890374881,
          "Dealer.MS": 0.20930345,
          "Dealer.SocGen": 0.203311,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.20100010000000001
        }
      },
      {
        "Name": "NDX_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2175017914,
          "BMComputed@T": 0.21177897079605906,
          "BM@T-1": 0.2186278555,
          "BMComputed@T-1": 0.21099838232090465,
          "Dealer.MS": 0.223603,
          "Dealer.SocGen": 0.21922304999999997,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.215
        }
      },
      {
        "Name": "NDX_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2270528438,
          "BMComputed@T": 0.21977171427612707,
          "BM@T-1": 0.2273301156,
          "BMComputed@T-1": 0.2194714036975495,
          "Dealer.MS": 0.22623885,
          "Dealer.SocGen": 0.227819,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.22400005
        }
      },
      {
        "Name": "NDX_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2343472088,
          "BMComputed@T": 0.227147243381048,
          "BM@T-1": 0.2344085334,
          "BMComputed@T-1": 0.22849731216517088,
          "Dealer.MS": 0.23671795,
          "Dealer.SocGen": 0.23469505000000002,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.23199999999999998
        }
      },
      {
        "Name": "NDX_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2372616118,
          "BMComputed@T": 0.23613211993241817,
          "BM@T-1": 0.2374,
          "BMComputed@T-1": 0.23868924973557867,
          "Dealer.MS": 0.2410119,
          "Dealer.SocGen": 0.240147,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.237
        }
      },
      {
        "Name": "NDX_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2468728868,
          "BMComputed@T": 0.24558621140966966,
          "BM@T-1": 0.2471843039,
          "BMComputed@T-1": 0.24656810866177953,
          "Dealer.MS": 0.24980845000000002,
          "Dealer.SocGen": 0.24397895,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.245
        }
      }
    ]
  },
  {
    "Index": "NKY",
    "Ticker": "EQI.NKY",
    "Spot": 15751.13,
    "VolSurfaceTime": "4/11/2016 3:15:00 PM",
    "Observables": [
      {
        "Name": "NKY_APR16",
        "Maturity": "4/8/2016",
        "Quotes": {
          "BM@T": 0.29,
          "BMComputed@T": 0.0,
          "BM@T-1": 0.292,
          "BMComputed@T-1": "NaN",
          "Dealer.MS": 0.2283454,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "NKY_JUN16",
        "Maturity": "6/10/2016",
        "Quotes": {
          "BM@T": 0.302,
          "BMComputed@T": 0.29719344135970266,
          "BM@T-1": 0.3068109869,
          "BMComputed@T-1": 0.30422645213468907,
          "Dealer.MS": 0.30675105,
          "Dealer.SocGen": 0.302420833707735,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.29
        }
      },
      {
        "Name": "NKY_SEP16",
        "Maturity": "9/9/2016",
        "Quotes": {
          "BM@T": 0.3025,
          "BMComputed@T": 0.29821068935548012,
          "BM@T-1": 0.3076147362,
          "BMComputed@T-1": 0.3028485930704552,
          "Dealer.MS": 0.29560605,
          "Dealer.SocGen": 0.30182158553691296,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.29200005
        }
      },
      {
        "Name": "NKY_DEC16",
        "Maturity": "12/9/2016",
        "Quotes": {
          "BM@T": 0.303,
          "BMComputed@T": 0.30139655599862192,
          "BM@T-1": 0.3080877064,
          "BMComputed@T-1": 0.30379733262310643,
          "Dealer.MS": 0.3032918,
          "Dealer.SocGen": 0.302728096257941,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.29599995
        }
      },
      {
        "Name": "NKY_JAN17",
        "Maturity": "1/13/2017",
        "Quotes": {
          "BM@T": 0.3034364257,
          "BMComputed@T": 0.30251143608798936,
          "BM@T-1": 0.3053694169,
          "BMComputed@T-1": 0.30444442730157678,
          "Dealer.MS": 0.3067456,
          "Dealer.SocGen": 0.30227180388125197,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "NKY_MAR17",
        "Maturity": "3/10/2017",
        "Quotes": {
          "BM@T": 0.304,
          "BMComputed@T": 0.30672106095691487,
          "BM@T-1": 0.3042048887,
          "BMComputed@T-1": 0.30862703485088239,
          "Dealer.MS": 0.30397474999999996,
          "Dealer.SocGen": 0.30235849152120997,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.298
        }
      },
      {
        "Name": "NKY_JUN17",
        "Maturity": "6/9/2017",
        "Quotes": {
          "BM@T": 0.3,
          "BMComputed@T": 0.30812711774061297,
          "BM@T-1": 0.2974517256,
          "BMComputed@T-1": 0.30936298436085874,
          "Dealer.MS": 0.30445145,
          "Dealer.SocGen": 0.301054474079485,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.2989999
        }
      },
      {
        "Name": "NKY_SEP17",
        "Maturity": "9/8/2017",
        "Quotes": {
          "BM@T": 0.2980634161,
          "BMComputed@T": 0.30730455732143935,
          "BM@T-1": 0.2988442939,
          "BMComputed@T-1": 0.30808543510050868,
          "Dealer.MS": 0.301802,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "NKY_DEC17",
        "Maturity": "12/8/2017",
        "Quotes": {
          "BM@T": 0.2971707205,
          "BMComputed@T": 0.30623134249067735,
          "BM@T-1": 0.2973365741,
          "BMComputed@T-1": 0.30639719605056365,
          "Dealer.MS": 0.30114605000000005,
          "Dealer.SocGen": 0.299626989683408,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.298
        }
      },
      {
        "Name": "NKY_JUN18",
        "Maturity": "6/8/2018",
        "Quotes": {
          "BM@T": 0.2949342485,
          "BMComputed@T": 0.30602189372446004,
          "BM@T-1": 0.295,
          "BMComputed@T-1": 0.30608764521071186,
          "Dealer.MS": 0.3019472,
          "Dealer.SocGen": 0.294027819497255,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "NKY_DEC18",
        "Maturity": "12/14/2018",
        "Quotes": {
          "BM@T": 0.2934033947,
          "BMComputed@T": 0.30588089793234369,
          "BM@T-1": 0.2933961014,
          "BMComputed@T-1": 0.30587360463482421,
          "Dealer.MS": 0.30170030000000003,
          "Dealer.SocGen": 0.292326254872032,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.29600000000000004
        }
      },
      {
        "Name": "NKY_JUN19",
        "Maturity": "6/14/2019",
        "Quotes": {
          "BM@T": 0.2923876398,
          "BMComputed@T": 0.30645311926074192,
          "BM@T-1": 0.2924665867,
          "BMComputed@T-1": 0.30653206618923906,
          "Dealer.MS": 0.30128875,
          "Dealer.SocGen": 0.289970643067528,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "NKY_DEC19",
        "Maturity": "12/13/2019",
        "Quotes": {
          "BM@T": 0.2915,
          "BMComputed@T": 0.306117430636568,
          "BM@T-1": 0.2915,
          "BMComputed@T-1": 0.3069611176942007,
          "Dealer.MS": 0.2999743,
          "Dealer.SocGen": 0.28676337242135697,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.294
        }
      },
      {
        "Name": "NKY_DEC20",
        "Maturity": "12/11/2020",
        "Quotes": {
          "BM@T": 0.2915,
          "BMComputed@T": 0.30456821607891577,
          "BM@T-1": 0.2915,
          "BMComputed@T-1": 0.30527938967110924,
          "Dealer.MS": 0.2974591,
          "Dealer.SocGen": 0.284378492168322,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "RTY",
    "Ticker": "EQI.RTY",
    "Spot": 1094.342,
    "VolSurfaceTime": "4/11/2016 4:14:35 PM",
    "Observables": [
      {
        "Name": "RTY_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.2128681835,
          "BMComputed@T": 0.2041771880192722,
          "BM@T-1": 0.2183428982,
          "BMComputed@T-1": 0.21113396265108592,
          "Dealer.MS": 0.21303185,
          "Dealer.SocGen": 0.21463600000000002,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.215
        }
      },
      {
        "Name": "RTY_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2348698074,
          "BMComputed@T": 0.22439284829374367,
          "BM@T-1": 0.236297087,
          "BMComputed@T-1": 0.22600273133333218,
          "Dealer.MS": 0.23266674999999998,
          "Dealer.SocGen": 0.23125,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.22899999999999998
        }
      },
      {
        "Name": "RTY_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2407592867,
          "BMComputed@T": 0.23041635002305816,
          "BM@T-1": 0.2428300062,
          "BMComputed@T-1": 0.23280819569318739,
          "Dealer.MS": 0.24262465,
          "Dealer.SocGen": 0.23969505,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.23800005000000002
        }
      },
      {
        "Name": "RTY_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2451877654,
          "BMComputed@T": 0.2394078652201527,
          "BM@T-1": 0.2462520613,
          "BMComputed@T-1": 0.24088700426594414,
          "Dealer.MS": 0.24697960000000002,
          "Dealer.SocGen": 0.24584405,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.245
        }
      },
      {
        "Name": "RTY_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2486748059,
          "BMComputed@T": 0.24582599675368164,
          "BM@T-1": 0.2504918481,
          "BMComputed@T-1": 0.24661588635352391,
          "Dealer.MS": 0.25580614999999995,
          "Dealer.SocGen": 0.251622,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.2510001
        }
      },
      {
        "Name": "RTY_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2583326882,
          "BMComputed@T": 0.25752680273866407,
          "BM@T-1": 0.2590327567,
          "BMComputed@T-1": 0.25657056412923135,
          "Dealer.MS": 0.26429355,
          "Dealer.SocGen": 0.2600941,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.26
        }
      }
    ]
  },
  {
    "Index": "SMI",
    "Ticker": "EQI.SMI",
    "Spot": 7751.58,
    "VolSurfaceTime": "4/11/2016 11:25:15 AM",
    "Observables": [
      {
        "Name": "SMI_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1956,
          "BMComputed@T": 0.19262903777813173,
          "BM@T-1": 0.1997908165,
          "BMComputed@T-1": 0.19127517943636593,
          "Dealer.MS": 0.1976806,
          "Dealer.SocGen": 0.20149999999999998,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.2089999
        }
      },
      {
        "Name": "SMI_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2147,
          "BMComputed@T": 0.20118587578190789,
          "BM@T-1": 0.216602091,
          "BMComputed@T-1": 0.2012142898210916,
          "Dealer.MS": 0.209302,
          "Dealer.SocGen": 0.21539999999999998,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.21799995
        }
      },
      {
        "Name": "SMI_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2181,
          "BMComputed@T": 0.20841975974466356,
          "BM@T-1": 0.22,
          "BMComputed@T-1": 0.20463781107101461,
          "Dealer.MS": 0.21014625,
          "Dealer.SocGen": 0.2178,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.21800005
        }
      },
      {
        "Name": "SMI_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2057,
          "BMComputed@T": 0.20950133833460349,
          "BM@T-1": 0.2137,
          "BMComputed@T-1": 0.21651874566601448,
          "Dealer.MS": 0.2173334,
          "Dealer.SocGen": 0.2213,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.21600010000000003
        }
      },
      {
        "Name": "SMI_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2153,
          "BMComputed@T": 0.22468512227822257,
          "BM@T-1": 0.2271003374,
          "BMComputed@T-1": 0.21648554610002607,
          "Dealer.MS": 0.22616355,
          "Dealer.SocGen": 0.223,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.217
        }
      },
      {
        "Name": "SMI_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2179,
          "BMComputed@T": 0.22038151395817882,
          "BM@T-1": 0.2283775246,
          "BMComputed@T-1": 0.21423648888512276,
          "Dealer.MS": 0.22560950000000002,
          "Dealer.SocGen": 0.22809999999999997,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.2139999
        }
      }
    ]
  },
  {
    "Index": "SPX",
    "Ticker": "EQI.SPX",
    "Spot": 2041.99,
    "VolSurfaceTime": "4/11/2016 4:15:23 PM",
    "Observables": [
      {
        "Name": "SPX_APR16",
        "Maturity": "4/15/2016",
        "Quotes": {
          "BM@T": 0.1171,
          "BMComputed@T": 0.12175820291668212,
          "BM@T-1": 0.1165701738,
          "BMComputed@T-1": 0.13853222154797054,
          "Dealer.MS": 0.10524525000000001,
          "Dealer.SocGen": 0.126369,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SPX_MAY16",
        "Maturity": "5/20/2016",
        "Quotes": {
          "BM@T": 0.1594,
          "BMComputed@T": 0.158726039276343,
          "BM@T-1": 0.1622626482,
          "BMComputed@T-1": 0.16126353083594633,
          "Dealer.MS": 0.15657885,
          "Dealer.SocGen": 0.15596005000000002,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SPX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.179,
          "BMComputed@T": 0.17557648123617567,
          "BM@T-1": 0.178311464,
          "BMComputed@T-1": 0.17878987776002575,
          "Dealer.MS": 0.17638695,
          "Dealer.SocGen": 0.1742419,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.17600000000000002,
          "Dealer.HSBC": 0.17399989999999999
        }
      },
      {
        "Name": "SPX_JUL16",
        "Maturity": "7/15/2016",
        "Quotes": {
          "BM@T": 0.1886509361,
          "BMComputed@T": 0.18701453018147632,
          "BM@T-1": 0.1888232325,
          "BMComputed@T-1": 0.18990353062747714,
          "Dealer.MS": 0.18812555,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SPX_AUG16",
        "Maturity": "8/19/2016",
        "Quotes": {
          "BM@T": 0.1951512931,
          "BMComputed@T": 0.19611934910040418,
          "BM@T-1": 0.195073805,
          "BMComputed@T-1": 0.19810257392319686,
          "Dealer.MS": 0.19454824999999998,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SPX_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.1991450827,
          "BMComputed@T": 0.19919465051031349,
          "BM@T-1": 0.1992965396,
          "BMComputed@T-1": 0.20074238711762235,
          "Dealer.MS": 0.1963586,
          "Dealer.SocGen": 0.19763000000000003,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.2002,
          "Dealer.HSBC": 0.196
        }
      },
      {
        "Name": "SPX_OCT16",
        "Maturity": "10/21/2016",
        "Quotes": {
          "BM@T": 0.2039578987,
          "BMComputed@T": 0.20439145373730555,
          "BM@T-1": 0.203578477,
          "BMComputed@T-1": 0.20595309969436718,
          "Dealer.MS": 0.20199019999999998,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SPX_NOV16",
        "Maturity": "11/18/2016",
        "Quotes": {
          "BM@T": 0.2075777723,
          "BMComputed@T": 0.20655412622629704,
          "BM@T-1": 0.2073255447,
          "BMComputed@T-1": 0.20791042876881097,
          "Dealer.MS": 0.20307635,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SPX_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2094824819,
          "BMComputed@T": 0.20824723070143331,
          "BM@T-1": 0.2093856502,
          "BMComputed@T-1": 0.20946083563929507,
          "Dealer.MS": 0.2055806,
          "Dealer.SocGen": 0.208929,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.2086,
          "Dealer.HSBC": 0.20599995
        }
      },
      {
        "Name": "SPX_JAN17",
        "Maturity": "1/20/2017",
        "Quotes": {
          "BM@T": 0.2115717468,
          "BMComputed@T": 0.21028837097014536,
          "BM@T-1": 0.2116779983,
          "BMComputed@T-1": 0.2115999080347517,
          "Dealer.MS": 0.20867595,
          "Dealer.SocGen": 0.210824,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SPX_FEB17",
        "Maturity": "2/17/2017",
        "Quotes": {
          "BM@T": 0.2138762032,
          "BMComputed@T": 0.21292086707667598,
          "BM@T-1": 0.2139502629,
          "BMComputed@T-1": 0.21419242094330818,
          "Dealer.MS": 0.2120397,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SPX_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2165813761,
          "BMComputed@T": 0.2150813112762387,
          "BM@T-1": 0.2166192649,
          "BMComputed@T-1": 0.21632309163405636,
          "Dealer.MS": 0.21533575,
          "Dealer.SocGen": 0.2154311,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.21300000000000002
        }
      },
      {
        "Name": "SPX_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2207273795,
          "BMComputed@T": 0.22067326271739882,
          "BM@T-1": 0.221007256,
          "BMComputed@T-1": 0.22201423136783013,
          "Dealer.MS": 0.21913965000000002,
          "Dealer.SocGen": 0.220258,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.218
        }
      },
      {
        "Name": "SPX_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.2256018299,
          "BMComputed@T": 0.224493766215315,
          "BM@T-1": 0.2246313123,
          "BMComputed@T-1": 0.22585538118546658,
          "Dealer.MS": 0.22240115,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SPX_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2275,
          "BMComputed@T": 0.22758659276721502,
          "BM@T-1": 0.2278341434,
          "BMComputed@T-1": 0.22899567505517598,
          "Dealer.MS": 0.2254488,
          "Dealer.SocGen": 0.22570010000000001,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.2254,
          "Dealer.HSBC": 0.22399989999999997
        }
      },
      {
        "Name": "SPX_JAN18",
        "Maturity": "1/19/2018",
        "Quotes": {
          "BM@T": 0.2297606015,
          "BMComputed@T": 0.22853977946998569,
          "BM@T-1": 0.2281281722,
          "BMComputed@T-1": 0.22993442416532925,
          "Dealer.MS": 0.2254063,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SPX_JUN18",
        "Maturity": "6/15/2018",
        "Quotes": {
          "BM@T": 0.2319150634,
          "BMComputed@T": 0.23233445451145177,
          "BM@T-1": 0.2313800134,
          "BMComputed@T-1": 0.23363462731393161,
          "Dealer.MS": 0.2303361,
          "Dealer.SocGen": 0.22930299999999998,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SPX_DEC18",
        "Maturity": "12/21/2018",
        "Quotes": {
          "BM@T": 0.2328979459,
          "BMComputed@T": 0.23616650592810631,
          "BM@T-1": 0.2334868345,
          "BMComputed@T-1": 0.2373480587164038,
          "Dealer.MS": 0.2320362,
          "Dealer.SocGen": 0.232171,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.2316,
          "Dealer.HSBC": 0.23199999999999998
        }
      },
      {
        "Name": "SPX_JUN19",
        "Maturity": "6/21/2019",
        "Quotes": {
          "BM@T": 0.2342785926,
          "BMComputed@T": 0.23786011587688682,
          "BM@T-1": 0.2349614423,
          "BMComputed@T-1": 0.239092989621278,
          "Dealer.MS": 0.2361876,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SPX_DEC19",
        "Maturity": "12/20/2019",
        "Quotes": {
          "BM@T": 0.2408736865,
          "BMComputed@T": 0.23949958817949996,
          "BM@T-1": 0.2416471507,
          "BMComputed@T-1": 0.24077754920360389,
          "Dealer.MS": 0.2392461,
          "Dealer.SocGen": 0.240593,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.24470000000000003,
          "Dealer.HSBC": 0.24
        }
      },
      {
        "Name": "SPX_DEC20",
        "Maturity": "12/18/2020",
        "Quotes": {
          "BM@T": 0.2482700161,
          "BMComputed@T": 0.24253741976084367,
          "BM@T-1": 0.2492219901,
          "BMComputed@T-1": 0.24386751306597829,
          "Dealer.MS": 0.25068345,
          "Dealer.SocGen": 0.24797200000000003,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.25439999999999996,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "SX5E",
    "Ticker": "EQI.SX5E",
    "Spot": 2924.23,
    "VolSurfaceTime": "4/11/2016 11:29:22 AM",
    "Observables": [
      {
        "Name": "SX5E_APR16",
        "Maturity": "4/15/2016",
        "Quotes": {
          "BM@T": 0.2495,
          "BMComputed@T": 0.21542318708678865,
          "BM@T-1": 0.2408999285,
          "BMComputed@T-1": 0.22736793188563134,
          "Dealer.MS": 0.22192530000000002,
          "Dealer.SocGen": 0.2777,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SX5E_MAY16",
        "Maturity": "5/20/2016",
        "Quotes": {
          "BM@T": 0.2504101539,
          "BMComputed@T": 0.23883564916977218,
          "BM@T-1": 0.2562094368,
          "BMComputed@T-1": 0.24464397550139658,
          "Dealer.MS": 0.25477815,
          "Dealer.SocGen": 0.2464,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SX5E_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.2610670676,
          "BMComputed@T": 0.24993262684868936,
          "BM@T-1": 0.2636943047,
          "BMComputed@T-1": 0.2525719484912114,
          "Dealer.MS": 0.26458585,
          "Dealer.SocGen": 0.2585,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.26899989999999996
        }
      },
      {
        "Name": "SX5E_JUL16",
        "Maturity": "7/15/2016",
        "Quotes": {
          "BM@T": 0.2706301567,
          "BMComputed@T": 0.2556141745708374,
          "BM@T-1": 0.2717986717,
          "BMComputed@T-1": 0.25679433333217605,
          "Dealer.MS": 0.27200674999999996,
          "Dealer.SocGen": 0.2669,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SX5E_AUG16",
        "Maturity": "8/19/2016",
        "Quotes": {
          "BM@T": 0.2753730479,
          "BMComputed@T": 0.26002902758732327,
          "BM@T-1": 0.2754952153,
          "BMComputed@T-1": 0.26016198477239311,
          "Dealer.MS": 0.2762288,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SX5E_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2774626715,
          "BMComputed@T": 0.26259502735262846,
          "BM@T-1": 0.2773523168,
          "BMComputed@T-1": 0.26249486932534605,
          "Dealer.MS": 0.27577435,
          "Dealer.SocGen": 0.276,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.281
        }
      },
      {
        "Name": "SX5E_OCT16",
        "Maturity": "10/21/2016",
        "Quotes": {
          "BM@T": 0.2777549917,
          "BMComputed@T": 0.26439744873042964,
          "BM@T-1": 0.2775216503,
          "BMComputed@T-1": 0.2641749264733963,
          "Dealer.MS": 0.27733775,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SX5E_NOV16",
        "Maturity": "11/18/2016",
        "Quotes": {
          "BM@T": 0.2774303505,
          "BMComputed@T": 0.26468812882559117,
          "BM@T-1": 0.2769732296,
          "BMComputed@T-1": 0.26424257415447794,
          "Dealer.MS": 0.27760609999999997,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SX5E_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.27690352,
          "BMComputed@T": 0.26511473857497575,
          "BM@T-1": 0.2762094617,
          "BMComputed@T-1": 0.26443252456218158,
          "Dealer.MS": 0.2760065,
          "Dealer.SocGen": 0.2795,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.28300005000000006
        }
      },
      {
        "Name": "SX5E_JAN17",
        "Maturity": "1/20/2017",
        "Quotes": {
          "BM@T": 0.2749021281,
          "BMComputed@T": 0.26600096016675179,
          "BM@T-1": 0.2734973363,
          "BMComputed@T-1": 0.26460715425586923,
          "Dealer.MS": 0.2749301,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SX5E_FEB17",
        "Maturity": "2/17/2017",
        "Quotes": {
          "BM@T": 0.2759110805,
          "BMComputed@T": 0.26622243103603122,
          "BM@T-1": 0.274,
          "BMComputed@T-1": 0.26432101234791178,
          "Dealer.MS": 0.2758446,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SX5E_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2760591049,
          "BMComputed@T": 0.26640940183089595,
          "BM@T-1": 0.2745,
          "BMComputed@T-1": 0.26486014234940436,
          "Dealer.MS": 0.27548700000000004,
          "Dealer.SocGen": 0.2738,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.282
        }
      },
      {
        "Name": "SX5E_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2733695859,
          "BMComputed@T": 0.26788893898974814,
          "BM@T-1": 0.275,
          "BMComputed@T-1": 0.26950986123333959,
          "Dealer.MS": 0.2769783,
          "Dealer.SocGen": 0.27749999999999997,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.28
        }
      },
      {
        "Name": "SX5E_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.2750581091,
          "BMComputed@T": 0.26774847977997085,
          "BM@T-1": 0.275,
          "BMComputed@T-1": 0.26768006399820043,
          "Dealer.MS": 0.27759480000000003,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SX5E_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2771252104,
          "BMComputed@T": 0.26548271557563941,
          "BM@T-1": 0.2754277369,
          "BMComputed@T-1": 0.26377203755719103,
          "Dealer.MS": 0.2756165,
          "Dealer.SocGen": 0.27659999999999996,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.28
        }
      },
      {
        "Name": "SX5E_JUN18",
        "Maturity": "6/15/2018",
        "Quotes": {
          "BM@T": 0.2758565337,
          "BMComputed@T": 0.26097067767919241,
          "BM@T-1": 0.2775,
          "BMComputed@T-1": 0.2626038474923082,
          "Dealer.MS": 0.2769815,
          "Dealer.SocGen": 0.2751,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SX5E_DEC18",
        "Maturity": "12/21/2018",
        "Quotes": {
          "BM@T": 0.2840892447,
          "BMComputed@T": 0.26418204087929686,
          "BM@T-1": 0.2783827714,
          "BMComputed@T-1": 0.25845885046643363,
          "Dealer.MS": 0.27939654999999997,
          "Dealer.SocGen": 0.2796,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.284
        }
      },
      {
        "Name": "SX5E_JUN19",
        "Maturity": "6/21/2019",
        "Quotes": {
          "BM@T": 0.2876184625,
          "BMComputed@T": 0.2664539044397351,
          "BM@T-1": 0.2816795006,
          "BMComputed@T-1": 0.26050767122096419,
          "Dealer.MS": 0.28393615,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SX5E_DEC19",
        "Maturity": "12/20/2019",
        "Quotes": {
          "BM@T": 0.293014552,
          "BMComputed@T": 0.26878764783504649,
          "BM@T-1": 0.286809472,
          "BMComputed@T-1": 0.26257491484894319,
          "Dealer.MS": 0.28928095,
          "Dealer.SocGen": 0.288,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.292
        }
      },
      {
        "Name": "SX5E_DEC20",
        "Maturity": "12/18/2020",
        "Quotes": {
          "BM@T": 0.2982814801,
          "BMComputed@T": 0.27316229548039994,
          "BM@T-1": 0.2915632747,
          "BMComputed@T-1": 0.2664607394846652,
          "Dealer.MS": 0.2942374,
          "Dealer.SocGen": 0.2965,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "SX7E",
    "Ticker": "EQI.SX7E",
    "Spot": 97.76,
    "VolSurfaceTime": "4/11/2016 11:29:13 AM",
    "Observables": [
      {
        "Name": "SX7E_APR16",
        "Maturity": "4/15/2016",
        "Quotes": {
          "BM@T": 0.3944612992,
          "BMComputed@T": 0.40381074988564497,
          "BM@T-1": 0.3940308154,
          "BMComputed@T-1": 0.40338026535869348,
          "Dealer.MS": 0.0,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "SX7E_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.395120116,
          "BMComputed@T": 0.40483477529175593,
          "BM@T-1": 0.3916690508,
          "BMComputed@T-1": 0.40138439480434673,
          "Dealer.MS": 0.0,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "TPX",
    "Ticker": "EQI.TPX",
    "Spot": 1279.79,
    "VolSurfaceTime": "4/11/2016 3:15:00 PM",
    "Observables": [
      {
        "Name": "TPX_APR16",
        "Maturity": "4/8/2016",
        "Quotes": {
          "BM@T": 0.2691,
          "BMComputed@T": 0.0,
          "BM@T-1": 0.271,
          "BMComputed@T-1": "NaN",
          "Dealer.MS": 0.2200149,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_JUN16",
        "Maturity": "6/10/2016",
        "Quotes": {
          "BM@T": 0.2749,
          "BMComputed@T": 0.27886168767288688,
          "BM@T-1": 0.2792758755,
          "BMComputed@T-1": 0.28468470929783463,
          "Dealer.MS": 0.29457710000000004,
          "Dealer.SocGen": 0.28695884252603604,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_SEP16",
        "Maturity": "9/9/2016",
        "Quotes": {
          "BM@T": 0.2727,
          "BMComputed@T": 0.28205998574811642,
          "BM@T-1": 0.2772766233,
          "BMComputed@T-1": 0.28571083744402409,
          "Dealer.MS": 0.283388,
          "Dealer.SocGen": 0.285665930414209,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_DEC16",
        "Maturity": "12/9/2016",
        "Quotes": {
          "BM@T": 0.2762,
          "BMComputed@T": 0.28670516854158518,
          "BM@T-1": 0.2808554882,
          "BMComputed@T-1": 0.288146094915701,
          "Dealer.MS": 0.2904858,
          "Dealer.SocGen": 0.286682407189136,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_JAN17",
        "Maturity": "1/13/2017",
        "Quotes": {
          "BM@T": 0.2857,
          "BMComputed@T": 0.28828898300539574,
          "BM@T-1": 0.2875151976,
          "BMComputed@T-1": 0.28925184173593571,
          "Dealer.MS": 0.29269685,
          "Dealer.SocGen": 0.28622074094475,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_MAR17",
        "Maturity": "3/10/2017",
        "Quotes": {
          "BM@T": 0.2892,
          "BMComputed@T": 0.29247252531066248,
          "BM@T-1": 0.2894078312,
          "BMComputed@T-1": 0.29429079075722409,
          "Dealer.MS": 0.29363724999999996,
          "Dealer.SocGen": 0.285906490674472,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_JUN17",
        "Maturity": "6/9/2017",
        "Quotes": {
          "BM@T": 0.2846,
          "BMComputed@T": 0.29411987685799745,
          "BM@T-1": 0.2822225409,
          "BMComputed@T-1": 0.29527385995488631,
          "Dealer.MS": 0.29083515,
          "Dealer.SocGen": 0.285608224084874,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_SEP17",
        "Maturity": "9/8/2017",
        "Quotes": {
          "BM@T": 0.2825,
          "BMComputed@T": 0.29344379329242737,
          "BM@T-1": 0.2832829416,
          "BMComputed@T-1": 0.29371091922558989,
          "Dealer.MS": 0.2881377,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_DEC17",
        "Maturity": "12/8/2017",
        "Quotes": {
          "BM@T": 0.2822,
          "BMComputed@T": 0.29245643137583266,
          "BM@T-1": 0.2823329025,
          "BMComputed@T-1": 0.29221146255716796,
          "Dealer.MS": 0.28950295000000004,
          "Dealer.SocGen": 0.283937000008133,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_JUN18",
        "Maturity": "6/8/2018",
        "Quotes": {
          "BM@T": 0.2819,
          "BMComputed@T": 0.29297224339589006,
          "BM@T-1": 0.282,
          "BMComputed@T-1": 0.29267526828482954,
          "Dealer.MS": 0.2891033,
          "Dealer.SocGen": 0.278516892137568,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_DEC18",
        "Maturity": "12/14/2018",
        "Quotes": {
          "BM@T": 0.2801,
          "BMComputed@T": 0.293158269724666,
          "BM@T-1": 0.2800331077,
          "BMComputed@T-1": 0.29288148911008283,
          "Dealer.MS": 0.2909219,
          "Dealer.SocGen": 0.276520512746362,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_JUN19",
        "Maturity": "6/14/2019",
        "Quotes": {
          "BM@T": 0.2793,
          "BMComputed@T": 0.29435758051377281,
          "BM@T-1": 0.2793451569,
          "BMComputed@T-1": 0.29376727096474725,
          "Dealer.MS": 0.2883124,
          "Dealer.SocGen": 0.274201521721057,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_DEC19",
        "Maturity": "12/13/2019",
        "Quotes": {
          "BM@T": 0.2776,
          "BMComputed@T": 0.29546476048979264,
          "BM@T-1": 0.2776,
          "BMComputed@T-1": 0.29447610201581975,
          "Dealer.MS": 0.28773815,
          "Dealer.SocGen": 0.270744168431808,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TPX_DEC20",
        "Maturity": "12/11/2020",
        "Quotes": {
          "BM@T": 0.2733,
          "BMComputed@T": 0.29674810101642957,
          "BM@T-1": 0.2733,
          "BMComputed@T-1": 0.29569722207845434,
          "Dealer.MS": 0.28526665,
          "Dealer.SocGen": 0.26861904135083103,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "TWSE",
    "Ticker": "EQI.TWSE",
    "Spot": 8562.59,
    "VolSurfaceTime": "4/11/2016 1:45:00 PM",
    "Observables": [
      {
        "Name": "TWSE_JUN16",
        "Maturity": "6/15/2016",
        "Quotes": {
          "BM@T": 0.1772850147,
          "BMComputed@T": 0.18177925048032209,
          "BM@T-1": 0.1790941646,
          "BMComputed@T-1": 0.18358840036508384,
          "Dealer.MS": 0.17917705,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TWSE_SEP16",
        "Maturity": "9/21/2016",
        "Quotes": {
          "BM@T": 0.1984788726,
          "BMComputed@T": 0.19751353261619686,
          "BM@T-1": 0.1996400267,
          "BMComputed@T-1": 0.19864870453225458,
          "Dealer.MS": 0.20256975,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TWSE_DEC16",
        "Maturity": "12/21/2016",
        "Quotes": {
          "BM@T": 0.2129745682,
          "BMComputed@T": 0.1994086240619668,
          "BM@T-1": 0.2138191781,
          "BMComputed@T-1": 0.20023854392297266,
          "Dealer.MS": 0.21586135,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "TWSE_MAR17",
        "Maturity": "3/15/2017",
        "Quotes": {
          "BM@T": 0.2216369312,
          "BMComputed@T": 0.20112401550143319,
          "BM@T-1": 0.2223592898,
          "BMComputed@T-1": 0.20184637409611017,
          "Dealer.MS": 0.21994929999999996,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  },
  {
    "Index": "UKX",
    "Ticker": "EQI.UKX",
    "Spot": 6200.12,
    "VolSurfaceTime": "4/11/2016 11:37:25 AM",
    "Observables": [
      {
        "Name": "UKX_APR16",
        "Maturity": "4/15/2016",
        "Quotes": {
          "BM@T": 0.1557773574,
          "BMComputed@T": 0.1461393534342823,
          "BM@T-1": 0.1633295757,
          "BMComputed@T-1": 0.15369157171504788,
          "Dealer.MS": 0.16003825,
          "Dealer.SocGen": 0.2314,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "UKX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1955274992,
          "BMComputed@T": 0.18309407428188529,
          "BM@T-1": 0.1997365043,
          "BMComputed@T-1": 0.18731134427391571,
          "Dealer.MS": 0.1922507,
          "Dealer.SocGen": 0.1911,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.2
        }
      },
      {
        "Name": "UKX_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2307815507,
          "BMComputed@T": 0.2190885227676907,
          "BM@T-1": 0.2327780402,
          "BMComputed@T-1": 0.22109802205442364,
          "Dealer.MS": 0.2285897,
          "Dealer.SocGen": 0.2239,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.23399999999999999
        }
      },
      {
        "Name": "UKX_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2303502547,
          "BMComputed@T": 0.21602421764166455,
          "BM@T-1": 0.2323351322,
          "BMComputed@T-1": 0.21802389102272715,
          "Dealer.MS": 0.22605275,
          "Dealer.SocGen": 0.2247,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.22699995
        }
      },
      {
        "Name": "UKX_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.228,
          "BMComputed@T": 0.261978164421729,
          "BM@T-1": 0.2498627017,
          "BMComputed@T-1": 0.22908192567876776,
          "Dealer.MS": 0.22871314999999998,
          "Dealer.SocGen": 0.22440000000000002,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.22899989999999998
        }
      },
      {
        "Name": "UKX_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2298411503,
          "BMComputed@T": 0.21795799108505681,
          "BM@T-1": 0.2424182361,
          "BMComputed@T-1": 0.23054046873949249,
          "Dealer.MS": 0.22957535,
          "Dealer.SocGen": 0.22549999999999998,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.22999999999999998
        }
      },
      {
        "Name": "UKX_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.2297898201,
          "BMComputed@T": 0.21923141515652511,
          "BM@T-1": 0.2425,
          "BMComputed@T-1": 0.23194634297239283,
          "Dealer.MS": 0.23097045,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "UKX_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.231856503,
          "BMComputed@T": 0.2221280878018424,
          "BM@T-1": 0.2430028355,
          "BMComputed@T-1": 0.23327853752036196,
          "Dealer.MS": 0.23164655,
          "Dealer.SocGen": 0.23249999999999998,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.23399989999999998
        }
      },
      {
        "Name": "UKX_JUN18",
        "Maturity": "6/15/2018",
        "Quotes": {
          "BM@T": 0.2356609307,
          "BMComputed@T": 0.22364620517031508,
          "BM@T-1": 0.24761281,
          "BMComputed@T-1": 0.23560103919041286,
          "Dealer.MS": 0.23653525,
          "Dealer.SocGen": 0.2395,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "UKX_DEC18",
        "Maturity": "12/21/2018",
        "Quotes": {
          "BM@T": 0.2378609362,
          "BMComputed@T": 0.22516201885821233,
          "BM@T-1": 0.2506263806,
          "BMComputed@T-1": 0.23792918490439782,
          "Dealer.MS": 0.24137925,
          "Dealer.SocGen": 0.2439,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.243
        }
      },
      {
        "Name": "UKX_JUN19",
        "Maturity": "6/21/2019",
        "Quotes": {
          "BM@T": 0.24,
          "BMComputed@T": 0.22645529341944096,
          "BM@T-1": 0.2535,
          "BMComputed@T-1": 0.23993776581048804,
          "Dealer.MS": 0.24672424999999998,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "UKX_DEC19",
        "Maturity": "12/20/2019",
        "Quotes": {
          "BM@T": 0.24282431,
          "BMComputed@T": 0.22773348816636149,
          "BM@T-1": 0.2570398044,
          "BMComputed@T-1": 0.24194862537774878,
          "Dealer.MS": 0.24990215,
          "Dealer.SocGen": 0.2484,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.249
        }
      }
    ]
  },
  {
    "Index": "USDJPY",
    "Ticker": "FX.USD.JPY",
    "Spot": 107.94,
    "VolSurfaceTime": "4/11/2016 4:00:00 PM",
    "Observables": [
      {
        "Name": "USDJPY_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.137981292,
          "BMComputed@T": 0.12493291367430204,
          "BM@T-1": 0.137981292,
          "BMComputed@T-1": 0.12257759488217841,
          "Dealer.MS": 0.0,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      },
      {
        "Name": "USDJPY_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.1389584297,
          "BMComputed@T": 0.12961532719818311,
          "BM@T-1": 0.1389584297,
          "BMComputed@T-1": 0.12804260492213848,
          "Dealer.MS": 0.0,
          "Dealer.SocGen": 0.0,
          "Dealer.JPM": 0.0,
          "Dealer.ML": 0.0,
          "Dealer.HSBC": 0.0
        }
      }
    ]
  }
]//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
;


} );
