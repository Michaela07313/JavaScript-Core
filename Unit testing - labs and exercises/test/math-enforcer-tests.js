let expect = require('chai').expect;
let mathEnforcer = require('../MathEnforcer.js').mathEnforcer;

describe('Math enforcer test', function() {
    describe('addFive', function() {
        it('return undefined when the parameter is not a number', function() {
            let expectedResult = undefined;
            let actualResult = mathEnforcer.addFive('dfgg');
            expect(actualResult).to.be.equal(expectedResult);
        });

        it('return correct result when the parameter is a number', function() {
            let expectedResult = 20;
            let actualResult = mathEnforcer.addFive(15);
            expect(actualResult).to.be.equal(expectedResult);
        });

        it('return correct result when the parameter is a negative number', function() {
            let expectedResult = -10;
            let actualResult = mathEnforcer.addFive(-15);
            expect(actualResult).to.be.equal(expectedResult);
        });

        it('return correct result when the parameter is a floating number', function() {
            let expectedResult = 3.5;
            let actualResult = mathEnforcer.addFive(-1.5);
            expect(actualResult).to.be.equal(expectedResult);
        });
    })

    describe('subtractTen', function() {
        it('return undefined when the parameter is not a number', function() {
            let expectedResult = undefined;
            let actualResult = mathEnforcer.subtractTen('dfgg');
            expect(actualResult).to.be.equal(expectedResult);
        });

        it('return correct result when the parameter is a number', function() {
            let expectedResult = 5;
            let actualResult = mathEnforcer.subtractTen(15);
            expect(actualResult).to.be.equal(expectedResult);
        });

        it('return correct result when the parameter is a negative number', function() {
            let expectedResult = -25;
            let actualResult = mathEnforcer.subtractTen(-15);
            expect(actualResult).to.be.equal(expectedResult);
        });

        it('return correct result when the parameter is a floating point number', function() {
            let expectedResult = -11.5;
            let actualResult = mathEnforcer.subtractTen(-1.5);
            expect(actualResult).to.be.equal(expectedResult);
        });
    })

    describe('sum', function() {
        it('return undefined when the parameter is not a number', function() {
            let expectedResult = undefined;
            let actualResult = mathEnforcer.sum('dfgg',2);
            expect(actualResult).to.be.equal(expectedResult);
        });

        it('return undefined when the parameter is not a number', function() {
            let expectedResult = undefined;
            let actualResult = mathEnforcer.sum(15,'esfewf');
            expect(actualResult).to.be.equal(expectedResult);
        });

        it('return correct result when the parameters are numbers', function() {
            let expectedResult = 10;            
            let actualResult = mathEnforcer.sum(5,5);
            expect(actualResult).to.be.equal(expectedResult);
        });

        it('return correct result when the parameters are numbers', function() {
            let expectedResult = -10;            
            let actualResult = mathEnforcer.sum(-5,-5);
            expect(actualResult).to.be.equal(expectedResult);
        });

        it('return correct result when the parameters are numbers', function() {
            let expectedResult = -10.3;            
            let actualResult = mathEnforcer.sum(-5.1,-5.2);
            expect(actualResult).to.be.equal(expectedResult);
        });
    })
})