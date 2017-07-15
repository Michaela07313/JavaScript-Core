let expect = require('chai').expect;
let lookupChar = require('../CharLookUp.js').lookupChar;

describe('CharLookup test', function() {
    it('return undefined when the first parameter is not a string', function() {
        let expectedResult = undefined;
        let actualResult = lookupChar(1,1);
        expect(actualResult).to.be.equal(expectedResult);
    });

    it('return undefined when the first parameter is not a string', function() {
        let expectedResult = undefined;
        let actualResult = lookupChar('ewfewf',1.3);
        expect(actualResult).to.be.equal(expectedResult);
    });

    it('return undefined when the second parameter is not an integer', function() {
        let expectedResult = undefined;
        let actualResult = lookupChar('sdsff','fgfhdh');
        expect(actualResult).to.be.equal(expectedResult);
    });

    it('return invalid index when the value of the index is incorrect', function() {
        let expectedResult = 'Incorrect index';
        let actualResult = lookupChar('sdsff',100);
        expect(actualResult).to.be.equal(expectedResult);
    });

    it('return invalid index when the value of the index is incorrect', function() {
        let expectedResult = 'Incorrect index';
        let actualResult = lookupChar('sdsff',-1);
        expect(actualResult).to.be.equal(expectedResult);
    });


    it('return correct result when both parameters are correct and the index is valid', function() {
        let expectedResult = 'm';
        let actualResult = lookupChar('mishi',0);
        expect(actualResult).to.be.equal(expectedResult);
    });

    it('return correct result when both parameters are correct and the index is valid', function() {
        let expectedResult = 'i';
        let actualResult = lookupChar('mishi',4);
        expect(actualResult).to.be.equal(expectedResult);
    });
})