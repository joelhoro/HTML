describe("Utils - basics", function() {

    beforeEach(module('utilities'));

    var _utils;
    
    beforeEach(inject (function(dates,utils){
        _utils = utils;
    }));

  it("should implement some basic fns", function() {

    expect(2.23).toEqual(1.23456.round(2), "Test rounding");

    expect(3).toEqual([ x = 1, x.capfloor(3,8) ][1], "Test capfloor");
    expect(5).toEqual([ x = 5, x.capfloor(3,8) ][1], "Test capfloor");
    expect(8).toEqual([ x = 12, x.capfloor(3,8) ][1], "Test capfloor");
    var a = {a:{b:[1,2,3], c: [1, { d : [2,3]}]}};
    var b = {a:{b:[1,2,3], c: [1, { d : [2,5]}]}};
    expect(a).toEqual(_utils.clone(a), "Test cloning object");
    //expect(a).toNotEqual(_utils.clone(b), "Test cloning object");
  });  

}); 

