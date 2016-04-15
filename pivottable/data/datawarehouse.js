angular.module('dataWarehouse',['utilities'])
.service("dataWarehouse", function($http,utils) { 

var $ = window.$;
utils.log("Initializing datawareHouse service");

function getAjaxData(successFn,errorFn, mode, date, withMetaData) {
    var url = { 'ajaxfull' : 'http://localhost:17041/services/DBAccessor.asmx/RetrieveVolSurfaces',
      'ajax' : 'data/volsurfaces.json',
      'ajaxASP': '../../Blink/EquityVol.asmx/RetrieveVolSurfaces?date=' + date +"&withMetaData=" + withMetaData }[mode];

    var method = mode === 'ajaxfull' ? 'post' : 'get';
    var req = { method: method, url: url };
    utils.log("Making Ajax request {0}", req);
    $http(req).then(successFn, errorFn);
}

return { 

    getAjaxData : getAjaxData,
    dataFn: () => 

({

  '2016-04-12' : 

[
  {
    "Index": "AS51",
    "Ticker": "EQI.AS51",
    "Spot": 4975.646,
    "VolSurfaceTime": "4/12/2016 4:00:00 PM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "e252ca83-c4a1-4713-9648-9026d463a1e3",
        "MachineName": "BC416",
        "ProcessId": 72380,
        "CommandLine": "D:\\dev\\p4v\\src\\miniapp\\bin\\x64\\Debug\\\\MiniApp.exe VarSwapCatalog runname=SocGenAsia save date=2016-4-12",
        "Description": "[VarSwapSocGen] Saving 108 points imported from Dealer run from SocGen 'AsiaRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\AsianVariance\\2016-04-12\\OutlookAttachment-SG-Asia-Equity-Derivatives@sgcib.com-20160412_044154-Bluemountain Run.xlsx]",
        "KnowledgeTime": "2016-04-12T12:58:29.950249+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "bc545ffb-c286-4c61-97a9-7df8387196a9",
        "MachineName": "EDFARM181",
        "ProcessId": 53412,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-12 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T20:25:38.4085453+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "AS51_JUN16",
        "Maturity": "6/16/2016",
        "Quotes": {
          "BM@T": 0.2016404946,
          "BMComputed@T": 0.19472987507498915,
          "BM@T-1": 0.2080661323,
          "BMComputed@T-1": 0.20123462137570489,
          "Dealer.ms": 0.20076354999999999,
          "Dealer.socgen": 0.20403498690451102,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.203
        }
      },
      {
        "Name": "AS51_SEP16",
        "Maturity": "9/15/2016",
        "Quotes": {
          "BM@T": 0.2117154462,
          "BMComputed@T": 0.20707958318626618,
          "BM@T-1": 0.2157224894,
          "BMComputed@T-1": 0.21110980256201056,
          "Dealer.ms": 0.21285969999999999,
          "Dealer.socgen": 0.21598549922260699,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.214
        }
      },
      {
        "Name": "AS51_DEC16",
        "Maturity": "12/15/2016",
        "Quotes": {
          "BM@T": 0.2162702212,
          "BMComputed@T": 0.21111627116980558,
          "BM@T-1": 0.2205127531,
          "BMComputed@T-1": 0.21537767209617514,
          "Dealer.ms": 0.21459145,
          "Dealer.socgen": 0.21997392064225602,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.217
        }
      },
      {
        "Name": "AS51_MAR17",
        "Maturity": "3/16/2017",
        "Quotes": {
          "BM@T": 0.2198596506,
          "BMComputed@T": 0.21341334886036742,
          "BM@T-1": 0.2225816457,
          "BMComputed@T-1": 0.21615817853545116,
          "Dealer.ms": 0.21837265,
          "Dealer.socgen": 0.223602526258793,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.21899999999999997
        }
      },
      {
        "Name": "AS51_JUN17",
        "Maturity": "6/15/2017",
        "Quotes": {
          "BM@T": 0.2232222403,
          "BMComputed@T": 0.21648661936659178,
          "BM@T-1": 0.2256862606,
          "BMComputed@T-1": 0.21896303516918211,
          "Dealer.ms": 0.2201725,
          "Dealer.socgen": 0.226940908100062,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22199999999999998
        }
      },
      {
        "Name": "AS51_DEC17",
        "Maturity": "12/21/2017",
        "Quotes": {
          "BM@T": 0.2249987614,
          "BMComputed@T": 0.22074433303679716,
          "BM@T-1": 0.2272257613,
          "BMComputed@T-1": 0.22297315789731106,
          "Dealer.ms": 0.2240079,
          "Dealer.socgen": 0.22995671384152502,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22600000000000003
        }
      }
    ]
  },
  {
    "Index": "HSI",
    "Ticker": "EQI.HSI",
    "Spot": 20504.44,
    "VolSurfaceTime": "4/12/2016 4:00:00 PM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "e252ca83-c4a1-4713-9648-9026d463a1e3",
        "MachineName": "BC416",
        "ProcessId": 72380,
        "CommandLine": "D:\\dev\\p4v\\src\\miniapp\\bin\\x64\\Debug\\\\MiniApp.exe VarSwapCatalog runname=SocGenAsia save date=2016-4-12",
        "Description": "[VarSwapSocGen] Saving 108 points imported from Dealer run from SocGen 'AsiaRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\AsianVariance\\2016-04-12\\OutlookAttachment-SG-Asia-Equity-Derivatives@sgcib.com-20160412_044154-Bluemountain Run.xlsx]",
        "KnowledgeTime": "2016-04-12T12:58:29.950249+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "bc545ffb-c286-4c61-97a9-7df8387196a9",
        "MachineName": "EDFARM181",
        "ProcessId": 53412,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-12 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T20:25:38.4085453+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "HSI_APR16",
        "Maturity": "4/28/2016",
        "Quotes": {
          "BM@T": 0.2152996771,
          "BMComputed@T": 0.18009202312852202,
          "BM@T-1": 0.2246980896,
          "BMComputed@T-1": 0.18949043564932219,
          "Dealer.ms": 0,
          "Dealer.socgen": 0.19048104394548201,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "HSI_JUN16",
        "Maturity": "6/29/2016",
        "Quotes": {
          "BM@T": 0.2288244127,
          "BMComputed@T": 0.22241413431569829,
          "BM@T-1": 0.2323724191,
          "BMComputed@T-1": 0.22596233193858475,
          "Dealer.ms": 0.2250457,
          "Dealer.socgen": 0.22861798951058301,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22699999999999998
        }
      },
      {
        "Name": "HSI_SEP16",
        "Maturity": "9/29/2016",
        "Quotes": {
          "BM@T": 0.2471088724,
          "BMComputed@T": 0.24017058030330329,
          "BM@T-1": 0.249882734,
          "BMComputed@T-1": 0.24294484971059757,
          "Dealer.ms": 0.24972455,
          "Dealer.socgen": 0.246781385943284,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.245
        }
      },
      {
        "Name": "HSI_DEC16",
        "Maturity": "12/29/2016",
        "Quotes": {
          "BM@T": 0.2576921437,
          "BMComputed@T": 0.25113036516466547,
          "BM@T-1": 0.2600969791,
          "BMComputed@T-1": 0.25353579280516481,
          "Dealer.ms": 0.2610183,
          "Dealer.socgen": 0.258864146791484,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.255
        }
      },
      {
        "Name": "HSI_MAR17",
        "Maturity": "3/30/2017",
        "Quotes": {
          "BM@T": 0.2631068099,
          "BMComputed@T": 0.25690859242782926,
          "BM@T-1": 0.2654823714,
          "BMComputed@T-1": 0.25928515221227694,
          "Dealer.ms": 0.26714699999999997,
          "Dealer.socgen": 0.270161763040169,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.263
        }
      },
      {
        "Name": "HSI_JUN17",
        "Maturity": "6/29/2017",
        "Quotes": {
          "BM@T": 0.2681863366,
          "BMComputed@T": 0.265747167595986,
          "BM@T-1": 0.2707074704,
          "BMComputed@T-1": 0.26823350525874035,
          "Dealer.ms": 0.2726387,
          "Dealer.socgen": 0.275403864124476,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.268
        }
      },
      {
        "Name": "HSI_DEC17",
        "Maturity": "12/28/2017",
        "Quotes": {
          "BM@T": 0.2768608302,
          "BMComputed@T": 0.276825609480932,
          "BM@T-1": 0.2789580559,
          "BMComputed@T-1": 0.27889231851463875,
          "Dealer.ms": 0.28160430000000003,
          "Dealer.socgen": 0.28482401746384,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.27799999999999997
        }
      },
      {
        "Name": "HSI_MAR18",
        "Maturity": "3/28/2018",
        "Quotes": {
          "BM@T": 0.2783510804,
          "BMComputed@T": 0.28158884784488064,
          "BM@T-1": 0.280228598,
          "BMComputed@T-1": 0.28343853506027095,
          "Dealer.ms": 0.28784604999999996,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "KOSPI2",
    "Ticker": "EQI.KOSPI2",
    "Spot": 243.71,
    "VolSurfaceTime": "4/12/2016 3:15:00 PM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "e252ca83-c4a1-4713-9648-9026d463a1e3",
        "MachineName": "BC416",
        "ProcessId": 72380,
        "CommandLine": "D:\\dev\\p4v\\src\\miniapp\\bin\\x64\\Debug\\\\MiniApp.exe VarSwapCatalog runname=SocGenAsia save date=2016-4-12",
        "Description": "[VarSwapSocGen] Saving 108 points imported from Dealer run from SocGen 'AsiaRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\AsianVariance\\2016-04-12\\OutlookAttachment-SG-Asia-Equity-Derivatives@sgcib.com-20160412_044154-Bluemountain Run.xlsx]",
        "KnowledgeTime": "2016-04-12T12:58:29.950249+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "bc545ffb-c286-4c61-97a9-7df8387196a9",
        "MachineName": "EDFARM181",
        "ProcessId": 53412,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-12 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T20:25:38.4085453+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "KOSPI2_JUN16",
        "Maturity": "6/9/2016",
        "Quotes": {
          "BM@T": 0.1497606373,
          "BMComputed@T": 0.14326332182564691,
          "BM@T-1": 0.1564117114,
          "BMComputed@T-1": 0.1499143959103271,
          "Dealer.ms": 0.14748325,
          "Dealer.socgen": 0.148987342144769,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.14
        }
      },
      {
        "Name": "KOSPI2_SEP16",
        "Maturity": "9/8/2016",
        "Quotes": {
          "BM@T": 0.177217322,
          "BMComputed@T": 0.175501841316281,
          "BM@T-1": 0.1812877767,
          "BMComputed@T-1": 0.17957229602044011,
          "Dealer.ms": 0.17207995,
          "Dealer.socgen": 0.174004515594019,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.171
        }
      },
      {
        "Name": "KOSPI2_DEC16",
        "Maturity": "12/8/2016",
        "Quotes": {
          "BM@T": 0.1932116817,
          "BMComputed@T": 0.18446105832748211,
          "BM@T-1": 0.1964000975,
          "BMComputed@T-1": 0.18764947413476524,
          "Dealer.ms": 0.18792775,
          "Dealer.socgen": 0.188364187061794,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.18799995
        }
      },
      {
        "Name": "KOSPI2_MAR17",
        "Maturity": "3/9/2017",
        "Quotes": {
          "BM@T": 0.1985305049,
          "BMComputed@T": 0.18998191972508302,
          "BM@T-1": 0.2015155072,
          "BMComputed@T-1": 0.19296692202535129,
          "Dealer.ms": 0.19554305,
          "Dealer.socgen": 0.19727427465858502,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.19799999999999998
        }
      },
      {
        "Name": "KOSPI2_JUN17",
        "Maturity": "6/8/2017",
        "Quotes": {
          "BM@T": 0.2062623949,
          "BMComputed@T": 0.19402777451607411,
          "BM@T-1": 0.209042895,
          "BMComputed@T-1": 0.19680827464253309,
          "Dealer.ms": 0.20248535,
          "Dealer.socgen": 0.205490529582578,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.20400000000000001
        }
      },
      {
        "Name": "KOSPI2_DEC17",
        "Maturity": "12/14/2017",
        "Quotes": {
          "BM@T": 0.2174759951,
          "BMComputed@T": 0.19899297298085034,
          "BM@T-1": 0.2199681719,
          "BMComputed@T-1": 0.20148514980857038,
          "Dealer.ms": 0.21216639999999998,
          "Dealer.socgen": 0.21512716012348101,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.21200005
        }
      }
    ]
  },
  {
    "Index": "SPX",
    "Ticker": "EQI.SPX",
    "Spot": 2061.72,
    "VolSurfaceTime": "4/12/2016 4:14:52 PM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.4089418+00:00",
        "UserName": "jhorowitz"
      },
      "ml": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.9599969+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "bc545ffb-c286-4c61-97a9-7df8387196a9",
        "MachineName": "EDFARM181",
        "ProcessId": 53412,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-12 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T20:25:38.4085453+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "SPX_APR16",
        "Maturity": "4/15/2016",
        "Quotes": {
          "BM@T": 0.1051258185,
          "BMComputed@T": 0.11228149454915366,
          "BM@T-1": 0.1171,
          "BMComputed@T-1": 0.12175820291668212,
          "Dealer.ms": 0.10524525000000001,
          "Dealer.socgen": 0.115648,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_MAY16",
        "Maturity": "5/20/2016",
        "Quotes": {
          "BM@T": 0.1481728539,
          "BMComputed@T": 0.14932152890650546,
          "BM@T-1": 0.1594,
          "BMComputed@T-1": 0.158726039276343,
          "Dealer.ms": 0.1497847,
          "Dealer.socgen": 0.148924,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.171,
          "BMComputed@T": 0.17045922425613103,
          "BM@T-1": 0.179,
          "BMComputed@T-1": 0.17557648123617567,
          "Dealer.ms": 0.17196809999999998,
          "Dealer.socgen": 0.168409,
          "Dealer.ml": 0.17129999999999998,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.178
        }
      },
      {
        "Name": "SPX_JUL16",
        "Maturity": "7/15/2016",
        "Quotes": {
          "BM@T": 0.1828362728,
          "BMComputed@T": 0.18247455947661173,
          "BM@T-1": 0.1886509361,
          "BMComputed@T-1": 0.18701453018147632,
          "Dealer.ms": 0.18357655,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_AUG16",
        "Maturity": "8/19/2016",
        "Quotes": {
          "BM@T": 0.1890437932,
          "BMComputed@T": 0.19112838819761285,
          "BM@T-1": 0.1951512931,
          "BMComputed@T-1": 0.19611934910040418,
          "Dealer.ms": 0.19084469999999998,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.1941883109,
          "BMComputed@T": 0.19526478705372674,
          "BM@T-1": 0.1991450827,
          "BMComputed@T-1": 0.19919465051031349,
          "Dealer.ms": 0.195631,
          "Dealer.socgen": 0.19406009999999999,
          "Dealer.ml": 0.1973,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.2
        }
      },
      {
        "Name": "SPX_OCT16",
        "Maturity": "10/21/2016",
        "Quotes": {
          "BM@T": 0.1990320273,
          "BMComputed@T": 0.2003725923517625,
          "BM@T-1": 0.2039578987,
          "BMComputed@T-1": 0.20439145373730555,
          "Dealer.ms": 0.19767374999999998,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_NOV16",
        "Maturity": "11/18/2016",
        "Quotes": {
          "BM@T": 0.2030170994,
          "BMComputed@T": 0.20284131115750692,
          "BM@T-1": 0.2075777723,
          "BMComputed@T-1": 0.20655412622629704,
          "Dealer.ms": 0.2017174,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2051835331,
          "BMComputed@T": 0.20475020041050995,
          "BM@T-1": 0.2094824819,
          "BMComputed@T-1": 0.20824723070143331,
          "Dealer.ms": 0.2039801,
          "Dealer.socgen": 0.205656,
          "Dealer.ml": 0.2062,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.20900000000000002
        }
      },
      {
        "Name": "SPX_JAN17",
        "Maturity": "1/20/2017",
        "Quotes": {
          "BM@T": 0.2077108501,
          "BMComputed@T": 0.20718065694593563,
          "BM@T-1": 0.2115717468,
          "BMComputed@T-1": 0.21028837097014536,
          "Dealer.ms": 0.20667495000000002,
          "Dealer.socgen": 0.207401,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_FEB17",
        "Maturity": "2/17/2017",
        "Quotes": {
          "BM@T": 0.2098371707,
          "BMComputed@T": 0.20958586927049788,
          "BM@T-1": 0.2138762032,
          "BMComputed@T-1": 0.21292086707667598,
          "Dealer.ms": 0.20778685,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2124080149,
          "BMComputed@T": 0.2115733093546717,
          "BM@T-1": 0.2165813761,
          "BMComputed@T-1": 0.2150813112762387,
          "Dealer.ms": 0.212108,
          "Dealer.socgen": 0.21210400000000001,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.21600000000000003
        }
      },
      {
        "Name": "SPX_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2169177638,
          "BMComputed@T": 0.21746857901138003,
          "BM@T-1": 0.2207273795,
          "BMComputed@T-1": 0.22067326271739882,
          "Dealer.ms": 0.2165647,
          "Dealer.socgen": 0.21684799999999999,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22100000000000003
        }
      },
      {
        "Name": "SPX_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.2216776799,
          "BMComputed@T": 0.22113166798720749,
          "BM@T-1": 0.2256018299,
          "BMComputed@T-1": 0.224493766215315,
          "Dealer.ms": 0.220269,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2235595797,
          "BMComputed@T": 0.2241710164854106,
          "BM@T-1": 0.2275,
          "BMComputed@T-1": 0.22758659276721502,
          "Dealer.ms": 0.2227314,
          "Dealer.socgen": 0.222563,
          "Dealer.ml": 0.2234,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.225
        }
      },
      {
        "Name": "SPX_JAN18",
        "Maturity": "1/19/2018",
        "Quotes": {
          "BM@T": 0.2256891353,
          "BMComputed@T": 0.22497836348606193,
          "BM@T-1": 0.2297606015,
          "BMComputed@T-1": 0.22853977946998569,
          "Dealer.ms": 0.22610449999999999,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_JUN18",
        "Maturity": "6/15/2018",
        "Quotes": {
          "BM@T": 0.2272907575,
          "BMComputed@T": 0.22816484457097166,
          "BM@T-1": 0.2319150634,
          "BMComputed@T-1": 0.23233445451145177,
          "Dealer.ms": 0.22795540000000003,
          "Dealer.socgen": 0.22627,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_DEC18",
        "Maturity": "12/21/2018",
        "Quotes": {
          "BM@T": 0.2276824453,
          "BMComputed@T": 0.23135555514375902,
          "BM@T-1": 0.2328979459,
          "BMComputed@T-1": 0.23616650592810631,
          "Dealer.ms": 0.23133015,
          "Dealer.socgen": 0.229213,
          "Dealer.ml": 0.2294,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.233
        }
      },
      {
        "Name": "SPX_JUN19",
        "Maturity": "6/21/2019",
        "Quotes": {
          "BM@T": 0.2289640801,
          "BMComputed@T": 0.23292510159236812,
          "BM@T-1": 0.2342785926,
          "BMComputed@T-1": 0.23786011587688682,
          "Dealer.ms": 0.2349608,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_DEC19",
        "Maturity": "12/20/2019",
        "Quotes": {
          "BM@T": 0.2354577473,
          "BMComputed@T": 0.23444644054055605,
          "BM@T-1": 0.2408736865,
          "BMComputed@T-1": 0.23949958817949996,
          "Dealer.ms": 0.24062685,
          "Dealer.socgen": 0.238454,
          "Dealer.ml": 0.2435,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.24100000000000002
        }
      },
      {
        "Name": "SPX_DEC20",
        "Maturity": "12/18/2020",
        "Quotes": {
          "BM@T": 0.2426734669,
          "BMComputed@T": 0.23726968793802783,
          "BM@T-1": 0.2482700161,
          "BMComputed@T-1": 0.24253741976084367,
          "Dealer.ms": 0.2474625,
          "Dealer.socgen": 0.2465379,
          "Dealer.ml": 0.2536,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "SX5E",
    "Ticker": "EQI.SX5E",
    "Spot": 2942.09,
    "VolSurfaceTime": "4/12/2016 11:29:22 AM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "bc545ffb-c286-4c61-97a9-7df8387196a9",
        "MachineName": "EDFARM181",
        "ProcessId": 53412,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-12 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T20:25:38.4085453+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "SX5E_APR16",
        "Maturity": "4/15/2016",
        "Quotes": {
          "BM@T": 0.2399776937,
          "BMComputed@T": 0.20590088096862083,
          "BM@T-1": 0.2495,
          "BMComputed@T-1": 0.21542318708678865,
          "Dealer.ms": 0.22192530000000002,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_MAY16",
        "Maturity": "5/20/2016",
        "Quotes": {
          "BM@T": 0.2442655831,
          "BMComputed@T": 0.23270022842777235,
          "BM@T-1": 0.2504101539,
          "BMComputed@T-1": 0.23883564916977218,
          "Dealer.ms": 0.24627939999999998,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.2560941009,
          "BMComputed@T": 0.24497197312490163,
          "BM@T-1": 0.2610670676,
          "BMComputed@T-1": 0.24993262684868936,
          "Dealer.ms": 0.25996105,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.273
        }
      },
      {
        "Name": "SX5E_JUL16",
        "Maturity": "7/15/2016",
        "Quotes": {
          "BM@T": 0.2672565828,
          "BMComputed@T": 0.25225255797644169,
          "BM@T-1": 0.2706301567,
          "BMComputed@T-1": 0.2556141745708374,
          "Dealer.ms": 0.27121470000000003,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_AUG16",
        "Maturity": "8/19/2016",
        "Quotes": {
          "BM@T": 0.2731806307,
          "BMComputed@T": 0.25784771934058787,
          "BM@T-1": 0.2753730479,
          "BMComputed@T-1": 0.26002902758732327,
          "Dealer.ms": 0.27369815,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.275,
          "BMComputed@T": 0.2606447540552147,
          "BM@T-1": 0.2774626715,
          "BMComputed@T-1": 0.26259502735262846,
          "Dealer.ms": 0.2751441,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.288
        }
      },
      {
        "Name": "SX5E_OCT16",
        "Maturity": "10/21/2016",
        "Quotes": {
          "BM@T": 0.2755,
          "BMComputed@T": 0.26247341140662839,
          "BM@T-1": 0.2777549917,
          "BMComputed@T-1": 0.26439744873042964,
          "Dealer.ms": 0.27642659999999997,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_NOV16",
        "Maturity": "11/18/2016",
        "Quotes": {
          "BM@T": 0.2757242892,
          "BMComputed@T": 0.26299313279159287,
          "BM@T-1": 0.2774303505,
          "BMComputed@T-1": 0.26468812882559117,
          "Dealer.ms": 0.2748178,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2758,
          "BMComputed@T": 0.26375860334251783,
          "BM@T-1": 0.27690352,
          "BMComputed@T-1": 0.26511473857497575,
          "Dealer.ms": 0.27379995,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.28900000000000003
        }
      },
      {
        "Name": "SX5E_JAN17",
        "Maturity": "1/20/2017",
        "Quotes": {
          "BM@T": 0.2759,
          "BMComputed@T": 0.26530608562548408,
          "BM@T-1": 0.2749021281,
          "BMComputed@T-1": 0.26600096016675179,
          "Dealer.ms": 0.27397045,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_FEB17",
        "Maturity": "2/17/2017",
        "Quotes": {
          "BM@T": 0.276,
          "BMComputed@T": 0.26609546342740353,
          "BM@T-1": 0.2759110805,
          "BMComputed@T-1": 0.26622243103603122,
          "Dealer.ms": 0.2730268,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2763206228,
          "BMComputed@T": 0.26667656736846312,
          "BM@T-1": 0.2760591049,
          "BMComputed@T-1": 0.26640940183089595,
          "Dealer.ms": 0.27250125000000003,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.28800000000000003
        }
      },
      {
        "Name": "SX5E_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2765,
          "BMComputed@T": 0.2680343255201359,
          "BM@T-1": 0.2733695859,
          "BMComputed@T-1": 0.26788893898974814,
          "Dealer.ms": 0.27429800000000004,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.28600000000000003
        }
      },
      {
        "Name": "SX5E_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.2755,
          "BMComputed@T": 0.26689515544567766,
          "BM@T-1": 0.2750581091,
          "BMComputed@T-1": 0.26774847977997085,
          "Dealer.ms": 0.27530005,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2749835612,
          "BMComputed@T": 0.26331064314490737,
          "BM@T-1": 0.2771252104,
          "BMComputed@T-1": 0.26548271557563941,
          "Dealer.ms": 0.27469375,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.284
        }
      },
      {
        "Name": "SX5E_JUN18",
        "Maturity": "6/15/2018",
        "Quotes": {
          "BM@T": 0.2755,
          "BMComputed@T": 0.2610422567878587,
          "BM@T-1": 0.2758565337,
          "BMComputed@T-1": 0.26097067767919241,
          "Dealer.ms": 0.27408734999999995,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_DEC18",
        "Maturity": "12/21/2018",
        "Quotes": {
          "BM@T": 0.28,
          "BMComputed@T": 0.26250030131786556,
          "BM@T-1": 0.2840892447,
          "BMComputed@T-1": 0.26418204087929686,
          "Dealer.ms": 0.27940265,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.28600000000000003
        }
      },
      {
        "Name": "SX5E_JUN19",
        "Maturity": "6/21/2019",
        "Quotes": {
          "BM@T": 0.285845244,
          "BMComputed@T": 0.26465857274471583,
          "BM@T-1": 0.2876184625,
          "BMComputed@T-1": 0.2664539044397351,
          "Dealer.ms": 0.28309025,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_DEC19",
        "Maturity": "12/20/2019",
        "Quotes": {
          "BM@T": 0.287,
          "BMComputed@T": 0.26684922220308721,
          "BM@T-1": 0.293014552,
          "BMComputed@T-1": 0.26878764783504649,
          "Dealer.ms": 0.28730785000000003,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.294
        }
      },
      {
        "Name": "SX5E_DEC20",
        "Maturity": "12/18/2020",
        "Quotes": {
          "BM@T": 0.294,
          "BMComputed@T": 0.27094402865372474,
          "BM@T-1": 0.2982814801,
          "BMComputed@T-1": 0.27316229548039994,
          "Dealer.ms": 0.2922344,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "UKX",
    "Ticker": "EQI.UKX",
    "Spot": 6242.39,
    "VolSurfaceTime": "4/12/2016 11:37:22 AM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.4089418+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "bc545ffb-c286-4c61-97a9-7df8387196a9",
        "MachineName": "EDFARM181",
        "ProcessId": 53412,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-12 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T20:25:38.4085453+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "UKX_APR16",
        "Maturity": "4/15/2016",
        "Quotes": {
          "BM@T": 0.1531922552,
          "BMComputed@T": 0.14355209660831833,
          "BM@T-1": 0.1557773574,
          "BMComputed@T-1": 0.1461393534342823,
          "Dealer.ms": 0.16003825,
          "Dealer.socgen": 0.2314,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "UKX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1916295564,
          "BMComputed@T": 0.179183136811203,
          "BM@T-1": 0.1955274992,
          "BMComputed@T-1": 0.18309407428188529,
          "Dealer.ms": 0.19050345000000002,
          "Dealer.socgen": 0.18920000000000003,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.198
        }
      },
      {
        "Name": "UKX_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.23,
          "BMComputed@T": 0.22002049980502392,
          "BM@T-1": 0.2307815507,
          "BMComputed@T-1": 0.2190885227676907,
          "Dealer.ms": 0.22904735,
          "Dealer.socgen": 0.2242,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.23399999999999999
        }
      },
      {
        "Name": "UKX_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.225,
          "BMComputed@T": 0.21537470165672162,
          "BM@T-1": 0.2303502547,
          "BMComputed@T-1": 0.21602421764166455,
          "Dealer.ms": 0.22703495,
          "Dealer.socgen": 0.2239,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22599999999999998
        }
      },
      {
        "Name": "UKX_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2255,
          "BMComputed@T": 0.2080867497449066,
          "BM@T-1": 0.228,
          "BMComputed@T-1": 0.261978164421729,
          "Dealer.ms": 0.2256073,
          "Dealer.socgen": 0.2237,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.228
        }
      },
      {
        "Name": "UKX_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2265,
          "BMComputed@T": 0.22189380278668216,
          "BM@T-1": 0.2298411503,
          "BMComputed@T-1": 0.21795799108505681,
          "Dealer.ms": 0.2270765,
          "Dealer.socgen": 0.2249,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22899999999999998
        }
      },
      {
        "Name": "UKX_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.23,
          "BMComputed@T": 0.22248580856801692,
          "BM@T-1": 0.2297898201,
          "BMComputed@T-1": 0.21923141515652511,
          "Dealer.ms": 0.2289413,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "UKX_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.231,
          "BMComputed@T": 0.22240683530058286,
          "BM@T-1": 0.231856503,
          "BMComputed@T-1": 0.2221280878018424,
          "Dealer.ms": 0.23059205,
          "Dealer.socgen": 0.23110000000000003,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.23399999999999999
        }
      },
      {
        "Name": "UKX_JUN18",
        "Maturity": "6/15/2018",
        "Quotes": {
          "BM@T": 0.2361476305,
          "BMComputed@T": 0.22409381886915639,
          "BM@T-1": 0.2356609307,
          "BMComputed@T-1": 0.22364620517031508,
          "Dealer.ms": 0.2339159,
          "Dealer.socgen": 0.2383,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "UKX_DEC18",
        "Maturity": "12/21/2018",
        "Quotes": {
          "BM@T": 0.239,
          "BMComputed@T": 0.22577610469832077,
          "BM@T-1": 0.2378609362,
          "BMComputed@T-1": 0.22516201885821233,
          "Dealer.ms": 0.2382554,
          "Dealer.socgen": 0.2428,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.243
        }
      },
      {
        "Name": "UKX_JUN19",
        "Maturity": "6/21/2019",
        "Quotes": {
          "BM@T": 0.24,
          "BMComputed@T": 0.22720730571909564,
          "BM@T-1": 0.24,
          "BMComputed@T-1": 0.22645529341944096,
          "Dealer.ms": 0.2440956,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "UKX_DEC19",
        "Maturity": "12/20/2019",
        "Quotes": {
          "BM@T": 0.245,
          "BMComputed@T": 0.22862066373262341,
          "BM@T-1": 0.24282431,
          "BMComputed@T-1": 0.22773348816636149,
          "Dealer.ms": 0.24875535,
          "Dealer.socgen": 0.2474,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.248
        }
      }
    ]
  },
  {
    "Index": "AUDUSD WMCO",
    "Ticker": "FX.AUD.USD",
    "Spot": 0.76305,
    "VolSurfaceTime": "4/12/2016 4:00:00 PM",
    "Metadata": {},
    "Observables": [
      {
        "Name": "AUDUSD WMCO_JUN16",
        "Maturity": "6/16/2016",
        "Quotes": {
          "BM@T": 0.1348814007,
          "BMComputed@T": 0.12836251174174143,
          "BM@T-1": 0.1348814007,
          "BMComputed@T-1": 0.12893628762510315,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "EURUSD WMCO",
    "Ticker": "FX.EUR.USD",
    "Spot": 1.13755,
    "VolSurfaceTime": "4/12/2016 4:00:00 PM",
    "Metadata": {},
    "Observables": [
      {
        "Name": "EURUSD WMCO_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.104783784,
          "BMComputed@T": 0.09925874185379184,
          "BM@T-1": 0.104783784,
          "BMComputed@T-1": 0.10023287667662202,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "EURUSD WMCO_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.1133096929,
          "BMComputed@T": 0.10998215627784907,
          "BM@T-1": 0.1136169664,
          "BMComputed@T-1": 0.11025885178594141,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "FTSEMIB",
    "Ticker": "EQI.FTSEMIB",
    "Spot": 17444.8,
    "VolSurfaceTime": "4/12/2016 11:40:00 AM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      }
    },
    "Observables": [
      {
        "Name": "FTSEMIB_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.3337418992,
          "BMComputed@T": 0.36037907404783892,
          "BM@T-1": 0.3337418992,
          "BMComputed@T-1": 0.34068795193044354,
          "Dealer.ms": 0.3183904,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "GBPUSD WMCO",
    "Ticker": "FX.GBP.USD",
    "Spot": 1.42105,
    "VolSurfaceTime": "4/12/2016 4:00:00 PM",
    "Metadata": {},
    "Observables": [
      {
        "Name": "GBPUSD WMCO_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1130430749,
          "BMComputed@T": 0.13296686997771764,
          "BM@T-1": 0.1130430749,
          "BMComputed@T-1": 0.1337534548646194,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "GBPUSD WMCO_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.1487837609,
          "BMComputed@T": 0.15417800856245858,
          "BM@T-1": 0.1487837609,
          "BMComputed@T-1": 0.15458763359619457,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "NKY",
    "Ticker": "EQI.NKY",
    "Spot": 15928.79,
    "VolSurfaceTime": "4/12/2016 3:15:00 PM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "e252ca83-c4a1-4713-9648-9026d463a1e3",
        "MachineName": "BC416",
        "ProcessId": 72380,
        "CommandLine": "D:\\dev\\p4v\\src\\miniapp\\bin\\x64\\Debug\\\\MiniApp.exe VarSwapCatalog runname=SocGenAsia save date=2016-4-12",
        "Description": "[VarSwapSocGen] Saving 108 points imported from Dealer run from SocGen 'AsiaRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\AsianVariance\\2016-04-12\\OutlookAttachment-SG-Asia-Equity-Derivatives@sgcib.com-20160412_044154-Bluemountain Run.xlsx]",
        "KnowledgeTime": "2016-04-12T12:58:29.950249+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "bc545ffb-c286-4c61-97a9-7df8387196a9",
        "MachineName": "EDFARM181",
        "ProcessId": 53412,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-12 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T20:25:38.4085453+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "NKY_APR16",
        "Maturity": "4/8/2016",
        "Quotes": {
          "BM@T": 0.29,
          "BMComputed@T": 0,
          "BM@T-1": 0.29,
          "BMComputed@T-1": 0,
          "Dealer.ms": 0.2283454,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "NKY_JUN16",
        "Maturity": "6/10/2016",
        "Quotes": {
          "BM@T": 0.29,
          "BMComputed@T": 0.28087598053689444,
          "BM@T-1": 0.302,
          "BMComputed@T-1": 0.29719344135970266,
          "Dealer.ms": 0.28188225,
          "Dealer.socgen": 0.28496313250204097,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.28400000000000003
        }
      },
      {
        "Name": "NKY_SEP16",
        "Maturity": "9/9/2016",
        "Quotes": {
          "BM@T": 0.293,
          "BMComputed@T": 0.29121893382300251,
          "BM@T-1": 0.3025,
          "BMComputed@T-1": 0.29821068935548012,
          "Dealer.ms": 0.2874989,
          "Dealer.socgen": 0.290519594996249,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.29400000000000004
        }
      },
      {
        "Name": "NKY_DEC16",
        "Maturity": "12/9/2016",
        "Quotes": {
          "BM@T": 0.2973635675,
          "BMComputed@T": 0.29576012349742636,
          "BM@T-1": 0.303,
          "BMComputed@T-1": 0.30139655599862192,
          "Dealer.ms": 0.29403314999999997,
          "Dealer.socgen": 0.29388804989844397,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.293
        }
      },
      {
        "Name": "NKY_JAN17",
        "Maturity": "1/13/2017",
        "Quotes": {
          "BM@T": 0.296,
          "BMComputed@T": 0.29749789753293404,
          "BM@T-1": 0.3034364257,
          "BMComputed@T-1": 0.30251143608798936,
          "Dealer.ms": 0.295945,
          "Dealer.socgen": 0.293836564775039,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "NKY_MAR17",
        "Maturity": "3/10/2017",
        "Quotes": {
          "BM@T": 0.2955,
          "BMComputed@T": 0.30049826453256295,
          "BM@T-1": 0.304,
          "BMComputed@T-1": 0.30672106095691487,
          "Dealer.ms": 0.29616264999999997,
          "Dealer.socgen": 0.294319967742447,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.294
        }
      },
      {
        "Name": "NKY_JUN17",
        "Maturity": "6/9/2017",
        "Quotes": {
          "BM@T": 0.295,
          "BMComputed@T": 0.30198415322179495,
          "BM@T-1": 0.3,
          "BMComputed@T-1": 0.30812711774061297,
          "Dealer.ms": 0.29459305,
          "Dealer.socgen": 0.29441441959515197,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.295
        }
      },
      {
        "Name": "NKY_SEP17",
        "Maturity": "9/8/2017",
        "Quotes": {
          "BM@T": 0.296,
          "BMComputed@T": 0.30211726764856384,
          "BM@T-1": 0.2980634161,
          "BMComputed@T-1": 0.30730455732143935,
          "Dealer.ms": 0.29514755000000004,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "NKY_DEC17",
        "Maturity": "12/8/2017",
        "Quotes": {
          "BM@T": 0.297,
          "BMComputed@T": 0.30265747131635024,
          "BM@T-1": 0.2971707205,
          "BMComputed@T-1": 0.30623134249067735,
          "Dealer.ms": 0.29514755,
          "Dealer.socgen": 0.296187487171523,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.297
        }
      },
      {
        "Name": "NKY_JUN18",
        "Maturity": "6/8/2018",
        "Quotes": {
          "BM@T": 0.296,
          "BMComputed@T": 0.30380415103527769,
          "BM@T-1": 0.2949342485,
          "BMComputed@T-1": 0.30602189372446004,
          "Dealer.ms": 0.29778795,
          "Dealer.socgen": 0.293464354059731,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "NKY_DEC18",
        "Maturity": "12/14/2018",
        "Quotes": {
          "BM@T": 0.2923112949,
          "BMComputed@T": 0.30478879813136994,
          "BM@T-1": 0.2934033947,
          "BMComputed@T-1": 0.30588089793234369,
          "Dealer.ms": 0.3006273,
          "Dealer.socgen": 0.292993008529535,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.2939999
        }
      },
      {
        "Name": "NKY_JUN19",
        "Maturity": "6/14/2019",
        "Quotes": {
          "BM@T": 0.2914296841,
          "BMComputed@T": 0.3054951635614751,
          "BM@T-1": 0.2923876398,
          "BMComputed@T-1": 0.30645311926074192,
          "Dealer.ms": 0.29825165,
          "Dealer.socgen": 0.290691503697814,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "NKY_DEC19",
        "Maturity": "12/13/2019",
        "Quotes": {
          "BM@T": 0.2915,
          "BMComputed@T": 0.30446575470822429,
          "BM@T-1": 0.2915,
          "BMComputed@T-1": 0.306117430636568,
          "Dealer.ms": 0.2988577,
          "Dealer.socgen": 0.286930238277554,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.28800000000000003
        }
      },
      {
        "Name": "NKY_DEC20",
        "Maturity": "12/11/2020",
        "Quotes": {
          "BM@T": 0.2915,
          "BMComputed@T": 0.30302758228078536,
          "BM@T-1": 0.2915,
          "BMComputed@T-1": 0.30456821607891577,
          "Dealer.ms": 0.2963337,
          "Dealer.socgen": 0.283549112573433,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "USDJPY",
    "Ticker": "FX.USD.JPY",
    "Spot": 108.54,
    "VolSurfaceTime": "4/12/2016 4:00:00 PM",
    "Metadata": {},
    "Observables": [
      {
        "Name": "USDJPY_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.137981292,
          "BMComputed@T": 0.11921373302337526,
          "BM@T-1": 0.137981292,
          "BMComputed@T-1": 0.12493291367430204,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "USDJPY_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.1389584297,
          "BMComputed@T": 0.12600135397979,
          "BM@T-1": 0.1389584297,
          "BMComputed@T-1": 0.12961532719818311,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "SMI",
    "Ticker": "EQI.SMI",
    "Spot": 7788.78,
    "VolSurfaceTime": "4/12/2016 11:24:16 AM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.4089418+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "bc545ffb-c286-4c61-97a9-7df8387196a9",
        "MachineName": "EDFARM181",
        "ProcessId": 53412,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-12 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T20:25:38.4085453+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "SMI_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1917,
          "BMComputed@T": 0.19057137139308478,
          "BM@T-1": 0.1956,
          "BMComputed@T-1": 0.19262903777813173,
          "Dealer.ms": 0.19436375,
          "Dealer.socgen": 0.1993,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.21000000000000002
        }
      },
      {
        "Name": "SMI_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.214,
          "BMComputed@T": 0.20231850747859909,
          "BM@T-1": 0.2147,
          "BMComputed@T-1": 0.20118587578190789,
          "Dealer.ms": 0.20735444999999997,
          "Dealer.socgen": 0.2157,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22099999999999997
        }
      },
      {
        "Name": "SMI_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2131,
          "BMComputed@T": 0.20475606123246173,
          "BM@T-1": 0.2181,
          "BMComputed@T-1": 0.20841975974466356,
          "Dealer.ms": 0.21089760000000002,
          "Dealer.socgen": 0.21789999999999998,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22
        }
      },
      {
        "Name": "SMI_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2035,
          "BMComputed@T": 0.20957036043032304,
          "BM@T-1": 0.2057,
          "BMComputed@T-1": 0.20950133833460349,
          "Dealer.ms": 0.21549495000000002,
          "Dealer.socgen": 0.2207,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.21899999999999997
        }
      },
      {
        "Name": "SMI_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2122,
          "BMComputed@T": 0.213150489151091,
          "BM@T-1": 0.2153,
          "BMComputed@T-1": 0.22468512227822257,
          "Dealer.ms": 0.2254156,
          "Dealer.socgen": 0.22219999999999998,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22
        }
      },
      {
        "Name": "SMI_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2171,
          "BMComputed@T": 0.21179790371150464,
          "BM@T-1": 0.2179,
          "BMComputed@T-1": 0.22038151395817882,
          "Dealer.ms": 0.22332180000000001,
          "Dealer.socgen": 0.22719999999999999,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.217
        }
      }
    ]
  },
  {
    "Index": "TPX",
    "Ticker": "EQI.TPX",
    "Spot": 1299.35,
    "VolSurfaceTime": "4/12/2016 3:15:00 PM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "e252ca83-c4a1-4713-9648-9026d463a1e3",
        "MachineName": "BC416",
        "ProcessId": 72380,
        "CommandLine": "D:\\dev\\p4v\\src\\miniapp\\bin\\x64\\Debug\\\\MiniApp.exe VarSwapCatalog runname=SocGenAsia save date=2016-4-12",
        "Description": "[VarSwapSocGen] Saving 108 points imported from Dealer run from SocGen 'AsiaRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\AsianVariance\\2016-04-12\\OutlookAttachment-SG-Asia-Equity-Derivatives@sgcib.com-20160412_044154-Bluemountain Run.xlsx]",
        "KnowledgeTime": "2016-04-12T12:58:29.950249+00:00",
        "UserName": "jhorowitz"
      }
    },
    "Observables": [
      {
        "Name": "TPX_APR16",
        "Maturity": "4/8/2016",
        "Quotes": {
          "BM@T": 0.2691,
          "BMComputed@T": 0,
          "BM@T-1": 0.2691,
          "BMComputed@T-1": 0,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_JUN16",
        "Maturity": "6/10/2016",
        "Quotes": {
          "BM@T": 0.264,
          "BMComputed@T": 0.26648838957289633,
          "BM@T-1": 0.2749,
          "BMComputed@T-1": 0.27886168767288688,
          "Dealer.ms": 0.27380355,
          "Dealer.socgen": 0.26989677144560803,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_SEP16",
        "Maturity": "9/9/2016",
        "Quotes": {
          "BM@T": 0.2641,
          "BMComputed@T": 0.27766548209616609,
          "BM@T-1": 0.2727,
          "BMComputed@T-1": 0.28205998574811642,
          "Dealer.ms": 0.2784111,
          "Dealer.socgen": 0.274709039767016,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_DEC16",
        "Maturity": "12/9/2016",
        "Quotes": {
          "BM@T": 0.2711,
          "BMComputed@T": 0.28335684414121581,
          "BM@T-1": 0.2762,
          "BMComputed@T-1": 0.28670516854158518,
          "Dealer.ms": 0.28487510000000005,
          "Dealer.socgen": 0.278064004447183,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_JAN17",
        "Maturity": "1/13/2017",
        "Quotes": {
          "BM@T": 0.2787,
          "BMComputed@T": 0.28532024581656945,
          "BM@T-1": 0.2857,
          "BMComputed@T-1": 0.28828898300539574,
          "Dealer.ms": 0.28556525,
          "Dealer.socgen": 0.278044704500939,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_MAR17",
        "Maturity": "3/10/2017",
        "Quotes": {
          "BM@T": 0.2811,
          "BMComputed@T": 0.28793408346744281,
          "BM@T-1": 0.2892,
          "BMComputed@T-1": 0.29247252531066248,
          "Dealer.ms": 0.28489575,
          "Dealer.socgen": 0.27817996726743,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_JUN17",
        "Maturity": "6/9/2017",
        "Quotes": {
          "BM@T": 0.2799,
          "BMComputed@T": 0.28888957661059533,
          "BM@T-1": 0.2846,
          "BMComputed@T-1": 0.29411987685799745,
          "Dealer.ms": 0.28422005,
          "Dealer.socgen": 0.279125923374629,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_SEP17",
        "Maturity": "9/8/2017",
        "Quotes": {
          "BM@T": 0.2806,
          "BMComputed@T": 0.28907540470647264,
          "BM@T-1": 0.2825,
          "BMComputed@T-1": 0.29344379329242737,
          "Dealer.ms": 0.28464965000000003,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_DEC17",
        "Maturity": "12/8/2017",
        "Quotes": {
          "BM@T": 0.282,
          "BMComputed@T": 0.28959029862674945,
          "BM@T-1": 0.2822,
          "BMComputed@T-1": 0.29245643137583266,
          "Dealer.ms": 0.2838172,
          "Dealer.socgen": 0.280483238278628,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_JUN18",
        "Maturity": "6/8/2018",
        "Quotes": {
          "BM@T": 0.2829,
          "BMComputed@T": 0.29121452131186293,
          "BM@T-1": 0.2819,
          "BMComputed@T-1": 0.29297224339589006,
          "Dealer.ms": 0.2880671,
          "Dealer.socgen": 0.278040532660709,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_DEC18",
        "Maturity": "12/14/2018",
        "Quotes": {
          "BM@T": 0.279,
          "BMComputed@T": 0.29238260688625756,
          "BM@T-1": 0.2801,
          "BMComputed@T-1": 0.293158269724666,
          "Dealer.ms": 0.28838410000000003,
          "Dealer.socgen": 0.277234201516439,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_JUN19",
        "Maturity": "6/14/2019",
        "Quotes": {
          "BM@T": 0.2783,
          "BMComputed@T": 0.29416676903008337,
          "BM@T-1": 0.2793,
          "BMComputed@T-1": 0.29435758051377281,
          "Dealer.ms": 0.28958655,
          "Dealer.socgen": 0.274893858345775,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_DEC19",
        "Maturity": "12/13/2019",
        "Quotes": {
          "BM@T": 0.2776,
          "BMComputed@T": 0.29572778014979856,
          "BM@T-1": 0.2776,
          "BMComputed@T-1": 0.29546476048979264,
          "Dealer.ms": 0.28477815,
          "Dealer.socgen": 0.27102591625351097,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_DEC20",
        "Maturity": "12/11/2020",
        "Quotes": {
          "BM@T": 0.2733,
          "BMComputed@T": 0.29753173889894824,
          "BM@T-1": 0.2733,
          "BMComputed@T-1": 0.29674810101642957,
          "Dealer.ms": 0.28532100000000005,
          "Dealer.socgen": 0.267833644634005,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "CAC",
    "Ticker": "EQI.CAC",
    "Spot": 4345.91,
    "VolSurfaceTime": "4/12/2016 11:29:14 AM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      }
    },
    "Observables": [
      {
        "Name": "CAC_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.2472,
          "BMComputed@T": 0.23417560877452545,
          "BM@T-1": 0.252,
          "BMComputed@T-1": 0.23927140020972038,
          "Dealer.ms": 0.24168375000000003,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "DAX",
    "Ticker": "EQI.DAX",
    "Spot": 9761.47,
    "VolSurfaceTime": "4/12/2016 11:29:18 AM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "bc545ffb-c286-4c61-97a9-7df8387196a9",
        "MachineName": "EDFARM181",
        "ProcessId": 53412,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-12 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T20:25:38.4085453+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "DAX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.2448,
          "BMComputed@T": 0.233464213221439,
          "BM@T-1": 0.2496,
          "BMComputed@T-1": 0.23953507743677452,
          "Dealer.ms": 0.2349624,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.249
        }
      },
      {
        "Name": "DAX_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2587,
          "BMComputed@T": 0.25101854100258814,
          "BM@T-1": 0.261,
          "BMComputed@T-1": 0.25505563465348297,
          "Dealer.ms": 0.2573845,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.269
        }
      },
      {
        "Name": "DAX_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2659,
          "BMComputed@T": 0.25614348060068365,
          "BM@T-1": 0.267,
          "BMComputed@T-1": 0.25352847105334342,
          "Dealer.ms": 0.26184265,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.271
        }
      },
      {
        "Name": "DAX_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2693,
          "BMComputed@T": 0.25403163305967708,
          "BM@T-1": 0.269,
          "BMComputed@T-1": 0.25592097009938219,
          "Dealer.ms": 0.2654956,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.27
        }
      },
      {
        "Name": "DAX_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2705,
          "BMComputed@T": 0.25121378525493088,
          "BM@T-1": 0.2674,
          "BMComputed@T-1": 0.24938750549918481,
          "Dealer.ms": 0.26941675,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.272
        }
      },
      {
        "Name": "DAX_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.2715,
          "BMComputed@T": 0.25390266410775586,
          "BM@T-1": 0.2711,
          "BMComputed@T-1": 0.24380616768304636,
          "Dealer.ms": 0.27189275,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "DAX_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2726,
          "BMComputed@T": 0.2575549559509776,
          "BM@T-1": 0.2747,
          "BMComputed@T-1": 0.24395652866599843,
          "Dealer.ms": 0.27527524999999997,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.27399999999999997
        }
      },
      {
        "Name": "DAX_JUN18",
        "Maturity": "6/15/2018",
        "Quotes": {
          "BM@T": 0.273,
          "BMComputed@T": 0.25686408398838018,
          "BM@T-1": 0.2734,
          "BMComputed@T-1": 0.25459494913173442,
          "Dealer.ms": 0.2797995,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "DAX_DEC18",
        "Maturity": "12/21/2018",
        "Quotes": {
          "BM@T": 0.276,
          "BMComputed@T": 0.23651075998338006,
          "BM@T-1": 0.28,
          "BMComputed@T-1": 0.235388161545278,
          "Dealer.ms": 0.2827947,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.27899999999999997
        }
      },
      {
        "Name": "DAX_JUN19",
        "Maturity": "6/21/2019",
        "Quotes": {
          "BM@T": 0.2852,
          "BMComputed@T": 0.23702913948249354,
          "BM@T-1": 0.2869,
          "BMComputed@T-1": 0.23587395149619164,
          "Dealer.ms": 0.27800975000000006,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "DAX_DEC19",
        "Maturity": "12/20/2019",
        "Quotes": {
          "BM@T": 0.2752,
          "BMComputed@T": 0.23755109212362152,
          "BM@T-1": 0.281,
          "BMComputed@T-1": 0.23637148360389429,
          "Dealer.ms": 0.27802005,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.28800000000000003
        }
      }
    ]
  },
  {
    "Index": "HSCEI",
    "Ticker": "EQI.HSCEI",
    "Spot": 8841.86,
    "VolSurfaceTime": "4/12/2016 4:00:00 PM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "e252ca83-c4a1-4713-9648-9026d463a1e3",
        "MachineName": "BC416",
        "ProcessId": 72380,
        "CommandLine": "D:\\dev\\p4v\\src\\miniapp\\bin\\x64\\Debug\\\\MiniApp.exe VarSwapCatalog runname=SocGenAsia save date=2016-4-12",
        "Description": "[VarSwapSocGen] Saving 108 points imported from Dealer run from SocGen 'AsiaRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\AsianVariance\\2016-04-12\\OutlookAttachment-SG-Asia-Equity-Derivatives@sgcib.com-20160412_044154-Bluemountain Run.xlsx]",
        "KnowledgeTime": "2016-04-12T12:58:29.950249+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "bc545ffb-c286-4c61-97a9-7df8387196a9",
        "MachineName": "EDFARM181",
        "ProcessId": 53412,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-12 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T20:25:38.4085453+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "HSCEI_APR16",
        "Maturity": "4/28/2016",
        "Quotes": {
          "BM@T": 0.2907,
          "BMComputed@T": 0.2492535023186869,
          "BM@T-1": 0.3033,
          "BMComputed@T-1": 0.26255845389505278,
          "Dealer.ms": 0,
          "Dealer.socgen": 0.263894917521642,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "HSCEI_JUN16",
        "Maturity": "6/29/2016",
        "Quotes": {
          "BM@T": 0.3069,
          "BMComputed@T": 0.29034977103731224,
          "BM@T-1": 0.3117,
          "BMComputed@T-1": 0.29784655771901669,
          "Dealer.ms": 0.29758995,
          "Dealer.socgen": 0.290276064976617,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.3017
        }
      },
      {
        "Name": "HSCEI_SEP16",
        "Maturity": "9/29/2016",
        "Quotes": {
          "BM@T": 0.3201,
          "BMComputed@T": 0.31220594882134312,
          "BM@T-1": 0.3237,
          "BMComputed@T-1": 0.31744954505221162,
          "Dealer.ms": 0.3116967,
          "Dealer.socgen": 0.312963705106258,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.3175
        }
      },
      {
        "Name": "HSCEI_DEC16",
        "Maturity": "12/29/2016",
        "Quotes": {
          "BM@T": 0.3292,
          "BMComputed@T": 0.3332506484140591,
          "BM@T-1": 0.3322,
          "BMComputed@T-1": 0.33729750194818381,
          "Dealer.ms": 0.32522894999999996,
          "Dealer.socgen": 0.325798356961241,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.3269
        }
      },
      {
        "Name": "HSCEI_MAR17",
        "Maturity": "3/30/2017",
        "Quotes": {
          "BM@T": 0.3308,
          "BMComputed@T": 0.33849536655987972,
          "BM@T-1": 0.3338,
          "BMComputed@T-1": 0.34157180952459337,
          "Dealer.ms": 0.32612325,
          "Dealer.socgen": 0.333264363068887,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.3329
        }
      },
      {
        "Name": "HSCEI_JUN17",
        "Maturity": "6/29/2017",
        "Quotes": {
          "BM@T": 0.3356,
          "BMComputed@T": 0.34165196592079905,
          "BM@T-1": 0.3388,
          "BMComputed@T-1": 0.34457232415208777,
          "Dealer.ms": 0.32916765000000003,
          "Dealer.socgen": 0.338278490886541,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.3359
        }
      },
      {
        "Name": "HSCEI_DEC17",
        "Maturity": "12/28/2017",
        "Quotes": {
          "BM@T": 0.3411,
          "BMComputed@T": 0.33958997941625535,
          "BM@T-1": 0.3437,
          "BMComputed@T-1": 0.34165316123441208,
          "Dealer.ms": 0.33982155,
          "Dealer.socgen": 0.343272508282734,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.3409
        }
      },
      {
        "Name": "HSCEI_MAR18",
        "Maturity": "3/28/2018",
        "Quotes": {
          "BM@T": 0.3442,
          "BMComputed@T": 0.33755639192181314,
          "BM@T-1": 0.3466,
          "BMComputed@T-1": 0.33963076524796149,
          "Dealer.ms": 0.34257725000000006,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "IBEX",
    "Ticker": "EQI.IBEX",
    "Spot": 8546.3,
    "VolSurfaceTime": "4/12/2016 11:35:00 AM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      }
    },
    "Observables": [
      {
        "Name": "IBEX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.2748275482,
          "BMComputed@T": 0.2618945866967971,
          "BM@T-1": 0.2748275482,
          "BMComputed@T-1": 0.30213948336896612,
          "Dealer.ms": 0.2691463,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "NDX",
    "Ticker": "EQI.NDX",
    "Spot": 4496.044,
    "VolSurfaceTime": "4/12/2016 4:14:37 PM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.4089418+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "bc545ffb-c286-4c61-97a9-7df8387196a9",
        "MachineName": "EDFARM181",
        "ProcessId": 53412,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-12 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T20:25:38.4085453+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "NDX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1991083773,
          "BMComputed@T": 0.1902865557078825,
          "BM@T-1": 0.2055001656,
          "BMComputed@T-1": 0.1957726789400287,
          "Dealer.ms": 0.20396015,
          "Dealer.socgen": 0.199844,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.20500000000000002
        }
      },
      {
        "Name": "NDX_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2137023255,
          "BMComputed@T": 0.20863089482711158,
          "BM@T-1": 0.2175017914,
          "BMComputed@T-1": 0.21177897079605906,
          "Dealer.ms": 0.21868625,
          "Dealer.socgen": 0.21683505,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.21799999999999997
        }
      },
      {
        "Name": "NDX_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2255219018,
          "BMComputed@T": 0.21876159687013966,
          "BM@T-1": 0.2270528438,
          "BMComputed@T-1": 0.21977171427612707,
          "Dealer.ms": 0.22509105000000001,
          "Dealer.socgen": 0.22651405,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22699999999999998
        }
      },
      {
        "Name": "NDX_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2334542597,
          "BMComputed@T": 0.22671013508126547,
          "BM@T-1": 0.2343472088,
          "BMComputed@T-1": 0.227147243381048,
          "Dealer.ms": 0.23379875,
          "Dealer.socgen": 0.23408900000000002,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.23399999999999999
        }
      },
      {
        "Name": "NDX_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2354224511,
          "BMComputed@T": 0.2347144526752124,
          "BM@T-1": 0.2372616118,
          "BMComputed@T-1": 0.23613211993241817,
          "Dealer.ms": 0.2391093,
          "Dealer.socgen": 0.239396,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.24
        }
      },
      {
        "Name": "NDX_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2442724227,
          "BMComputed@T": 0.24333672109223484,
          "BM@T-1": 0.2468728868,
          "BMComputed@T-1": 0.24558621140966966,
          "Dealer.ms": 0.24757335000000003,
          "Dealer.socgen": 0.24356605,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.247
        }
      }
    ]
  },
  {
    "Index": "RTY",
    "Ticker": "EQI.RTY",
    "Spot": 1105.713,
    "VolSurfaceTime": "4/12/2016 4:14:18 PM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.4089418+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "bc545ffb-c286-4c61-97a9-7df8387196a9",
        "MachineName": "EDFARM181",
        "ProcessId": 53412,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-12 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T20:25:38.4085453+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "RTY_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.2084603501,
          "BMComputed@T": 0.20066903460168559,
          "BM@T-1": 0.2128681835,
          "BMComputed@T-1": 0.2041771880192722,
          "Dealer.ms": 0.20767860000000002,
          "Dealer.socgen": 0.21000205,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.215
        }
      },
      {
        "Name": "RTY_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2324218242,
          "BMComputed@T": 0.22265201948492708,
          "BM@T-1": 0.2348698074,
          "BMComputed@T-1": 0.22439284829374367,
          "Dealer.ms": 0.2284581,
          "Dealer.socgen": 0.23128395000000002,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.23099999999999998
        }
      },
      {
        "Name": "RTY_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2414316877,
          "BMComputed@T": 0.23164840471401651,
          "BM@T-1": 0.2407592867,
          "BMComputed@T-1": 0.23041635002305816,
          "Dealer.ms": 0.23995870000000002,
          "Dealer.socgen": 0.24007699999999998,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.241
        }
      },
      {
        "Name": "RTY_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2454233766,
          "BMComputed@T": 0.24014495047738474,
          "BM@T-1": 0.2451877654,
          "BMComputed@T-1": 0.2394078652201527,
          "Dealer.ms": 0.24452715,
          "Dealer.socgen": 0.245978,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.247
        }
      },
      {
        "Name": "RTY_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2486505176,
          "BMComputed@T": 0.24624764447893666,
          "BM@T-1": 0.2486748059,
          "BMComputed@T-1": 0.24582599675368164,
          "Dealer.ms": 0.252296,
          "Dealer.socgen": 0.251268,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.253
        }
      },
      {
        "Name": "RTY_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2578144208,
          "BMComputed@T": 0.25736908722913765,
          "BM@T-1": 0.2583326882,
          "BMComputed@T-1": 0.25752680273866407,
          "Dealer.ms": 0.26269665,
          "Dealer.socgen": 0.259463,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.262
        }
      }
    ]
  },
  {
    "Index": "SX7E",
    "Ticker": "EQI.SX7E",
    "Spot": 97.35,
    "VolSurfaceTime": "4/12/2016 11:29:13 AM",
    "Metadata": {},
    "Observables": [
      {
        "Name": "SX7E_APR16",
        "Maturity": "4/15/2016",
        "Quotes": {
          "BM@T": 0.3794,
          "BMComputed@T": 0.39843301875126913,
          "BM@T-1": 0.3944612992,
          "BMComputed@T-1": 0.40381074988564497,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX7E_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.3935,
          "BMComputed@T": 0.406896062127603,
          "BM@T-1": 0.395120116,
          "BMComputed@T-1": 0.40483477529175593,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "TWSE",
    "Ticker": "EQI.TWSE",
    "Spot": 8531.18,
    "VolSurfaceTime": "4/12/2016 1:45:00 PM",
    "Metadata": {
      "ms": {
        "Id": "39327222-ccce-4e6c-94c4-63f456991c98",
        "MachineName": "BC416",
        "ProcessId": 25160,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-12 --request EquityVarSwapPrices --location Local",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-12T23:00:29.2189228+00:00",
        "UserName": "jhorowitz"
      }
    },
    "Observables": [
      {
        "Name": "TWSE_JUN16",
        "Maturity": "6/15/2016",
        "Quotes": {
          "BM@T": 0.1789156465,
          "BMComputed@T": 0.18340988230176664,
          "BM@T-1": 0.1772850147,
          "BMComputed@T-1": 0.18177925048032209,
          "Dealer.ms": 0.18036415,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TWSE_SEP16",
        "Maturity": "9/21/2016",
        "Quotes": {
          "BM@T": 0.1997542743,
          "BMComputed@T": 0.19859392679988264,
          "BM@T-1": 0.1984788726,
          "BMComputed@T-1": 0.19751353261619686,
          "Dealer.ms": 0.20429619999999998,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TWSE_DEC16",
        "Maturity": "12/21/2016",
        "Quotes": {
          "BM@T": 0.2139221012,
          "BMComputed@T": 0.20020814778599313,
          "BM@T-1": 0.2129745682,
          "BMComputed@T-1": 0.1994086240619668,
          "Dealer.ms": 0.2211707,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TWSE_MAR17",
        "Maturity": "3/15/2017",
        "Quotes": {
          "BM@T": 0.2224577936,
          "BMComputed@T": 0.20183119125279661,
          "BM@T-1": 0.2216369312,
          "BMComputed@T-1": 0.20112401550143319,
          "Dealer.ms": 0.2248536,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  }
],

  '2016-04-14' :

[
  {
    "Index": "AS51",
    "Ticker": "EQI.AS51",
    "Spot": 5118.622,
    "VolSurfaceTime": "4/14/2016 4:00:00 PM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "220958e3-d25b-4480-b1ac-8c58455842cf",
        "MachineName": "NYFARM129",
        "ProcessId": 8444,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-13.234850\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=SocGenAsia save",
        "Description": "[VarSwapSocGen] Saving 108 points imported from Dealer run from SocGen 'AsiaRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\AsianVariance\\2016-04-14\\OutlookAttachment-SG-Asia-Equity-Derivatives@sgcib.com-20160414_043058-Bluemountain Run.xlsx]",
        "KnowledgeTime": "2016-04-14T09:50:44.5187196+00:00",
        "UserName": "distributedagent"
      },
      "hsbc": {
        "Id": "941dca4d-c986-4241-bfdf-9d4788c0cc05",
        "MachineName": "EDFARM181",
        "ProcessId": 42444,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-14 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-14T18:00:14.6540544+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "AS51_JUN16",
        "Maturity": "6/16/2016",
        "Quotes": {
          "BM@T": 0.1892364591,
          "BMComputed@T": 0.17951727005366325,
          "BM@T-1": 0.1957356011,
          "BMComputed@T-1": 0.18521024974494502,
          "Dealer.ms": 0.19205840000000002,
          "Dealer.socgen": 0.186650977362277,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.189
        }
      },
      {
        "Name": "AS51_SEP16",
        "Maturity": "9/15/2016",
        "Quotes": {
          "BM@T": 0.2015032797,
          "BMComputed@T": 0.19506112341968282,
          "BM@T-1": 0.2076940396,
          "BMComputed@T-1": 0.20161094639803359,
          "Dealer.ms": 0.2030094,
          "Dealer.socgen": 0.19950043897737402,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.202
        }
      },
      {
        "Name": "AS51_DEC16",
        "Maturity": "12/15/2016",
        "Quotes": {
          "BM@T": 0.2085913732,
          "BMComputed@T": 0.19928691897192083,
          "BM@T-1": 0.212752638,
          "BMComputed@T-1": 0.204675156620418,
          "Dealer.ms": 0.2116597,
          "Dealer.socgen": 0.206114369590736,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.20800005
        }
      },
      {
        "Name": "AS51_MAR17",
        "Maturity": "3/16/2017",
        "Quotes": {
          "BM@T": 0.2114634216,
          "BMComputed@T": 0.20103928373004198,
          "BM@T-1": 0.216546287,
          "BMComputed@T-1": 0.20554928816221724,
          "Dealer.ms": 0.2125953,
          "Dealer.socgen": 0.211794964782876,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.21000000000000002
        }
      },
      {
        "Name": "AS51_JUN17",
        "Maturity": "6/15/2017",
        "Quotes": {
          "BM@T": 0.2165222838,
          "BMComputed@T": 0.20499943576081295,
          "BM@T-1": 0.2206679948,
          "BMComputed@T-1": 0.20908477555555807,
          "Dealer.ms": 0.2162582,
          "Dealer.socgen": 0.21930865140803502,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.21399999999999997
        }
      },
      {
        "Name": "AS51_DEC17",
        "Maturity": "12/21/2017",
        "Quotes": {
          "BM@T": 0.2214162281,
          "BMComputed@T": 0.21022958857811325,
          "BM@T-1": 0.2247486291,
          "BMComputed@T-1": 0.21384606924455765,
          "Dealer.ms": 0.21967885,
          "Dealer.socgen": 0.22656983428092,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.21800000000000003
        }
      }
    ]
  },
  {
    "Index": "HSI",
    "Ticker": "EQI.HSI",
    "Spot": 21337.81,
    "VolSurfaceTime": "4/14/2016 4:00:00 PM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "220958e3-d25b-4480-b1ac-8c58455842cf",
        "MachineName": "NYFARM129",
        "ProcessId": 8444,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-13.234850\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=SocGenAsia save",
        "Description": "[VarSwapSocGen] Saving 108 points imported from Dealer run from SocGen 'AsiaRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\AsianVariance\\2016-04-14\\OutlookAttachment-SG-Asia-Equity-Derivatives@sgcib.com-20160414_043058-Bluemountain Run.xlsx]",
        "KnowledgeTime": "2016-04-14T09:50:44.5187196+00:00",
        "UserName": "distributedagent"
      },
      "jpm": {
        "Id": "524138d9-bef4-4aff-92b3-3d4d08932be9",
        "MachineName": "EDFARM160",
        "ProcessId": 7696,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-13.234850\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=JPMAsia save",
        "Description": "[VarSwapJPM] Saving 52 points imported from Dealer run from JPM [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\JPM\\BMTN Asia daily var run\\2016-04-14\\OutlookAttachment-STAREMEAPROD-Scheduler-NoReply@jpmorgan.com-20160414_050033-BMTN Asia daily var run_14Apr2016_100022.xlsx]",
        "KnowledgeTime": "2016-04-14T10:00:10.7519459+00:00",
        "UserName": "distributedagent"
      },
      "hsbc": {
        "Id": "35f5fc90-f9ad-4dc0-9e9b-be42a834f79f",
        "MachineName": "EDFARM181",
        "ProcessId": 71976,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-14 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-14T14:00:12.4603687+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "HSI_APR16",
        "Maturity": "4/28/2016",
        "Quotes": {
          "BM@T": 0.1942323632,
          "BMComputed@T": 0.19041805297091388,
          "BM@T-1": 0.1918398539,
          "BMComputed@T-1": 0.18021177947401554,
          "Dealer.ms": 0,
          "Dealer.socgen": 0.19439594136121802,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.194068784951083,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "HSI_JUN16",
        "Maturity": "6/29/2016",
        "Quotes": {
          "BM@T": 0.223744059,
          "BMComputed@T": 0.21544495249916412,
          "BM@T-1": 0.2233582259,
          "BMComputed@T-1": 0.21292564055948024,
          "Dealer.ms": 0.22232559999999998,
          "Dealer.socgen": 0.221884486845324,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.221766099094274,
          "Dealer.hsbc": 0.22900005
        }
      },
      {
        "Name": "HSI_SEP16",
        "Maturity": "9/29/2016",
        "Quotes": {
          "BM@T": 0.2391043281,
          "BMComputed@T": 0.23266052827685924,
          "BM@T-1": 0.2422404416,
          "BMComputed@T-1": 0.22976520379180579,
          "Dealer.ms": 0.2391342,
          "Dealer.socgen": 0.23707739364088598,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.23820571872622,
          "Dealer.hsbc": 0.242
        }
      },
      {
        "Name": "HSI_DEC16",
        "Maturity": "12/29/2016",
        "Quotes": {
          "BM@T": 0.249931021,
          "BMComputed@T": 0.243418892638095,
          "BM@T-1": 0.2535325001,
          "BMComputed@T-1": 0.24266312114818672,
          "Dealer.ms": 0.2497635,
          "Dealer.socgen": 0.248820986375043,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.251139597434206,
          "Dealer.hsbc": 0.25
        }
      },
      {
        "Name": "HSI_MAR17",
        "Maturity": "3/30/2017",
        "Quotes": {
          "BM@T": 0.2573431685,
          "BMComputed@T": 0.24937735121780574,
          "BM@T-1": 0.260492105,
          "BMComputed@T-1": 0.24900960983175177,
          "Dealer.ms": 0.25875675,
          "Dealer.socgen": 0.260318486019065,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.254297438160114,
          "Dealer.hsbc": 0.256
        }
      },
      {
        "Name": "HSI_JUN17",
        "Maturity": "6/29/2017",
        "Quotes": {
          "BM@T": 0.2641302709,
          "BMComputed@T": 0.25758960733323355,
          "BM@T-1": 0.2674151085,
          "BMComputed@T-1": 0.25784019728992386,
          "Dealer.ms": 0.264937,
          "Dealer.socgen": 0.265806637355643,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.263777396342647,
          "Dealer.hsbc": 0.26200005000000004
        }
      },
      {
        "Name": "HSI_DEC17",
        "Maturity": "12/28/2017",
        "Quotes": {
          "BM@T": 0.2742374188,
          "BMComputed@T": 0.27008983825535932,
          "BM@T-1": 0.2776870874,
          "BMComputed@T-1": 0.26974607728113625,
          "Dealer.ms": 0.2740306,
          "Dealer.socgen": 0.275795182610691,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.27512384262891,
          "Dealer.hsbc": 0.27200005000000005
        }
      },
      {
        "Name": "HSI_MAR18",
        "Maturity": "3/28/2018",
        "Quotes": {
          "BM@T": 0.2797501398,
          "BMComputed@T": 0.27466150534535161,
          "BM@T-1": 0.281802909,
          "BMComputed@T-1": 0.27466948281899883,
          "Dealer.ms": 0.28170039999999996,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.27779987965145,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "KOSPI2",
    "Ticker": "EQI.KOSPI2",
    "Spot": 248.89,
    "VolSurfaceTime": "4/14/2016 3:15:00 PM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "220958e3-d25b-4480-b1ac-8c58455842cf",
        "MachineName": "NYFARM129",
        "ProcessId": 8444,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-13.234850\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=SocGenAsia save",
        "Description": "[VarSwapSocGen] Saving 108 points imported from Dealer run from SocGen 'AsiaRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\AsianVariance\\2016-04-14\\OutlookAttachment-SG-Asia-Equity-Derivatives@sgcib.com-20160414_043058-Bluemountain Run.xlsx]",
        "KnowledgeTime": "2016-04-14T09:50:44.5187196+00:00",
        "UserName": "distributedagent"
      },
      "jpm": {
        "Id": "524138d9-bef4-4aff-92b3-3d4d08932be9",
        "MachineName": "EDFARM160",
        "ProcessId": 7696,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-13.234850\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=JPMAsia save",
        "Description": "[VarSwapJPM] Saving 52 points imported from Dealer run from JPM [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\JPM\\BMTN Asia daily var run\\2016-04-14\\OutlookAttachment-STAREMEAPROD-Scheduler-NoReply@jpmorgan.com-20160414_050033-BMTN Asia daily var run_14Apr2016_100022.xlsx]",
        "KnowledgeTime": "2016-04-14T10:00:10.7519459+00:00",
        "UserName": "distributedagent"
      },
      "hsbc": {
        "Id": "35f5fc90-f9ad-4dc0-9e9b-be42a834f79f",
        "MachineName": "EDFARM181",
        "ProcessId": 71976,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-14 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-14T14:00:12.4603687+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "KOSPI2_JUN16",
        "Maturity": "6/9/2016",
        "Quotes": {
          "BM@T": 0.1387349882,
          "BMComputed@T": 0.13534266759650979,
          "BM@T-1": 0.1446111179,
          "BMComputed@T-1": 0.14329565036755512,
          "Dealer.ms": 0.1415113,
          "Dealer.socgen": 0.140175471725707,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.139253181203571,
          "Dealer.hsbc": 0.134
        }
      },
      {
        "Name": "KOSPI2_SEP16",
        "Maturity": "9/8/2016",
        "Quotes": {
          "BM@T": 0.1667465404,
          "BMComputed@T": 0.16256761223214758,
          "BM@T-1": 0.1722356471,
          "BMComputed@T-1": 0.1755266780782288,
          "Dealer.ms": 0.1692034,
          "Dealer.socgen": 0.166892100940553,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.164890660789831,
          "Dealer.hsbc": 0.166
        }
      },
      {
        "Name": "KOSPI2_DEC16",
        "Maturity": "12/8/2016",
        "Quotes": {
          "BM@T": 0.1823035552,
          "BMComputed@T": 0.1769631913525079,
          "BM@T-1": 0.1879392282,
          "BMComputed@T-1": 0.18448059490897348,
          "Dealer.ms": 0.18195440000000002,
          "Dealer.socgen": 0.182892032564943,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.181367788145239,
          "Dealer.hsbc": 0.183
        }
      },
      {
        "Name": "KOSPI2_MAR17",
        "Maturity": "3/9/2017",
        "Quotes": {
          "BM@T": 0.1920847993,
          "BMComputed@T": 0.18253163780429019,
          "BM@T-1": 0.1970317539,
          "BMComputed@T-1": 0.18999867931662429,
          "Dealer.ms": 0.19123275,
          "Dealer.socgen": 0.192773272699951,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.191333174384795,
          "Dealer.hsbc": 0.193
        }
      },
      {
        "Name": "KOSPI2_JUN17",
        "Maturity": "6/8/2017",
        "Quotes": {
          "BM@T": 0.1994180342,
          "BMComputed@T": 0.18641752719177432,
          "BM@T-1": 0.2036799553,
          "BMComputed@T-1": 0.19404233487461078,
          "Dealer.ms": 0.1988685,
          "Dealer.socgen": 0.20161672405190997,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.198186912700179,
          "Dealer.hsbc": 0.199
        }
      },
      {
        "Name": "KOSPI2_DEC17",
        "Maturity": "12/14/2017",
        "Quotes": {
          "BM@T": 0.210213074,
          "BMComputed@T": 0.19413453183549831,
          "BM@T-1": 0.2135856653,
          "BMComputed@T-1": 0.19900474002664184,
          "Dealer.ms": 0.20939765,
          "Dealer.socgen": 0.212095629846577,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.211359066191007,
          "Dealer.hsbc": 0.20799995
        }
      }
    ]
  },
  {
    "Index": "SPX",
    "Ticker": "EQI.SPX",
    "Spot": 2082.78,
    "VolSurfaceTime": "4/14/2016 4:15:37 PM",
    "Metadata": {
      "ms": {
        "Id": "a935343d-b66f-49bc-b394-e91c56ea1b36",
        "MachineName": "BC416",
        "ProcessId": 19120,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T15:58:13.4442844+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:34.1112988+00:00",
        "UserName": "jhorowitz"
      },
      "ml": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:34.4513328+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "35f5fc90-f9ad-4dc0-9e9b-be42a834f79f",
        "MachineName": "EDFARM181",
        "ProcessId": 71976,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-14 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-14T14:00:12.4603687+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "SPX_APR16",
        "Maturity": "4/15/2016",
        "Quotes": {
          "BM@T": 0.106366625,
          "BMComputed@T": 0.078090625060015,
          "BM@T-1": 0.107666125,
          "BMComputed@T-1": 0.097257601219397666,
          "Dealer.ms": 0.10524525000000001,
          "Dealer.socgen": 0.107488,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_MAY16",
        "Maturity": "5/20/2016",
        "Quotes": {
          "BM@T": 0.1370116,
          "BMComputed@T": 0.13760085250042048,
          "BM@T-1": 0.13953845,
          "BMComputed@T-1": 0.13835071175190902,
          "Dealer.ms": 0.1361622,
          "Dealer.socgen": 0.137861,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1592621125,
          "BMComputed@T": 0.15994243219370294,
          "BM@T-1": 0.1602,
          "BMComputed@T-1": 0.16182685212788175,
          "Dealer.ms": 0.1583094,
          "Dealer.socgen": 0.158239,
          "Dealer.ml": 0.1595,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.16100005
        }
      },
      {
        "Name": "SPX_JUL16",
        "Maturity": "7/15/2016",
        "Quotes": {
          "BM@T": 0.1737888,
          "BMComputed@T": 0.1732437029534456,
          "BM@T-1": 0.1765908,
          "BMComputed@T-1": 0.17362936430793674,
          "Dealer.ms": 0.17378880000000002,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_AUG16",
        "Maturity": "8/19/2016",
        "Quotes": {
          "BM@T": 0.18256775,
          "BMComputed@T": 0.18308225287336774,
          "BM@T-1": 0.18355365,
          "BMComputed@T-1": 0.1833642488428506,
          "Dealer.ms": 0.18256774999999997,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.1884097625,
          "BMComputed@T": 0.18824745956990696,
          "BM@T-1": 0.1885,
          "BMComputed@T-1": 0.18848702213010923,
          "Dealer.ms": 0.18808605,
          "Dealer.socgen": 0.187253,
          "Dealer.ml": 0.1893,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.189
        }
      },
      {
        "Name": "SPX_OCT16",
        "Maturity": "10/21/2016",
        "Quotes": {
          "BM@T": 0.1920814,
          "BMComputed@T": 0.19410954815309733,
          "BM@T-1": 0.19381095,
          "BMComputed@T-1": 0.19409018221071409,
          "Dealer.ms": 0.1920814,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_NOV16",
        "Maturity": "11/18/2016",
        "Quotes": {
          "BM@T": 0.19604275,
          "BMComputed@T": 0.19702868802035278,
          "BM@T-1": 0.19483185,
          "BMComputed@T-1": 0.1969556785911265,
          "Dealer.ms": 0.19604275,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.199226,
          "BMComputed@T": 0.19927496649165932,
          "BM@T-1": 0.1995,
          "BMComputed@T-1": 0.19915817594139931,
          "Dealer.ms": 0.19694404999999998,
          "Dealer.socgen": 0.19936,
          "Dealer.ml": 0.1996,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.20099994999999998
        }
      },
      {
        "Name": "SPX_JAN17",
        "Maturity": "1/20/2017",
        "Quotes": {
          "BM@T": 0.2006483,
          "BMComputed@T": 0.20191869253767467,
          "BM@T-1": 0.201436875,
          "BMComputed@T-1": 0.20178618254800371,
          "Dealer.ms": 0.20012760000000002,
          "Dealer.socgen": 0.20116900000000001,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_FEB17",
        "Maturity": "2/17/2017",
        "Quotes": {
          "BM@T": 0.20306505,
          "BMComputed@T": 0.20472665580332822,
          "BM@T-1": 0.2044588,
          "BMComputed@T-1": 0.20419924030401487,
          "Dealer.ms": 0.20306505,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.20697875,
          "BMComputed@T": 0.20701232704270747,
          "BM@T-1": 0.2100811333,
          "BMComputed@T-1": 0.20620084730563154,
          "Dealer.ms": 0.20642125,
          "Dealer.socgen": 0.20651499999999998,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.20800000000000002
        }
      },
      {
        "Name": "SPX_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2121965333,
          "BMComputed@T": 0.21274198346475065,
          "BM@T-1": 0.2119,
          "BMComputed@T-1": 0.21198288682522531,
          "Dealer.ms": 0.2120005,
          "Dealer.socgen": 0.21158909999999997,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.21300000000000002
        }
      },
      {
        "Name": "SPX_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.21649905,
          "BMComputed@T": 0.21614198309501934,
          "BM@T-1": 0.2153846,
          "BMComputed@T-1": 0.21569073616526874,
          "Dealer.ms": 0.21649905,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2184651375,
          "BMComputed@T": 0.21887250211812748,
          "BM@T-1": 0.2183,
          "BMComputed@T-1": 0.21861705265389414,
          "Dealer.ms": 0.21966955,
          "Dealer.socgen": 0.218091,
          "Dealer.ml": 0.2181,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.218
        }
      },
      {
        "Name": "SPX_JAN18",
        "Maturity": "1/19/2018",
        "Quotes": {
          "BM@T": 0.21880595,
          "BMComputed@T": 0.21987190163451478,
          "BM@T-1": 0.21995505,
          "BMComputed@T-1": 0.2196828877663419,
          "Dealer.ms": 0.21880594999999997,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_JUN18",
        "Maturity": "6/15/2018",
        "Quotes": {
          "BM@T": 0.22213465,
          "BMComputed@T": 0.22387510105053424,
          "BM@T-1": 0.22325,
          "BMComputed@T-1": 0.22387959508330735,
          "Dealer.ms": 0.2223043,
          "Dealer.socgen": 0.221965,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_DEC18",
        "Maturity": "12/21/2018",
        "Quotes": {
          "BM@T": 0.22493215,
          "BMComputed@T": 0.22786253682668584,
          "BM@T-1": 0.226,
          "BMComputed@T-1": 0.22804351754340962,
          "Dealer.ms": 0.2266806,
          "Dealer.socgen": 0.2250481,
          "Dealer.ml": 0.224,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22399989999999997
        }
      },
      {
        "Name": "SPX_JUN19",
        "Maturity": "6/21/2019",
        "Quotes": {
          "BM@T": 0.23052905,
          "BMComputed@T": 0.22944807867571473,
          "BM@T-1": 0.2319068,
          "BMComputed@T-1": 0.22961537206314803,
          "Dealer.ms": 0.23052904999999999,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SPX_DEC19",
        "Maturity": "12/20/2019",
        "Quotes": {
          "BM@T": 0.234964575,
          "BMComputed@T": 0.23098236645037623,
          "BM@T-1": 0.235,
          "BMComputed@T-1": 0.23113449986728876,
          "Dealer.ms": 0.23571720000000002,
          "Dealer.socgen": 0.23414110000000002,
          "Dealer.ml": 0.238,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.23199999999999998
        }
      },
      {
        "Name": "SPX_DEC20",
        "Maturity": "12/18/2020",
        "Quotes": {
          "BM@T": 0.2454907833,
          "BMComputed@T": 0.233849535778624,
          "BM@T-1": 0.2466937333,
          "BMComputed@T-1": 0.23398546384259236,
          "Dealer.ms": 0.24481334999999999,
          "Dealer.socgen": 0.24285900000000002,
          "Dealer.ml": 0.24879999999999997,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "SX5E",
    "Ticker": "EQI.SX5E",
    "Spot": 3060.86,
    "VolSurfaceTime": "4/14/2016 11:29:24 AM",
    "Metadata": {
      "ms": {
        "Id": "a935343d-b66f-49bc-b394-e91c56ea1b36",
        "MachineName": "BC416",
        "ProcessId": 19120,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T15:58:13.4442844+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "65f85689-aa2b-4709-aab5-cfb70b9b8660",
        "MachineName": "NYFARM094",
        "ProcessId": 18008,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-14.170901\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=SocGenEurope save",
        "Description": "[VarSwapSocGen] Saving 40 points imported from Dealer run from SocGen 'EuropeRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\EuropeanVariance\\2016-04-14\\OutlookAttachment-alexandre.veran@sgcib.com-20160414_130440-EUR EoD Var Run SG 14-04-2016.xls]",
        "KnowledgeTime": "2016-04-14T17:18:24.0295696+00:00",
        "UserName": "distributedagent"
      },
      "jpm": {
        "Id": "1e1ca6be-4afc-488a-affa-26dcd1d43285",
        "MachineName": "EDFARM160",
        "ProcessId": 67164,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-14.154242\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=JPMEurope save",
        "Description": "[VarSwapJPM] Saving 78 points imported from Dealer run from JPM [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\JPM\\BMTN Euro daily var run\\2016-04-14\\OutlookAttachment-STAREMEAPROD-Scheduler-NoReply@jpmorgan.com-20160414_120043-BMTN Euro daily var run_14Apr2016_170031.xlsx]",
        "KnowledgeTime": "2016-04-14T16:07:51.8342152+00:00",
        "UserName": "distributedagent"
      },
      "hsbc": {
        "Id": "35f5fc90-f9ad-4dc0-9e9b-be42a834f79f",
        "MachineName": "EDFARM181",
        "ProcessId": 71976,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-14 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-14T14:00:12.4603687+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "SX5E_APR16",
        "Maturity": "4/15/2016",
        "Quotes": {
          "BM@T": 0.21,
          "BMComputed@T": 0.19566513687167561,
          "BM@T-1": 0.2180777174,
          "BMComputed@T-1": 0.19117690827256481,
          "Dealer.ms": 0.22192530000000002,
          "Dealer.socgen": 0.2777,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.11848500826849,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_MAY16",
        "Maturity": "5/20/2016",
        "Quotes": {
          "BM@T": 0.2156065995,
          "BMComputed@T": 0.20702422357586497,
          "BM@T-1": 0.2219068143,
          "BMComputed@T-1": 0.21431127665451369,
          "Dealer.ms": 0.21913880000000002,
          "Dealer.socgen": 0.21509999999999999,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.212580998632523,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.2356,
          "BMComputed@T": 0.22410866809675942,
          "BM@T-1": 0.2388242016,
          "BMComputed@T-1": 0.23040650157312587,
          "Dealer.ms": 0.23880065,
          "Dealer.socgen": 0.2341,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.233766164554555,
          "Dealer.hsbc": 0.2510001
        }
      },
      {
        "Name": "SX5E_JUL16",
        "Maturity": "7/15/2016",
        "Quotes": {
          "BM@T": 0.2572734,
          "BMComputed@T": 0.2356311685316578,
          "BM@T-1": 0.2608042,
          "BMComputed@T-1": 0.23978507145939218,
          "Dealer.ms": 0.2572734,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_AUG16",
        "Maturity": "8/19/2016",
        "Quotes": {
          "BM@T": 0.2622522,
          "BMComputed@T": 0.24439434259513035,
          "BM@T-1": 0.2643827,
          "BMComputed@T-1": 0.2469570474188133,
          "Dealer.ms": 0.26225220000000005,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2616,
          "BMComputed@T": 0.24785125988945605,
          "BM@T-1": 0.2631721124,
          "BMComputed@T-1": 0.250001916149273,
          "Dealer.ms": 0.26405829999999997,
          "Dealer.socgen": 0.2621,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.25863969341311,
          "Dealer.hsbc": 0.274
        }
      },
      {
        "Name": "SX5E_OCT16",
        "Maturity": "10/21/2016",
        "Quotes": {
          "BM@T": 0.2651371,
          "BMComputed@T": 0.25008051153505473,
          "BM@T-1": 0.2681372,
          "BMComputed@T-1": 0.25186240094731227,
          "Dealer.ms": 0.2651371,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_NOV16",
        "Maturity": "11/18/2016",
        "Quotes": {
          "BM@T": 0.26573055,
          "BMComputed@T": 0.25157527856656836,
          "BM@T-1": 0.2684312,
          "BMComputed@T-1": 0.2527208664142368,
          "Dealer.ms": 0.26573055,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.266708336,
          "BMComputed@T": 0.25340072998050134,
          "BM@T-1": 0.2657562906,
          "BMComputed@T-1": 0.25379508702418851,
          "Dealer.ms": 0.26722225,
          "Dealer.socgen": 0.2674,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.265502758076562,
          "Dealer.hsbc": 0.27599995
        }
      },
      {
        "Name": "SX5E_JAN17",
        "Maturity": "1/20/2017",
        "Quotes": {
          "BM@T": 0.2676075,
          "BMComputed@T": 0.2564412245745174,
          "BM@T-1": 0.2664736,
          "BMComputed@T-1": 0.25562933480427935,
          "Dealer.ms": 0.2676075,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_FEB17",
        "Maturity": "2/17/2017",
        "Quotes": {
          "BM@T": 0.26729,
          "BMComputed@T": 0.25843994354271477,
          "BM@T-1": 0.2667939,
          "BMComputed@T-1": 0.25670646817007858,
          "Dealer.ms": 0.26729,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2700561987,
          "BMComputed@T": 0.25917467012302431,
          "BM@T-1": 0.2659575748,
          "BMComputed@T-1": 0.25716619774743321,
          "Dealer.ms": 0.2680793,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.265089296106974,
          "Dealer.hsbc": 0.277
        }
      },
      {
        "Name": "SX5E_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2709203,
          "BMComputed@T": 0.26368680693108304,
          "BM@T-1": 0.2692570994,
          "BMComputed@T-1": 0.25870674021324525,
          "Dealer.ms": 0.2715654,
          "Dealer.socgen": 0.2707,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.270495499966223,
          "Dealer.hsbc": 0.277
        }
      },
      {
        "Name": "SX5E_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.2721371985,
          "BMComputed@T": 0.26346105504530709,
          "BM@T-1": 0.2699221989,
          "BMComputed@T-1": 0.25959170561617328,
          "Dealer.ms": 0.27222595000000005,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.27204844695446,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2720875948,
          "BMComputed@T": 0.261805769049659,
          "BM@T-1": 0.2705,
          "BMComputed@T-1": 0.25930540285849,
          "Dealer.ms": 0.27154475,
          "Dealer.socgen": 0.2723,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.272418034398471,
          "Dealer.hsbc": 0.278
        }
      },
      {
        "Name": "SX5E_JUN18",
        "Maturity": "6/15/2018",
        "Quotes": {
          "BM@T": 0.2737939428,
          "BMComputed@T": 0.25877472723618705,
          "BM@T-1": 0.2714643262,
          "BMComputed@T-1": 0.25817976664521824,
          "Dealer.ms": 0.27209005,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.275497835620256,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_DEC18",
        "Maturity": "12/21/2018",
        "Quotes": {
          "BM@T": 0.27710679,
          "BMComputed@T": 0.25910313998380841,
          "BM@T-1": 0.2752532053,
          "BMComputed@T-1": 0.25907527643778555,
          "Dealer.ms": 0.27778445,
          "Dealer.socgen": 0.2772,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.276335919871274,
          "Dealer.hsbc": 0.282
        }
      },
      {
        "Name": "SX5E_JUN19",
        "Maturity": "6/21/2019",
        "Quotes": {
          "BM@T": 0.2822449,
          "BMComputed@T": 0.2610784783521059,
          "BM@T-1": 0.27906235,
          "BMComputed@T-1": 0.26125565795131706,
          "Dealer.ms": 0.2822449,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX5E_DEC19",
        "Maturity": "12/20/2019",
        "Quotes": {
          "BM@T": 0.28654095,
          "BMComputed@T": 0.26314302266783485,
          "BM@T-1": 0.28494035,
          "BMComputed@T-1": 0.26343511043659312,
          "Dealer.ms": 0.2869819,
          "Dealer.socgen": 0.2861,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.28800000000000003
        }
      },
      {
        "Name": "SX5E_DEC20",
        "Maturity": "12/18/2020",
        "Quotes": {
          "BM@T": 0.29374355,
          "BMComputed@T": 0.26700017163382972,
          "BM@T-1": 0.292974075,
          "BMComputed@T-1": 0.26754198233562809,
          "Dealer.ms": 0.2934871,
          "Dealer.socgen": 0.294,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "UKX",
    "Ticker": "EQI.UKX",
    "Spot": 6365.1,
    "VolSurfaceTime": "4/14/2016 11:37:22 AM",
    "Metadata": {
      "ms": {
        "Id": "a935343d-b66f-49bc-b394-e91c56ea1b36",
        "MachineName": "BC416",
        "ProcessId": 19120,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T15:58:13.4442844+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "a935343d-b66f-49bc-b394-e91c56ea1b36",
        "MachineName": "BC416",
        "ProcessId": 19120,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T15:58:13.5242924+00:00",
        "UserName": "jhorowitz"
      },
      "jpm": {
        "Id": "1e1ca6be-4afc-488a-affa-26dcd1d43285",
        "MachineName": "EDFARM160",
        "ProcessId": 67164,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-14.154242\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=JPMEurope save",
        "Description": "[VarSwapJPM] Saving 78 points imported from Dealer run from JPM [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\JPM\\BMTN Euro daily var run\\2016-04-14\\OutlookAttachment-STAREMEAPROD-Scheduler-NoReply@jpmorgan.com-20160414_120043-BMTN Euro daily var run_14Apr2016_170031.xlsx]",
        "KnowledgeTime": "2016-04-14T16:07:51.8342152+00:00",
        "UserName": "distributedagent"
      },
      "hsbc": {
        "Id": "35f5fc90-f9ad-4dc0-9e9b-be42a834f79f",
        "MachineName": "EDFARM181",
        "ProcessId": 71976,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-14 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-14T14:00:12.4603687+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "UKX_APR16",
        "Maturity": "4/15/2016",
        "Quotes": {
          "BM@T": 0.1551881981,
          "BMComputed@T": 0.11372927104307168,
          "BM@T-1": 0.1646881989,
          "BMComputed@T-1": 0.11179799323703361,
          "Dealer.ms": 0.16003825,
          "Dealer.socgen": 0.2314,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.0741263443175947,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "UKX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1773526294,
          "BMComputed@T": 0.16546524556999975,
          "BM@T-1": 0.1785187379,
          "BMComputed@T-1": 0.16713766462687102,
          "Dealer.ms": 0.17714805,
          "Dealer.socgen": 0.1755,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.174762467566493,
          "Dealer.hsbc": 0.182
        }
      },
      {
        "Name": "UKX_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2188172744,
          "BMComputed@T": 0.2097615828528335,
          "BM@T-1": 0.2180689326,
          "BMComputed@T-1": 0.20906126461746638,
          "Dealer.ms": 0.22098869999999998,
          "Dealer.socgen": 0.2179,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.215380397662033,
          "Dealer.hsbc": 0.22099999999999997
        }
      },
      {
        "Name": "UKX_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.218871374,
          "BMComputed@T": 0.206299240084028,
          "BM@T-1": 0.2184,
          "BMComputed@T-1": 0.20811255485487551,
          "Dealer.ms": 0.2201629,
          "Dealer.socgen": 0.21860000000000002,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.215722645858066,
          "Dealer.hsbc": 0.22099995
        }
      },
      {
        "Name": "UKX_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2192234705,
          "BMComputed@T": 0.21795183850421129,
          "BM@T-1": 0.2186918201,
          "BMComputed@T-1": 0.22053039542906047,
          "Dealer.ms": 0.2192401,
          "Dealer.socgen": 0.21839999999999998,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.217253782182119,
          "Dealer.hsbc": 0.22199999999999998
        }
      },
      {
        "Name": "UKX_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.221430764,
          "BMComputed@T": 0.21308990993922441,
          "BM@T-1": 0.220593881,
          "BMComputed@T-1": 0.20872730872797185,
          "Dealer.ms": 0.22236515,
          "Dealer.socgen": 0.21889999999999998,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.221457905996255,
          "Dealer.hsbc": 0.223
        }
      },
      {
        "Name": "UKX_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.2239177576,
          "BMComputed@T": 0.21300557314688198,
          "BM@T-1": 0.2238412423,
          "BMComputed@T-1": 0.21188858935177321,
          "Dealer.ms": 0.2248291,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.223006415282346,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "UKX_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2264408311,
          "BMComputed@T": 0.21564538057506255,
          "BM@T-1": 0.2264803158,
          "BMComputed@T-1": 0.21707413986804469,
          "Dealer.ms": 0.22630250000000002,
          "Dealer.socgen": 0.22549999999999998,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.225960824384379,
          "Dealer.hsbc": 0.228
        }
      },
      {
        "Name": "UKX_JUN18",
        "Maturity": "6/15/2018",
        "Quotes": {
          "BM@T": 0.2324149298,
          "BMComputed@T": 0.21712924693574609,
          "BM@T-1": 0.2326320143,
          "BMComputed@T-1": 0.21875305627777003,
          "Dealer.ms": 0.23006780000000002,
          "Dealer.socgen": 0.23349999999999999,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.233676989320567,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "UKX_DEC18",
        "Maturity": "12/21/2018",
        "Quotes": {
          "BM@T": 0.2373553585,
          "BMComputed@T": 0.21860931919563462,
          "BM@T-1": 0.2372365873,
          "BMComputed@T-1": 0.22042138939940473,
          "Dealer.ms": 0.23606749999999999,
          "Dealer.socgen": 0.2386,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.236753933948487,
          "Dealer.hsbc": 0.238
        }
      },
      {
        "Name": "UKX_JUN19",
        "Maturity": "6/21/2019",
        "Quotes": {
          "BM@T": 0.24031915,
          "BMComputed@T": 0.21987225168387589,
          "BM@T-1": 0.23982625,
          "BMComputed@T-1": 0.22183475610746312,
          "Dealer.ms": 0.24031914999999998,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "UKX_DEC19",
        "Maturity": "12/20/2019",
        "Quotes": {
          "BM@T": 0.244475,
          "BMComputed@T": 0.22111837103672527,
          "BM@T-1": 0.2465081333,
          "BMComputed@T-1": 0.22323096687676663,
          "Dealer.ms": 0.2454251,
          "Dealer.socgen": 0.244,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.2439999
        }
      }
    ]
  },
  {
    "Index": "AUDUSD WMCO",
    "Ticker": "FX.AUD.USD",
    "Spot": 0.7706,
    "VolSurfaceTime": "4/14/2016 4:00:00 PM",
    "Metadata": {},
    "Observables": [
      {
        "Name": "AUDUSD WMCO_JUN16",
        "Maturity": "6/16/2016",
        "Quotes": {
          "BM@T": 0.1341463985,
          "BMComputed@T": 0,
          "BM@T-1": 0.1341463985,
          "BMComputed@T-1": 0.12748136839872015,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "EURUSD WMCO",
    "Ticker": "FX.EUR.USD",
    "Spot": 1.1263,
    "VolSurfaceTime": "4/14/2016 4:00:00 PM",
    "Metadata": {},
    "Observables": [
      {
        "Name": "EURUSD WMCO_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.104783784,
          "BMComputed@T": 0,
          "BM@T-1": 0.104783784,
          "BMComputed@T-1": 0.098084166487240554,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "EURUSD WMCO_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.1133096929,
          "BMComputed@T": 0,
          "BM@T-1": 0.1133096929,
          "BMComputed@T-1": 0.11027387385642146,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "FTSEMIB",
    "Ticker": "EQI.FTSEMIB",
    "Spot": 18329.09,
    "VolSurfaceTime": "4/14/2016 11:40:00 AM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      }
    },
    "Observables": [
      {
        "Name": "FTSEMIB_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.29414985,
          "BMComputed@T": 0.32697819019740182,
          "BM@T-1": 0.3005784,
          "BMComputed@T-1": 0.30437387248882541,
          "Dealer.ms": 0.29414985,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "GBPUSD WMCO",
    "Ticker": "FX.GBP.USD",
    "Spot": 1.41415,
    "VolSurfaceTime": "4/14/2016 4:00:00 PM",
    "Metadata": {},
    "Observables": [
      {
        "Name": "GBPUSD WMCO_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1126803423,
          "BMComputed@T": 0,
          "BM@T-1": 0.1126803423,
          "BMComputed@T-1": 0.13219112990402368,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "GBPUSD WMCO_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.1482953564,
          "BMComputed@T": 0,
          "BM@T-1": 0.1482953564,
          "BMComputed@T-1": 0.1537860151419724,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "NKY",
    "Ticker": "EQI.NKY",
    "Spot": 16911.05,
    "VolSurfaceTime": "4/14/2016 3:15:00 PM",
    "Metadata": {
      "ms": {
        "Id": "a935343d-b66f-49bc-b394-e91c56ea1b36",
        "MachineName": "BC416",
        "ProcessId": 19120,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T15:58:13.4442844+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "220958e3-d25b-4480-b1ac-8c58455842cf",
        "MachineName": "NYFARM129",
        "ProcessId": 8444,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-13.234850\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=SocGenAsia save",
        "Description": "[VarSwapSocGen] Saving 108 points imported from Dealer run from SocGen 'AsiaRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\AsianVariance\\2016-04-14\\OutlookAttachment-SG-Asia-Equity-Derivatives@sgcib.com-20160414_043058-Bluemountain Run.xlsx]",
        "KnowledgeTime": "2016-04-14T09:50:44.5187196+00:00",
        "UserName": "distributedagent"
      },
      "jpm": {
        "Id": "524138d9-bef4-4aff-92b3-3d4d08932be9",
        "MachineName": "EDFARM160",
        "ProcessId": 7696,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-13.234850\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=JPMAsia save",
        "Description": "[VarSwapJPM] Saving 52 points imported from Dealer run from JPM [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\JPM\\BMTN Asia daily var run\\2016-04-14\\OutlookAttachment-STAREMEAPROD-Scheduler-NoReply@jpmorgan.com-20160414_050033-BMTN Asia daily var run_14Apr2016_100022.xlsx]",
        "KnowledgeTime": "2016-04-14T10:00:10.7519459+00:00",
        "UserName": "distributedagent"
      },
      "hsbc": {
        "Id": "35f5fc90-f9ad-4dc0-9e9b-be42a834f79f",
        "MachineName": "EDFARM181",
        "ProcessId": 71976,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-14 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-14T14:00:12.4603687+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "NKY_APR16",
        "Maturity": "4/8/2016",
        "Quotes": {
          "BM@T": 0.2283454,
          "BMComputed@T": 0,
          "BM@T-1": 0.276,
          "BMComputed@T-1": 0,
          "Dealer.ms": 0.2283454,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "NKY_JUN16",
        "Maturity": "6/10/2016",
        "Quotes": {
          "BM@T": 0.2770493615,
          "BMComputed@T": 0.2739843103968358,
          "BM@T-1": 0.2770795141,
          "BMComputed@T-1": 0.26875861233827469,
          "Dealer.ms": 0.28304470000000004,
          "Dealer.socgen": 0.27029673066876897,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.278856065515422,
          "Dealer.hsbc": 0.27599995
        }
      },
      {
        "Name": "NKY_SEP16",
        "Maturity": "9/9/2016",
        "Quotes": {
          "BM@T": 0.2844494933,
          "BMComputed@T": 0.28679462689042334,
          "BM@T-1": 0.2843842412,
          "BMComputed@T-1": 0.28463808034195531,
          "Dealer.ms": 0.28350030000000004,
          "Dealer.socgen": 0.280079204323457,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.285218468809764,
          "Dealer.hsbc": 0.28900000000000003
        }
      },
      {
        "Name": "NKY_DEC16",
        "Maturity": "12/9/2016",
        "Quotes": {
          "BM@T": 0.2865704972,
          "BMComputed@T": 0.29377379929215308,
          "BM@T-1": 0.2876110088,
          "BMComputed@T-1": 0.29237527021981125,
          "Dealer.ms": 0.28941229999999996,
          "Dealer.socgen": 0.28421762586677596,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.285652112954146,
          "Dealer.hsbc": 0.28699995
        }
      },
      {
        "Name": "NKY_JAN17",
        "Maturity": "1/13/2017",
        "Quotes": {
          "BM@T": 0.2881241183,
          "BMComputed@T": 0.29555060026845148,
          "BM@T-1": 0.2878427709,
          "BMComputed@T-1": 0.29475504718249351,
          "Dealer.ms": 0.2910564,
          "Dealer.socgen": 0.285191836578897,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "NKY_MAR17",
        "Maturity": "3/10/2017",
        "Quotes": {
          "BM@T": 0.2879221005,
          "BMComputed@T": 0.29632633818900628,
          "BM@T-1": 0.2896567463,
          "BMComputed@T-1": 0.29606318111011209,
          "Dealer.ms": 0.2917347,
          "Dealer.socgen": 0.286690685651265,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.286263016394658,
          "Dealer.hsbc": 0.287
        }
      },
      {
        "Name": "NKY_JUN17",
        "Maturity": "6/9/2017",
        "Quotes": {
          "BM@T": 0.2897277408,
          "BMComputed@T": 0.29529303883156804,
          "BM@T-1": 0.29,
          "BMComputed@T-1": 0.29599787399526412,
          "Dealer.ms": 0.29248055,
          "Dealer.socgen": 0.28803899238506,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.28939142089494,
          "Dealer.hsbc": 0.289
        }
      },
      {
        "Name": "NKY_SEP17",
        "Maturity": "9/8/2017",
        "Quotes": {
          "BM@T": 0.2917706066,
          "BMComputed@T": 0.295644059214235,
          "BM@T-1": 0.2903126921,
          "BMComputed@T-1": 0.296667067644361,
          "Dealer.ms": 0.29427975,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.289261463271435,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "NKY_DEC17",
        "Maturity": "12/8/2017",
        "Quotes": {
          "BM@T": 0.2922520694,
          "BMComputed@T": 0.29650294344787842,
          "BM@T-1": 0.2915,
          "BMComputed@T-1": 0.29785342384130209,
          "Dealer.ms": 0.29412554999999996,
          "Dealer.socgen": 0.291556726211426,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.291326001521619,
          "Dealer.hsbc": 0.292
        }
      },
      {
        "Name": "NKY_JUN18",
        "Maturity": "6/8/2018",
        "Quotes": {
          "BM@T": 0.2918353526,
          "BMComputed@T": 0.29888988146602175,
          "BM@T-1": 0.2918,
          "BMComputed@T-1": 0.30009482143728233,
          "Dealer.ms": 0.2951667,
          "Dealer.socgen": 0.290765362992988,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.28957399488726,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "NKY_DEC18",
        "Maturity": "12/14/2018",
        "Quotes": {
          "BM@T": 0.2926763044,
          "BMComputed@T": 0.30059346128734482,
          "BM@T-1": 0.2921098635,
          "BMComputed@T-1": 0.30184056145078331,
          "Dealer.ms": 0.2969402,
          "Dealer.socgen": 0.291654121315662,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.289110896207078,
          "Dealer.hsbc": 0.29300000000000004
        }
      },
      {
        "Name": "NKY_JUN19",
        "Maturity": "6/14/2019",
        "Quotes": {
          "BM@T": 0.2944103897,
          "BMComputed@T": 0.30059800814941456,
          "BM@T-1": 0.2927747464,
          "BMComputed@T-1": 0.30247237992838411,
          "Dealer.ms": 0.29862370000000005,
          "Dealer.socgen": 0.290197079433673,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "NKY_DEC19",
        "Maturity": "12/13/2019",
        "Quotes": {
          "BM@T": 0.2925296944,
          "BMComputed@T": 0.2997374350855343,
          "BM@T-1": 0.2899482067,
          "BMComputed@T-1": 0.301520621022373,
          "Dealer.ms": 0.2996371,
          "Dealer.socgen": 0.286951883098836,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.2910001
        }
      },
      {
        "Name": "NKY_DEC20",
        "Maturity": "12/11/2020",
        "Quotes": {
          "BM@T": 0.2914919892,
          "BMComputed@T": 0.29907293905322685,
          "BM@T-1": 0.2887243385,
          "BMComputed@T-1": 0.29987106728454477,
          "Dealer.ms": 0.29933595,
          "Dealer.socgen": 0.283648028321263,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "USDJPY",
    "Ticker": "FX.USD.JPY",
    "Spot": 109.4,
    "VolSurfaceTime": "4/14/2016 4:00:00 PM",
    "Metadata": {},
    "Observables": [
      {
        "Name": "USDJPY_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.137981292,
          "BMComputed@T": 0.11852181099035795,
          "BM@T-1": 0.137981292,
          "BMComputed@T-1": 0.11765082537119527,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "USDJPY_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.1389584297,
          "BMComputed@T": 0.12699114592691521,
          "BM@T-1": 0.1389584297,
          "BMComputed@T-1": 0.12515116803614842,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "SMI",
    "Ticker": "EQI.SMI",
    "Spot": 8021,
    "VolSurfaceTime": "4/14/2016 11:24:15 AM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "a935343d-b66f-49bc-b394-e91c56ea1b36",
        "MachineName": "BC416",
        "ProcessId": 19120,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T15:58:13.5242924+00:00",
        "UserName": "jhorowitz"
      },
      "jpm": {
        "Id": "1e1ca6be-4afc-488a-affa-26dcd1d43285",
        "MachineName": "EDFARM160",
        "ProcessId": 67164,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-14.154242\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=JPMEurope save",
        "Description": "[VarSwapJPM] Saving 78 points imported from Dealer run from JPM [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\JPM\\BMTN Euro daily var run\\2016-04-14\\OutlookAttachment-STAREMEAPROD-Scheduler-NoReply@jpmorgan.com-20160414_120043-BMTN Euro daily var run_14Apr2016_170031.xlsx]",
        "KnowledgeTime": "2016-04-14T16:07:51.8342152+00:00",
        "UserName": "distributedagent"
      },
      "hsbc": {
        "Id": "35f5fc90-f9ad-4dc0-9e9b-be42a834f79f",
        "MachineName": "EDFARM181",
        "ProcessId": 71976,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-14 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-14T14:00:12.4603687+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "SMI_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1838,
          "BMComputed@T": 0.17255695019716155,
          "BM@T-1": 0.185,
          "BMComputed@T-1": 0.17836319072414916,
          "Dealer.ms": 0.1775442,
          "Dealer.socgen": 0.1815,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.175989843278177,
          "Dealer.hsbc": 0.183
        }
      },
      {
        "Name": "SMI_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2082,
          "BMComputed@T": 0.19319947640080154,
          "BM@T-1": 0.2075,
          "BMComputed@T-1": 0.19388483655705555,
          "Dealer.ms": 0.19753274999999998,
          "Dealer.socgen": 0.2028,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.19719757961594,
          "Dealer.hsbc": 0.20200005000000001
        }
      },
      {
        "Name": "SMI_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2095,
          "BMComputed@T": 0.19564249220630547,
          "BM@T-1": 0.209,
          "BMComputed@T-1": 0.19754060701058559,
          "Dealer.ms": 0.1988462,
          "Dealer.socgen": 0.2073,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.202412171675483,
          "Dealer.hsbc": 0.20500000000000002
        }
      },
      {
        "Name": "SMI_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2105,
          "BMComputed@T": 0.20061440516404389,
          "BM@T-1": 0.21,
          "BMComputed@T-1": 0.20201203484176869,
          "Dealer.ms": 0.20710984999999998,
          "Dealer.socgen": 0.2114,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.206691273305447,
          "Dealer.hsbc": 0.20600010000000002
        }
      },
      {
        "Name": "SMI_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2168,
          "BMComputed@T": 0.20722244330916698,
          "BM@T-1": 0.216,
          "BMComputed@T-1": 0.20929709787867132,
          "Dealer.ms": 0.21877025,
          "Dealer.socgen": 0.2136,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.213909359006968,
          "Dealer.hsbc": 0.20800000000000002
        }
      },
      {
        "Name": "SMI_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.214,
          "BMComputed@T": 0.21469961417634817,
          "BM@T-1": 0.214,
          "BMComputed@T-1": 0.20918325572140684,
          "Dealer.ms": 0.2180253,
          "Dealer.socgen": 0.2197,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.210776865468008,
          "Dealer.hsbc": 0.20600010000000002
        }
      }
    ]
  },
  {
    "Index": "TPX",
    "Ticker": "EQI.TPX",
    "Spot": 1371.35,
    "VolSurfaceTime": "4/14/2016 3:15:00 PM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "220958e3-d25b-4480-b1ac-8c58455842cf",
        "MachineName": "NYFARM129",
        "ProcessId": 8444,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-13.234850\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=SocGenAsia save",
        "Description": "[VarSwapSocGen] Saving 108 points imported from Dealer run from SocGen 'AsiaRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\AsianVariance\\2016-04-14\\OutlookAttachment-SG-Asia-Equity-Derivatives@sgcib.com-20160414_043058-Bluemountain Run.xlsx]",
        "KnowledgeTime": "2016-04-14T09:50:44.5187196+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "TPX_APR16",
        "Maturity": "4/8/2016",
        "Quotes": {
          "BM@T": 0.2119,
          "BMComputed@T": 0,
          "BM@T-1": 0.2561,
          "BMComputed@T-1": 0,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_JUN16",
        "Maturity": "6/10/2016",
        "Quotes": {
          "BM@T": 0.2621585372,
          "BMComputed@T": 0.26270516485852274,
          "BM@T-1": 0.2660058465,
          "BMComputed@T-1": 0.25591265951345415,
          "Dealer.ms": 0.2690207,
          "Dealer.socgen": 0.255296374350438,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_SEP16",
        "Maturity": "9/9/2016",
        "Quotes": {
          "BM@T": 0.2670147935,
          "BMComputed@T": 0.2758402292982991,
          "BM@T-1": 0.2641,
          "BMComputed@T-1": 0.27248603823576545,
          "Dealer.ms": 0.2696531,
          "Dealer.socgen": 0.264376487064576,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_DEC16",
        "Maturity": "12/9/2016",
        "Quotes": {
          "BM@T": 0.2720973101,
          "BMComputed@T": 0.28223889781666534,
          "BM@T-1": 0.2741548206,
          "BMComputed@T-1": 0.27995457361630638,
          "Dealer.ms": 0.2755854,
          "Dealer.socgen": 0.268609220165844,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_JAN17",
        "Maturity": "1/13/2017",
        "Quotes": {
          "BM@T": 0.2725759955,
          "BMComputed@T": 0.28379309051269763,
          "BM@T-1": 0.2754792065,
          "BMComputed@T-1": 0.28221513485825739,
          "Dealer.ms": 0.27565605,
          "Dealer.socgen": 0.269495941093821,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_MAR17",
        "Maturity": "3/10/2017",
        "Quotes": {
          "BM@T": 0.2735022843,
          "BMComputed@T": 0.28464835481384587,
          "BM@T-1": 0.2765531578,
          "BMComputed@T-1": 0.28367220884202549,
          "Dealer.ms": 0.276227,
          "Dealer.socgen": 0.270777568515905,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_JUN17",
        "Maturity": "6/9/2017",
        "Quotes": {
          "BM@T": 0.2760279166,
          "BMComputed@T": 0.2834614451938513,
          "BM@T-1": 0.2778872757,
          "BMComputed@T-1": 0.28355902398307758,
          "Dealer.ms": 0.27910215000000005,
          "Dealer.socgen": 0.272953683235585,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_SEP17",
        "Maturity": "9/8/2017",
        "Quotes": {
          "BM@T": 0.27844675,
          "BMComputed@T": 0.28365395230056695,
          "BM@T-1": 0.2785,
          "BMComputed@T-1": 0.28412733789866518,
          "Dealer.ms": 0.27844674999999997,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_DEC17",
        "Maturity": "12/8/2017",
        "Quotes": {
          "BM@T": 0.2779374045,
          "BMComputed@T": 0.28442151523581083,
          "BM@T-1": 0.2792,
          "BMComputed@T-1": 0.2852647465866312,
          "Dealer.ms": 0.27983225,
          "Dealer.socgen": 0.27604255909781,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_JUN18",
        "Maturity": "6/8/2018",
        "Quotes": {
          "BM@T": 0.2785751041,
          "BMComputed@T": 0.28701027493271547,
          "BM@T-1": 0.2795,
          "BMComputed@T-1": 0.28785894607455914,
          "Dealer.ms": 0.28177684999999997,
          "Dealer.socgen": 0.27537335810437896,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_DEC18",
        "Maturity": "12/14/2018",
        "Quotes": {
          "BM@T": 0.2801647976,
          "BMComputed@T": 0.28923288030941835,
          "BM@T-1": 0.2797,
          "BMComputed@T-1": 0.28991596591195196,
          "Dealer.ms": 0.28431825,
          "Dealer.socgen": 0.276011345262056,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_JUN19",
        "Maturity": "6/14/2019",
        "Quotes": {
          "BM@T": 0.2802760317,
          "BMComputed@T": 0.29148672597547604,
          "BM@T-1": 0.2797989451,
          "BMComputed@T-1": 0.29211912103259097,
          "Dealer.ms": 0.28598845,
          "Dealer.socgen": 0.27456361335413,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_DEC19",
        "Maturity": "12/13/2019",
        "Quotes": {
          "BM@T": 0.2792181334,
          "BMComputed@T": 0.29360992884599618,
          "BM@T-1": 0.2780413657,
          "BMComputed@T-1": 0.29400532575594485,
          "Dealer.ms": 0.2872576,
          "Dealer.socgen": 0.271178666828746,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TPX_DEC20",
        "Maturity": "12/11/2020",
        "Quotes": {
          "BM@T": 0.2762851526,
          "BMComputed@T": 0.29481735884949334,
          "BM@T-1": 0.2745921778,
          "BMComputed@T-1": 0.2953717529830156,
          "Dealer.ms": 0.2845298,
          "Dealer.socgen": 0.268040505252855,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "CAC",
    "Ticker": "EQI.CAC",
    "Spot": 4511.51,
    "VolSurfaceTime": "4/14/2016 11:29:14 AM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "65f85689-aa2b-4709-aab5-cfb70b9b8660",
        "MachineName": "NYFARM094",
        "ProcessId": 18008,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-14.170901\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=SocGenEurope save",
        "Description": "[VarSwapSocGen] Saving 40 points imported from Dealer run from SocGen 'EuropeRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\EuropeanVariance\\2016-04-14\\OutlookAttachment-alexandre.veran@sgcib.com-20160414_130440-EUR EoD Var Run SG 14-04-2016.xls]",
        "KnowledgeTime": "2016-04-14T17:18:24.0295696+00:00",
        "UserName": "distributedagent"
      },
      "jpm": {
        "Id": "1e1ca6be-4afc-488a-affa-26dcd1d43285",
        "MachineName": "EDFARM160",
        "ProcessId": 67164,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-14.154242\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=JPMEurope save",
        "Description": "[VarSwapJPM] Saving 78 points imported from Dealer run from JPM [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\JPM\\BMTN Euro daily var run\\2016-04-14\\OutlookAttachment-STAREMEAPROD-Scheduler-NoReply@jpmorgan.com-20160414_120043-BMTN Euro daily var run_14Apr2016_170031.xlsx]",
        "KnowledgeTime": "2016-04-14T16:07:51.8342152+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "CAC_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.226,
          "BMComputed@T": 0.21448750124596466,
          "BM@T-1": 0.2295,
          "BMComputed@T-1": 0.21823374851731903,
          "Dealer.ms": 0.22440330000000003,
          "Dealer.socgen": 0.22760000000000002,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.218393701321075,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "DAX",
    "Ticker": "EQI.DAX",
    "Spot": 10093.65,
    "VolSurfaceTime": "4/14/2016 11:29:19 AM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "65f85689-aa2b-4709-aab5-cfb70b9b8660",
        "MachineName": "NYFARM094",
        "ProcessId": 18008,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-14.170901\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=SocGenEurope save",
        "Description": "[VarSwapSocGen] Saving 40 points imported from Dealer run from SocGen 'EuropeRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\EuropeanVariance\\2016-04-14\\OutlookAttachment-alexandre.veran@sgcib.com-20160414_130440-EUR EoD Var Run SG 14-04-2016.xls]",
        "KnowledgeTime": "2016-04-14T17:18:24.0295696+00:00",
        "UserName": "distributedagent"
      },
      "jpm": {
        "Id": "1e1ca6be-4afc-488a-affa-26dcd1d43285",
        "MachineName": "EDFARM160",
        "ProcessId": 67164,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-14.154242\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=JPMEurope save",
        "Description": "[VarSwapJPM] Saving 78 points imported from Dealer run from JPM [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\JPM\\BMTN Euro daily var run\\2016-04-14\\OutlookAttachment-STAREMEAPROD-Scheduler-NoReply@jpmorgan.com-20160414_120043-BMTN Euro daily var run_14Apr2016_170031.xlsx]",
        "KnowledgeTime": "2016-04-14T16:07:51.8342152+00:00",
        "UserName": "distributedagent"
      },
      "hsbc": {
        "Id": "35f5fc90-f9ad-4dc0-9e9b-be42a834f79f",
        "MachineName": "EDFARM181",
        "ProcessId": 71976,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-14 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-14T14:00:12.4603687+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "DAX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.2269014981,
          "BMComputed@T": 0.21557023656703925,
          "BM@T-1": 0.2288562449,
          "BMComputed@T-1": 0.22017894334716454,
          "Dealer.ms": 0.2201532,
          "Dealer.socgen": 0.2284,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.225304494334508,
          "Dealer.hsbc": 0.22699999999999998
        }
      },
      {
        "Name": "DAX_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2553883857,
          "BMComputed@T": 0.23900293274386458,
          "BM@T-1": 0.2547335299,
          "BMComputed@T-1": 0.24175681297250071,
          "Dealer.ms": 0.24651835,
          "Dealer.socgen": 0.25680000000000003,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.254365156984998,
          "Dealer.hsbc": 0.255
        }
      },
      {
        "Name": "DAX_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2624864511,
          "BMComputed@T": 0.24478794649096908,
          "BM@T-1": 0.2606918132,
          "BMComputed@T-1": 0.24403186740591615,
          "Dealer.ms": 0.25602405000000006,
          "Dealer.socgen": 0.26280000000000003,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.262659403282457,
          "Dealer.hsbc": 0.26199995
        }
      },
      {
        "Name": "DAX_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2613968027,
          "BMComputed@T": 0.24858253634538624,
          "BM@T-1": 0.2616069399,
          "BMComputed@T-1": 0.247246515090864,
          "Dealer.ms": 0.26063975,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.26155065801012,
          "Dealer.hsbc": 0.262
        }
      },
      {
        "Name": "DAX_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2654117128,
          "BMComputed@T": 0.24811896236852746,
          "BM@T-1": 0.2658026152,
          "BMComputed@T-1": 0.24579822207598204,
          "Dealer.ms": 0.2651367,
          "Dealer.socgen": 0.26739999999999997,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.265110251298269,
          "Dealer.hsbc": 0.2639999
        }
      },
      {
        "Name": "DAX_SEP17",
        "Maturity": "9/15/2017",
        "Quotes": {
          "BM@T": 0.2665915026,
          "BMComputed@T": 0.24560361243624368,
          "BM@T-1": 0.2666211492,
          "BMComputed@T-1": 0.25136204787965843,
          "Dealer.ms": 0.2670626,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.266120405194164,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "DAX_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2703,
          "BMComputed@T": 0.24381838063011846,
          "BM@T-1": 0.2673,
          "BMComputed@T-1": 0.25644002057041443,
          "Dealer.ms": 0.2698785,
          "Dealer.socgen": 0.26890000000000003,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.268029611475169,
          "Dealer.hsbc": 0.267
        }
      },
      {
        "Name": "DAX_JUN18",
        "Maturity": "6/15/2018",
        "Quotes": {
          "BM@T": 0.27,
          "BMComputed@T": 0.25599989204396162,
          "BM@T-1": 0.2682,
          "BMComputed@T-1": 0.2319330115304141,
          "Dealer.ms": 0.2823235,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.265767530055234,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "DAX_DEC18",
        "Maturity": "12/21/2018",
        "Quotes": {
          "BM@T": 0.273,
          "BMComputed@T": 0.25803093869846921,
          "BM@T-1": 0.272,
          "BMComputed@T-1": 0.21933992450869921,
          "Dealer.ms": 0.28925725,
          "Dealer.socgen": 0.2737,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.265536619004303,
          "Dealer.hsbc": 0.273
        }
      },
      {
        "Name": "DAX_JUN19",
        "Maturity": "6/21/2019",
        "Quotes": {
          "BM@T": 0.284,
          "BMComputed@T": 0.26030278060004725,
          "BM@T-1": 0.2749,
          "BMComputed@T-1": 0.22006584700341655,
          "Dealer.ms": 0.2853112,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "DAX_DEC19",
        "Maturity": "12/20/2019",
        "Quotes": {
          "BM@T": 0.2809,
          "BMComputed@T": 0.26264438664024253,
          "BM@T-1": 0.278809575,
          "BMComputed@T-1": 0.22077975761517782,
          "Dealer.ms": 0.280172,
          "Dealer.socgen": 0.2822,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.28500000000000003
        }
      }
    ]
  },
  {
    "Index": "HSCEI",
    "Ticker": "EQI.HSCEI",
    "Spot": 9237.9,
    "VolSurfaceTime": "4/14/2016 4:00:00 PM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "220958e3-d25b-4480-b1ac-8c58455842cf",
        "MachineName": "NYFARM129",
        "ProcessId": 8444,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-13.234850\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=SocGenAsia save",
        "Description": "[VarSwapSocGen] Saving 108 points imported from Dealer run from SocGen 'AsiaRun' [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\SocGen\\AsianVariance\\2016-04-14\\OutlookAttachment-SG-Asia-Equity-Derivatives@sgcib.com-20160414_043058-Bluemountain Run.xlsx]",
        "KnowledgeTime": "2016-04-14T09:50:44.5187196+00:00",
        "UserName": "distributedagent"
      },
      "jpm": {
        "Id": "524138d9-bef4-4aff-92b3-3d4d08932be9",
        "MachineName": "EDFARM160",
        "ProcessId": 7696,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-13.234850\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=JPMAsia save",
        "Description": "[VarSwapJPM] Saving 52 points imported from Dealer run from JPM [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\JPM\\BMTN Asia daily var run\\2016-04-14\\OutlookAttachment-STAREMEAPROD-Scheduler-NoReply@jpmorgan.com-20160414_050033-BMTN Asia daily var run_14Apr2016_100022.xlsx]",
        "KnowledgeTime": "2016-04-14T10:00:10.7519459+00:00",
        "UserName": "distributedagent"
      },
      "hsbc": {
        "Id": "35f5fc90-f9ad-4dc0-9e9b-be42a834f79f",
        "MachineName": "EDFARM181",
        "ProcessId": 71976,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-14 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-14T14:00:12.4603687+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "HSCEI_APR16",
        "Maturity": "4/28/2016",
        "Quotes": {
          "BM@T": 0.3024348257,
          "BMComputed@T": 0.27434417594027954,
          "BM@T-1": 0.2907,
          "BMComputed@T-1": 0.2626093502433724,
          "Dealer.ms": 0,
          "Dealer.socgen": 0.291111583387884,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.275449183737529,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "HSCEI_JUN16",
        "Maturity": "6/29/2016",
        "Quotes": {
          "BM@T": 0.3007915012,
          "BMComputed@T": 0.28424127226833112,
          "BM@T-1": 0.299035253,
          "BMComputed@T-1": 0.282485024023829,
          "Dealer.ms": 0.29181915,
          "Dealer.socgen": 0.287446850829969,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.289605864934293,
          "Dealer.hsbc": 0.2997
        }
      },
      {
        "Name": "HSCEI_SEP16",
        "Maturity": "9/29/2016",
        "Quotes": {
          "BM@T": 0.3089739584,
          "BMComputed@T": 0.301079907237184,
          "BM@T-1": 0.3082536704,
          "BMComputed@T-1": 0.30035961922879911,
          "Dealer.ms": 0.30382855,
          "Dealer.socgen": 0.301198828087544,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.305135333945895,
          "Dealer.hsbc": 0.3115
        }
      },
      {
        "Name": "HSCEI_DEC16",
        "Maturity": "12/29/2016",
        "Quotes": {
          "BM@T": 0.3181419356,
          "BMComputed@T": 0.322192584066057,
          "BM@T-1": 0.3180728133,
          "BMComputed@T-1": 0.32212346173715134,
          "Dealer.ms": 0.31640769999999996,
          "Dealer.socgen": 0.313104558196338,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.314264014646066,
          "Dealer.hsbc": 0.3199
        }
      },
      {
        "Name": "HSCEI_MAR17",
        "Maturity": "3/30/2017",
        "Quotes": {
          "BM@T": 0.3188168142,
          "BMComputed@T": 0.326512180787829,
          "BM@T-1": 0.3202224575,
          "BMComputed@T-1": 0.3279178240666038,
          "Dealer.ms": 0.31874250000000004,
          "Dealer.socgen": 0.32068906600220304,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.319198968077223,
          "Dealer.hsbc": 0.3269
        }
      },
      {
        "Name": "HSCEI_JUN17",
        "Maturity": "6/29/2017",
        "Quotes": {
          "BM@T": 0.3241411278,
          "BMComputed@T": 0.33019309372400724,
          "BM@T-1": 0.3255755565,
          "BMComputed@T-1": 0.33162752244936677,
          "Dealer.ms": 0.32398899999999997,
          "Dealer.socgen": 0.325531437876867,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.323414222472804,
          "Dealer.hsbc": 0.3299
        }
      },
      {
        "Name": "HSCEI_DEC17",
        "Maturity": "12/28/2017",
        "Quotes": {
          "BM@T": 0.3281,
          "BMComputed@T": 0.32934169091329318,
          "BM@T-1": 0.3322582786,
          "BMComputed@T-1": 0.33074825801736218,
          "Dealer.ms": 0.33455685,
          "Dealer.socgen": 0.33113830697151897,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.331865446280972,
          "Dealer.hsbc": 0.33590005
        }
      },
      {
        "Name": "HSCEI_MAR18",
        "Maturity": "3/28/2018",
        "Quotes": {
          "BM@T": 0.3347315684,
          "BMComputed@T": 0.32808796029893023,
          "BM@T-1": 0.335772738,
          "BMComputed@T-1": 0.32912912990721355,
          "Dealer.ms": 0.3387558,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.33496954336115,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "IBEX",
    "Ticker": "EQI.IBEX",
    "Spot": 8861.5,
    "VolSurfaceTime": "4/14/2016 11:35:00 AM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      }
    },
    "Observables": [
      {
        "Name": "IBEX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.27180003,
          "BMComputed@T": 0.25886706853573338,
          "BM@T-1": 0.2640122411,
          "BMComputed@T-1": 0.25107927960424076,
          "Dealer.ms": 0.24682915,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "NDX",
    "Ticker": "EQI.NDX",
    "Spot": 4554.625,
    "VolSurfaceTime": "4/14/2016 4:15:51 PM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:34.1112988+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "35f5fc90-f9ad-4dc0-9e9b-be42a834f79f",
        "MachineName": "EDFARM181",
        "ProcessId": 71976,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-14 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-14T14:00:12.4603687+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "NDX_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1818457805,
          "BMComputed@T": 0.17810155358854129,
          "BM@T-1": 0.1828,
          "BMComputed@T-1": 0.17905577306286158,
          "Dealer.ms": 0.19108745,
          "Dealer.socgen": 0.188039,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.188
        }
      },
      {
        "Name": "NDX_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2038501165,
          "BMComputed@T": 0.20194719227062224,
          "BM@T-1": 0.2035,
          "BMComputed@T-1": 0.20159707576217578,
          "Dealer.ms": 0.20987250000000002,
          "Dealer.socgen": 0.20902099999999998,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.211
        }
      },
      {
        "Name": "NDX_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.225380683,
          "BMComputed@T": 0.2124623769279253,
          "BM@T-1": 0.2255,
          "BMComputed@T-1": 0.21258169389449633,
          "Dealer.ms": 0.21952895,
          "Dealer.socgen": 0.2187141,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22300005
        }
      },
      {
        "Name": "NDX_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2272773992,
          "BMComputed@T": 0.22053327452430702,
          "BM@T-1": 0.2267565161,
          "BMComputed@T-1": 0.22001239143641874,
          "Dealer.ms": 0.2285395,
          "Dealer.socgen": 0.22806705,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.23199999999999998
        }
      },
      {
        "Name": "NDX_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2291695308,
          "BMComputed@T": 0.22846153230953539,
          "BM@T-1": 0.2295665557,
          "BMComputed@T-1": 0.22885855725669088,
          "Dealer.ms": 0.23366045,
          "Dealer.socgen": 0.232804,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.238
        }
      },
      {
        "Name": "NDX_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2397560395,
          "BMComputed@T": 0.23882033797819266,
          "BM@T-1": 0.2398867178,
          "BMComputed@T-1": 0.23895101623857481,
          "Dealer.ms": 0.24416,
          "Dealer.socgen": 0.23776695,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.2460001
        }
      }
    ]
  },
  {
    "Index": "RTY",
    "Ticker": "EQI.RTY",
    "Spot": 1128.589,
    "VolSurfaceTime": "4/14/2016 4:14:24 PM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      },
      "socgen": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:34.1112988+00:00",
        "UserName": "jhorowitz"
      },
      "hsbc": {
        "Id": "35f5fc90-f9ad-4dc0-9e9b-be42a834f79f",
        "MachineName": "EDFARM181",
        "ProcessId": 71976,
        "CommandLine": "C:\\bmflow\\BloombergSync\\2016-04-11.212346\\x64\\BloombergSync.exe --date 2016-04-14 --request EquityVarSwapPrices",
        "Description": "EquityVarSwapPrices",
        "KnowledgeTime": "2016-04-14T14:00:12.4603687+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "RTY_JUN16",
        "Maturity": "6/17/2016",
        "Quotes": {
          "BM@T": 0.1945893287,
          "BMComputed@T": 0.19221708146068509,
          "BM@T-1": 0.1923,
          "BMComputed@T-1": 0.18992775280929444,
          "Dealer.ms": 0.19659305,
          "Dealer.socgen": 0.20233605000000002,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.197
        }
      },
      {
        "Name": "RTY_SEP16",
        "Maturity": "9/16/2016",
        "Quotes": {
          "BM@T": 0.2239649472,
          "BMComputed@T": 0.21762736088653797,
          "BM@T-1": 0.2206,
          "BMComputed@T-1": 0.21426241366695906,
          "Dealer.ms": 0.22028465000000003,
          "Dealer.socgen": 0.22578399999999998,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.21700005
        }
      },
      {
        "Name": "RTY_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.2330836771,
          "BMComputed@T": 0.22330160033424346,
          "BM@T-1": 0.2326958823,
          "BMComputed@T-1": 0.22291380550949288,
          "Dealer.ms": 0.2347515,
          "Dealer.socgen": 0.234192,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.22900005
        }
      },
      {
        "Name": "RTY_MAR17",
        "Maturity": "3/17/2017",
        "Quotes": {
          "BM@T": 0.2374488155,
          "BMComputed@T": 0.23217138240989982,
          "BM@T-1": 0.2365749341,
          "BMComputed@T-1": 0.2312975009884225,
          "Dealer.ms": 0.23956125,
          "Dealer.socgen": 0.23878,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.23600010000000002
        }
      },
      {
        "Name": "RTY_JUN17",
        "Maturity": "6/16/2017",
        "Quotes": {
          "BM@T": 0.2419960109,
          "BMComputed@T": 0.239594623829559,
          "BM@T-1": 0.2409403445,
          "BMComputed@T-1": 0.23853895742764547,
          "Dealer.ms": 0.2452428,
          "Dealer.socgen": 0.244031,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.243
        }
      },
      {
        "Name": "RTY_DEC17",
        "Maturity": "12/15/2017",
        "Quotes": {
          "BM@T": 0.2584209649,
          "BMComputed@T": 0.25103543888593594,
          "BM@T-1": 0.2578,
          "BMComputed@T-1": 0.250414474012333,
          "Dealer.ms": 0.2577039,
          "Dealer.socgen": 0.25309499999999996,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0.2539999
        }
      }
    ]
  },
  {
    "Index": "SX7E",
    "Ticker": "EQI.SX7E",
    "Spot": 105.03,
    "VolSurfaceTime": "4/14/2016 11:29:14 AM",
    "Metadata": {
      "jpm": {
        "Id": "1e1ca6be-4afc-488a-affa-26dcd1d43285",
        "MachineName": "EDFARM160",
        "ProcessId": 67164,
        "CommandLine": "C:\\bmflow\\MiniApp\\2016-04-14.154242\\x64\\MiniApp.exe VarSwapCatalog date=2016-04-14 runname=JPMEurope save",
        "Description": "[VarSwapJPM] Saving 78 points imported from Dealer run from JPM [parsing XL file=\\\\bcna.corp\\dfs\\DATA_IMPORTS$\\JPM\\BMTN Euro daily var run\\2016-04-14\\OutlookAttachment-STAREMEAPROD-Scheduler-NoReply@jpmorgan.com-20160414_120043-BMTN Euro daily var run_14Apr2016_170031.xlsx]",
        "KnowledgeTime": "2016-04-14T16:07:51.8342152+00:00",
        "UserName": "distributedagent"
      }
    },
    "Observables": [
      {
        "Name": "SX7E_APR16",
        "Maturity": "4/15/2016",
        "Quotes": {
          "BM@T": 0.2873579478,
          "BMComputed@T": 0.3063909665308075,
          "BM@T-1": 0.3392364313,
          "BMComputed@T-1": 0.35826945005786087,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.214624530107584,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "SX7E_DEC16",
        "Maturity": "12/16/2016",
        "Quotes": {
          "BM@T": 0.3754992465,
          "BMComputed@T": 0.38889530861813076,
          "BM@T-1": 0.3705582356,
          "BMComputed@T-1": 0.38395429775228312,
          "Dealer.ms": 0,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0.373873962229302,
          "Dealer.hsbc": 0
        }
      }
    ]
  },
  {
    "Index": "TWSE",
    "Ticker": "EQI.TWSE",
    "Spot": 8667.71,
    "VolSurfaceTime": "4/14/2016 1:45:00 PM",
    "Metadata": {
      "ms": {
        "Id": "cca7decb-1e1c-499f-af29-09a542372ae0",
        "MachineName": "BC416",
        "ProcessId": 15556,
        "CommandLine": "D:\\dev\\p4v\\src\\BloombergSync\\App\\bin\\x64\\Debug\\BloombergSync.exe --date 2016-4-14 --request EquityVarSwapPrices --location Local",
        "Description": "Import from Bloomberg (EquityVarSwapPrices)",
        "KnowledgeTime": "2016-04-14T20:25:33.913279+00:00",
        "UserName": "jhorowitz"
      }
    },
    "Observables": [
      {
        "Name": "TWSE_JUN16",
        "Maturity": "6/15/2016",
        "Quotes": {
          "BM@T": 0.1715872673,
          "BMComputed@T": 0.17608150306016293,
          "BM@T-1": 0.1727179034,
          "BMComputed@T-1": 0.17721213919669224,
          "Dealer.ms": 0.17492485000000002,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TWSE_SEP16",
        "Maturity": "9/21/2016",
        "Quotes": {
          "BM@T": 0.1964927274,
          "BMComputed@T": 0.19545313013509641,
          "BM@T-1": 0.197269788,
          "BMComputed@T-1": 0.196230190714737,
          "Dealer.ms": 0.20010465,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TWSE_DEC16",
        "Maturity": "12/21/2016",
        "Quotes": {
          "BM@T": 0.2123681989,
          "BMComputed@T": 0.19871539888530876,
          "BM@T-1": 0.2129435241,
          "BMComputed@T-1": 0.19929072403756826,
          "Dealer.ms": 0.21890475,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      },
      {
        "Name": "TWSE_MAR17",
        "Maturity": "3/15/2017",
        "Quotes": {
          "BM@T": 0.2210863322,
          "BMComputed@T": 0.20045972981459817,
          "BM@T-1": 0.2215879544,
          "BMComputed@T-1": 0.20096135201360235,
          "Dealer.ms": 0.22297050000000002,
          "Dealer.socgen": 0,
          "Dealer.ml": 0,
          "Dealer.jpm": 0,
          "Dealer.hsbc": 0
        }
      }
    ]
  }
]


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// COPY PASTE DUMMY DATA HERE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
})


}
;


} );
