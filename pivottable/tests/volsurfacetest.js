describe("VolSurface", function() {

    beforeEach(module('utilities'));
    beforeEach(module('dataService'));

    var today = new Date();
    var _voldata;

    beforeEach(inject (function(settings, voldata){
        settings.dataMode = "local";
        settings.date = "2016-04-15";
        _voldata = voldata;

    }));

  it("should build from json specs", function() {
    _voldata.retrieveVolSurfaces(vs => {
        var spx = vs.collection.SPX;
        expect(22).toEqual(vs.UnderliersCount(), "Check the number of underliers");
        var volSlice = [12.35, 13.94, 15.86, 17.15, 18.19, 18.83, 19.29, 19.51, 19.93, 19.97, 20.37, 20.68, 21.25, 21.6, 21.85, 21.97, 22.33, 22.62, 23.17, 23.6, 24.53]
        expect(2080.73).toEqual(spx.Spot(), "Checking spot of SPX");
        expect(volSlice).toEqual(spx.Extract("BM@T"), "Check a volslice of SPX" );
        var volSliceDealers = [12.35,13.94,15.85,17.16,18.19,18.8,19.29,19.51,19.91,19.97,20.37,20.62,21.22,21.6,21.86,21.97,22.34,22.63,23.17,23.63,24.53];
        expect(volSliceDealers).toEqual(spx.Extract("Dealer.avg"), "Check a volslice of SPX (dealers)" );
        expect(21).toEqual(spx.Points(), "Testing the number of points on the surface");
        expect("Aug16").toEqual(spx.TenorLabels()[4], "Testing the tenor labels")
    } );
  });

  it("should figure out its changes", function() {
    _voldata.retrieveVolSurfaces(vs => {
        expect(0).toEqual(vs.ChangesCount("SPX"), "Checking that number of changes=");
        vs.collection["SPX"].volSurface.Observables[4].Quotes["BM@T"] = 0.19
        vs.CalculateChanges();
        var changes = {obs: "AUG16", diff: "18.19%->19%"};
        expect(1).toEqual( vs.ChangesCount("SPX"), "Checking that number of changes=");
        expect(changes).toEqual(vs.changesStored["SPX"][0], "Testing volsurface changes");
    } );
  });

  it("should interpolate vol at delta", function() {
    _voldata.retrieveVolSurfaces(vs => {
        var spx = vs.Get("SPX");
        var volAtDelta = spx.VolAtDeltaFn(spx.volSurface.Observables[4].Maturity);
        var vol50 = 0.14593844527438138;
        var vol45 = 0.1394839134920491;
        var correction = -0.000043020399215;
        var vol475 = (vol50+vol45)/2 + correction;

        expect(vol50).toBeCloseTo(volAtDelta(0.5), 5, "Checking vol at delta");
        expect(vol45).toEqual(volAtDelta(0.45), "Checking vol at delta");
        expect(vol475).toBeCloseTo(volAtDelta(0.475), 5, "Checking vol at delta");
    } );
  });

});
