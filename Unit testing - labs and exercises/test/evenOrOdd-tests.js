let expect = require('chai').expect;
let isOddOrEven = require('../EvenOrOdd.js').isOddOrEven;

describe('Test group #1', function() {
    it('return undefined when the parameter is a number', function() {
        let expectedResult = undefined;
        let actualResult = isOddOrEven(1);
        expect(actualResult).to.be.equal(expectedResult);
    });

    it('return undefined when the parameter is an object', function() {
        let expectedResult = undefined;
        let actualResult = isOddOrEven({name: 'mishi'});
        expect(actualResult).to.be.equal(expectedResult);
    });

    it('return correct result if even length string', function() {
        let expectedResult = 'even';
        let actualResult = isOddOrEven('tony');
        expect(actualResult).to.be.equal(expectedResult);
    });

    it('return correct result if odd length string', function() {
        let expectedResult = 'odd';
        let actualResult = isOddOrEven('mishi');
        expect(actualResult).to.be.equal(expectedResult);
    });
})