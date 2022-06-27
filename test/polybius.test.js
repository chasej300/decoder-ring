const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("testing encoding", () => {
    it("translate i to 42", () => {
        const expected = "42";
        const actual = polybius("i");
        expect(actual).to.be.equal(expected);
    });
    it("translate j to 42", () => {
        const expected = "42";
        const actual = polybius("j");
        expect(actual).to.be.equal(expected);
    });
    it("translate 42 to (i/j)", () => {
        const expected = "(i/j)";
        const actual = polybius("42", false);
        expect(actual).to.be.equal(expected);
    });
    it ("ignores capital letters", () => {
        const expected = polybius("a message");
        const actual = polybius("A Message");
        expect(actual).to.be.equal(expected);
    });
    it("keeps spaces while encoding", () => {
        const expected = "11 11";
        const actual = polybius("a a");
        expect(actual).to.be.equal(expected);
    });
    it("keeps spaces aftrer encoding", () => {
        const expected = "a a";
        const actual = polybius("11 11", false);
        expect(actual).to.be.equal(expected);
    });
});