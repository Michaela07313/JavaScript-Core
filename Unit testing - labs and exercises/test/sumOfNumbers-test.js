let expect = require('chai').expect;
let sum = require('../SumOfNumbers.js').sum;

describe('Test group #1', function() {
    it('should return 3 when [1, 2]', function() {
        let expectedSum = 3;
        let actualSum = sum([1,2]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it('should return 1 when [1]', function() {
        let expectedSum = 1;
        let actualSum = sum([1]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it('should return 0 when empty array', function() {
        let expectedSum = 0;
        let actualSum = sum([]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it('should return NaN for invalid data', function() {
        let expectedSum = NaN;
        let actualSum = sum(['invalid data']);
        expect(actualSum).to.be.NaN;
    });
})