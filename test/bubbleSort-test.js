const expect = require('chai').expect
const bubbleSort = require('../bubbleSort')

describe("Bubble Sort", function() {
  context("array of two numbers", function() {
    it("can sort an array of two numbers", function() {
      var array = bubbleSort([2,1]);
      expect(array).to.deep.equal([1,2])
    });

    it("can sort the full array", function() {
      var array = bubbleSort([5,0,1,3,4,2]);
      expect(array).to.deep.equal([0,1,2,3,4,5])
    });
  });
});
