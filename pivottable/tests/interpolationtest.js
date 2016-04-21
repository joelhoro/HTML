describe("Utils - interpolation", function() {

    beforeEach(module('utilities'));

    var _analytics;
    var curve = {};
    var today = new Date();
    var m1, m2, m3
    
    beforeEach(inject (function(analytics){
        _analytics = analytics;
        m1=today.addDays(30);
        m2=today.addDays(60);
        m3=today.addDays(45);
        curve[m1] = 1;
        curve[m2] = 2;

    }));

  it("should round numbers", function() {
    expect(1.23).toEqual(1.23456.round(2));
  });

  it("should interpolate with numbers", function() {
    // interpolator with numbers
    var xs = [0,1,2];
    var ys = [0,1,4];
    var interpolator = new _analytics.interpolator(xs.toObjectWithValues(ys));
    expect(1).toEqual(interpolator(1),"Testing interpolation on constant curve at sample point");
    expect(2.3125).toEqual(interpolator(1.5),"Testing interpolation on constant curve at sample point");
  });

  it("should interpolate with dates on flat curve", function() {
    // interpolator with dates
    var flatCurve = {};
    flatCurve[m1] = 1;
    flatCurve[m2] = 1;
    m3 = today.addDays(45);

    var interpolator = new _analytics.interpolator(flatCurve);
    expect(1).toEqual(interpolator(m1));
    expect(1).toEqual(interpolator(m2),"Testing interpolation on constant curve at sample point");
    expect(1).toEqual(interpolator(m3),"Testing interpolation on constant curve at non-sample point");
  });

  it("should interpolate with dates on non flat curve", function() {


    var interpolator = new _analytics.interpolator(curve);
    expect(2).toBeCloseTo(interpolator(m2),5,"Testing interpolation at sample point");
    expect(1).toBeCloseTo(interpolator(m1),5,"Testing interpolation at sample point");
    expect(1.5).toBeCloseTo(interpolator(m3),5,"Testing interpolation at non-sample point");

  });

  it("should interpolate with dates on non flat curve with convertors", function() {
    
    var msPerYear = 1000*3600*24*365;
    var convertor = [
      (t,v)       => v*v*(t-today)/msPerYear,
      (t,totalv)  => Math.sqrt(totalv / (t - today)*msPerYear)
    ];

    var interpolator = new _analytics.interpolator(curve, convertor);
    expect(1).toBeCloseTo(interpolator(m1),5,"Testing interpolation at sample point, using convertors");
    expect(2).toBeCloseTo(interpolator(m2),5,"Testing interpolation at sample point, using convertors");
    expect(1.7320510835475713).toBeCloseTo(interpolator(m3),5,"Testing interpolation at non-sample point, using convertors");
  });  
}); 
