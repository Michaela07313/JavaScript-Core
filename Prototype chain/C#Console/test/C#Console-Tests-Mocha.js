let expect = require('chai').expect;
let Console = require('../C#Console.js').Console;

describe("Tests - Console", function () {
   it("should return the same string for single string argument", function () {
       let string = "Test string input";
       expect(Console.writeLine(string)).to.equal(string);
   });

    it("should return the JSON representation of the passed single argument as an object", function () {
       let inputArgument = {name: 'Mishi'};
       expect(Console.writeLine(inputArgument)).to.equal(JSON.stringify(inputArgument));
   });

    it("If multiple arguments are passed, but the first is not a string - throw a TypeError", function () {
       expect(Console.writeLine(1,'fggrg',2,3)).to.throw(TypeError);
    });

    it("If the number of parameters does not correspond to the number of placeholders in the template string - throw a RangeError", function () {
       let string = "This {0} should {1} replaced.";
       expect(Console.writeLine(string, 'test')).to.throw(RangeError);
    });

    it("If the placeholders have indexes not withing the parameters range - throw a RangeError.", function () {
       let string = "This {0} should {13} replaced.";
       expect(Console.writeLine(string, 'test', 'test2')).to.throw(RangeError);
    });

    it("if multiple arguments are passed and the first is a string, find all placeholders from the string and exchange them with the supplied parameters.", function () {
       let string = "This {0} should {1} replaced.";
       expect(Console.writeLine(string, 'test', 'test2')).to.equal('This test should test2 replaced.');
    });

    it("should throw error if place of placeholders is changed", function () {
        let string = "This {0} should {0} replaced.";
        expect(() => Console.writeLine(string, "one", "be")).to.throw(RangeError);
    });

    it("should throw error if no arguments were given", function () {
        expect(() => Console.writeLine()).to.throw(TypeError);
    });

    it("should recognize the placeholder numbers well", function () {
        expect(() => Console.writeLine("Not {10}", "valid")).to.throw(RangeError);
    });

    it("should throw error if placeholders are less than arguments", function () {
        let string = "This {0} should {1} replaced.";
        expect(() => Console.writeLine(string, "one", "be", "three")).to.throw(RangeError);
    });
});