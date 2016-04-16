angular.module('tests')
.service("volsurfacetests", function(utils,testscore, dates, analytics,voldata,settings,VolSurfaceCollection) { 

  function TestVolSurface() {
    testscore.SetActiveCategory("VolSurface tests");
    settings.dataMode = "local";
    settings.date = "2016-04-14";

    voldata.retrieveVolSurfaces(vs => {
        testscore.AssertEqual(22, vs.UnderliersCount(), "Check the number of underliers");
        var volSlice = [10.64, 13.7, 15.93, 17.38, 18.26, 18.84, 19.21, 19.6, 19.92, 20.06, 20.31, 20.7, 21.22, 21.65, 21.85, 21.88, 22.21, 22.49, 23.05, 23.5, 24.55];
        testscore.AssertEqual(2082.78, vs.collection["SPX"].Spot(), "Checking spot of SPX");
        testscore.AssertEqual(volSlice, vs.collection["SPX"].Extract("BM@T"), "Check a volslice of SPX" );
        var volSliceDealers = [10.64, 13.7, 15.93, 17.38, 18.26, 18.84, 19.21, 19.6, 19.92, 20.07, 20.31, 20.7, 21.22, 21.65, 21.85, 21.88, 22.22, 22.49, 23.05, 23.49, 24.55];
        testscore.AssertEqual(volSliceDealers, vs.collection["SPX"].Extract("Dealer.avg"), "Check a volslice of SPX (dealers)" );

        testscore.AssertEqual(0, vs.ChangesCount("SPX"), "Checking that number of changes=");
        vs.collection["SPX"].volSurface.Observables[4].Quotes["BM@T"] = 0.19
        vs.CalculateChanges();
        var changes = {obs: "AUG16", diff: "18.26%->19%"};
        testscore.AssertEqual(1, vs.ChangesCount("SPX"), "Checking that number of changes=");
        testscore.AssertEqual(changes, vs.changesStored["SPX"][0], "Testing volsurface changes");
    } );
    // AssertEqual(21, volSurface.Points(), "Testing the number of points on the surface");
    // AssertEqual("Aug16", volSurface.TenorLabels()[4], "Testing the tenor labels")
  }





  return { Test: TestVolSurface };
} );