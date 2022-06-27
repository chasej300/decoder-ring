const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("error handling", () => {
    it("returns false if alphabet isn't exactly 26 characters long", () => {
        const toEncode = "expected";
        const alphabet = "notlongenough";
        const actual = substitution(toEncode, alphabet);
        expect(actual).to.be.false;
    });
    it("returns false if alphabet is not unique", () => {
        const toEncode = "expected";
        const alphabet = "aaaaaabbbbbcccccdddddeeeee";
        const actual = substitution(toEncode, alphabet);
        expect(actual).to.be.false;
    });
});
describe("encoding and decoding", () => {
    it("correctly translates the phrase", () => {
        const toEncode = "abcdef";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const actual = substitution(toEncode, alphabet);
        const expected = "qwerty";
        expect(actual).to.equal(expected);
    });
    it("maintains spaces after encoding", () => {
        const toEncode = "a a";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const actual = substitution(toEncode, alphabet);
        const expected = "q q";
        expect(actual).to.equal(expected);
    });
    it("maintains spaces after decoding", () => {
        const toDecode = "q q";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const actual = substitution(toDecode, alphabet, false);
        const expected = "a a";
        expect(actual).to.equal(expected);
    });
    it("ignores capital letters", () => {
        const toEncode = "A A";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const actual = substitution(toEncode, alphabet);
        const expected = "q q";
        expect(actual).to.equal(expected);
    });
});
    
