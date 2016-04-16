angular.module('tests')
.service("volsurfacetests", function(utils,testscore, dates, analytics,voldata,settings,VolSurfaceCollection) { 

  function Test() {
        settings.dataMode = "local";
        settings.date = "2016-04-15";
        TestVolSurfaceBasic();
        TestVolSurfaceChanges();
        TestVolSurfaceVolsAtDelta();
  }

  function TestVolSurfaceBasic() {
    testscore.SetActiveCategory("VolSurface tests - basic");

    voldata.retrieveVolSurfaces(vs => {
        var spx = vs.collection.SPX;
        testscore.AssertEqual(22, vs.UnderliersCount(), "Check the number of underliers");
        var volSlice = [12.35,13.94,15.86,17.15,18.19,18.83,19.29,19.51,19.93,19.97,20.37,20.68,21.25,21.6,21.85,21.97,22.33,22.62,23.17,23.6,24.53];
        testscore.AssertEqual(2080.73, spx.Spot(), "Checking spot of SPX");
        testscore.AssertEqual(volSlice, spx.Extract("BM@T"), "Check a volslice of SPX" );
        var volSliceDealers = [12.35,13.94,15.86,17.16,18.19,18.83,19.29,19.51,19.93,19.97,20.37,20.68,21.24,21.6,21.85,21.97,22.34,22.62,23.17,23.6,24.53];
        testscore.AssertEqual(volSliceDealers, spx.Extract("Dealer.avg"), "Check a volslice of SPX (dealers)" );
        testscore.AssertEqual(21, spx.Points(), "Testing the number of points on the surface");
        testscore.AssertEqual("Aug16", spx.TenorLabels()[4], "Testing the tenor labels")
    } );
  }

  function TestVolSurfaceChanges() {
    testscore.SetActiveCategory("VolSurface tests - changes");

    voldata.retrieveVolSurfaces(vs => {
        testscore.AssertEqual(0, vs.ChangesCount("SPX"), "Checking that number of changes=");
        vs.collection["SPX"].volSurface.Observables[4].Quotes["BM@T"] = 0.19
        vs.CalculateChanges();
        var changes = {obs: "AUG16", diff: "18.19%->19%"};
        testscore.AssertEqual(1, vs.ChangesCount("SPX"), "Checking that number of changes=");
        testscore.AssertEqual(changes, vs.changesStored["SPX"][0], "Testing volsurface changes");

        var spx = vs.collection["SPX"];
        var volAtDelta = spx.VolAtDeltaFn(4);
        var vol50 = 0.14593844527438138;
        var vol45 = 0.1394839134920491;
        var correction = -0.000043020399215;
        var vol475 = (vol50+vol45)/2 + correction;

        testscore.AssertEqual(vol50, volAtDelta(0.5), "Checking vol at delta");
        testscore.AssertEqual(vol45, volAtDelta(0.45), "Checking vol at delta");
        testscore.AssertEqual(vol475, volAtDelta(0.475), "Checking vol at delta");


    } );
  }

  function TestVolSurfaceVolsAtDelta() {
    testscore.SetActiveCategory("VolSurface tests - vols at delta");

    voldata.retrieveVolSurfaces(vs => {

        var spx = vs.collection["SPX"];
        var volAtDelta = spx.VolAtDeltaFn(4);
        var vol50 = 0.14593844527438138;
        var vol45 = 0.1394839134920491;
        var correction = -0.000043020399215;
        var vol475 = (vol50+vol45)/2 + correction;

        testscore.AssertEqual(vol50, volAtDelta(0.5), "Checking vol at delta");
        testscore.AssertEqual(vol45, volAtDelta(0.45), "Checking vol at delta");
        testscore.AssertEqual(vol475, volAtDelta(0.475), "Checking vol at delta");


    } );
  }

  return { Test: Test };
} );