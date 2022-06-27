const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe("Testing the caesar cipher", () =>{
    it("returns false if shift is not defined", () => {
        const expected = false;
        const actual = caesar("chase");
        expect(actual).to.be.equal(expected);
    });
    it("returns false if shift is out of bounds: above", () => {
        const expected = false;
        const actual = caesar("chase", 26);
        expect(actual).to.be.equal(expected);
    });
    it("returns false if shift is out of bounds: below", () => {
        const expected = false;
        const actual = caesar("chase", -26);
        expect(actual).to.be.equal(expected);
    });

    it("the output has no capital letters", () => {
        const expected = "wklqnixo"
        const actual = caesar("thinkful", 3);
        expect(actual).to.be.equal(expected);
    });
    it("correctly wraps around the alphabet", () =>{
        const expected = "c";
        const actual = caesar("z", 3);
        expect(actual).to.be.equal(expected);
    });
    it("maintains spaces and nonalphabetic symbols", () =>{
        const expected = "* & ^ % $ # @";
        const actual = caesar("* & ^ % $ # @", 10);
        expect(actual).to.be.equal(expected);
    })

});