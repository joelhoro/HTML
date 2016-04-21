describe("Utils - arrays", function() {

    beforeEach(module('utilities'));

    var _utils
    
    beforeEach(inject (function(dates,utils){
        _utils = utils;
    }));

  it("should implement basic array fns", function() {

    expect(6).toEqual([1,2,3].sum(), "Test the sum of an array");
    expect(2).toEqual( [1,2,3].avg(), "Test the average of an array");
    expect(2).toEqual( [2,null].avg(), "Test the average of an array with null values (ignored)");
    expect(1).toEqual( [2,null].avg(false), "Test the average of an array with null values (considered as zeros)"); 
    expect(3).toEqual( [6,3,9].min(), "Test the minimum of an array");
    expect(9).toEqual( [6,3,9].max(), "Test the maximum of an array");

    expect(true).toEqual( [6,3,9].contains(3), "Test array contains");
    expect(false).toEqual( [6,7,9].contains(3), "Test array contains");


    expect({a: 123}).toEqual( {a: 123}, "Test that 2 identical objects are equal");
    expect({1: "Label1", 2: "Label2"}).toEqual( [1,2].toObject(x => "Label"+x),"Test toObject with one argument");
    expect({"Label1" : 1, "Label2" : 4}).toEqual( [1,2].toObject(x => x*x, x => "Label"+x),"Test toObject with 2 arguments");
    expect({"A" : 1, "B" : 2}).toEqual( ["A","B"].toObjectWithValues([1,2]), "Test 'toObjectWithValues'");

  });

  it("should convert to object list", function() {

    var tableSpecs = [
      ["A", "B"],
      [1,2],
      [3,4],
    ];
    var table = [
      { A: 1, B: 2 },
      { A: 3, B: 4 },
      ]
    expect(table).toEqual( tableSpecs.toObjectList(), "Testing toObjectList");

    var tableSpecs2 = [
      ["A", "B"], 
      [ 1, 2 ],
      [ 3, 4, { C: 5, D: 6 }],
      [ 7 ],
      [ 8, , { B: 9 } ]
    ]

    var table2 = [
      { A: 1, B: 2 },
      { A: 3, B: 4, C: 5, D: 6 },
      { A: 7, B: undefined },
      { A: 8, B: 9 },
    ]

    expect(table2).toEqual( tableSpecs2.toObjectList(), "Testing toObjectList");

    });

});