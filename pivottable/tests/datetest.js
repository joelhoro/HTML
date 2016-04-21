describe("Utils - date", function() {

    beforeEach(module('utilities'));

    var _utils
    
    beforeEach(inject (function(dates,utils){
        _utils = utils;
    }));

  it("should compare dates", function() {

    expect("Apr").toEqual(new Date("2016-4-9").getMonthAbbr(), "Test the month abbreviation");
    expect(new Date()).toEqual(new Date(), "Test date equality");
    expect(new Date("2016-4-29")).toEqual(new Date("2016-4-19").addDays(10), "Test addDays");
    expect(0.36164).toBeCloseTo(_utils.yearFrac(new Date("2016-4-19"), new Date("2016-8-29")), 5);

  });  

  it("should allow adding week days", function() {
    expect(new Date("2016-4-15")).toEqual(new Date("2016-4-18").addWeekDays(-1), "Test addweekdays");
    expect(new Date("2016-4-15")).toEqual(new Date("2016-4-17").addWeekDays(-1), "Test addweekdays");
    expect(new Date("2016-4-15")).toEqual(new Date("2016-4-16").addWeekDays(-1), "Test addweekdays");
    expect(new Date("2016-4-14")).toEqual(new Date("2016-4-15").addWeekDays(-1), "Test addweekdays");

    expect(new Date("2016-4-18")).toEqual(new Date("2016-4-15").addWeekDays(1), "Test addweekdays");
    expect(new Date("2016-4-18")).toEqual(new Date("2016-4-16").addWeekDays(1), "Test addweekdays");
    expect(new Date("2016-4-18")).toEqual(new Date("2016-4-17").addWeekDays(1), "Test addweekdays");
    expect(new Date("2016-4-19")).toEqual(new Date("2016-4-18").addWeekDays(1), "Test addweekdays");

  });  

  it("should convert to friendly time", function() {
    var m = 1000 * 60;
    expect( "1 minute").toEqual(_utils.toFriendlyTime(m), "Testing toFriendTime");
    expect( "50 minutes").toEqual(_utils.toFriendlyTime(50*m), "Testing toFriendTime");
    expect( "8 hours").toEqual(_utils.toFriendlyTime(60*m*8), "Testing toFriendTime");
    expect( "1 day").toEqual(_utils.toFriendlyTime(60*m*27), "Testing toFriendTime");
    expect( "4 days").toEqual(_utils.toFriendlyTime(60*m*24*4), "Testing toFriendTime");
  });  
}); 
