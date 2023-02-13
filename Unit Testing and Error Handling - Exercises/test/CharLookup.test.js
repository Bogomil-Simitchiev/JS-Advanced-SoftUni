const lookupChar = require('../CharLookup');
const assert = require('assert').strict;

describe('CharLookup TESTS', () => {
    it('Checks if type of string and index are undefined', () => {

        assert.equal(lookupChar(1, 1), undefined);
        assert.equal(lookupChar(1, 's'), undefined);
        assert.equal(lookupChar('str', 's'), undefined);
        assert.equal(lookupChar("pers", 1.4), undefined);


    })
    it('Checks if index is outside the bound', () => {
        assert.equal(lookupChar("string", -1), 'Incorrect index');
        assert.equal(lookupChar("string", 6), 'Incorrect index');

    })
    it('Checks if current examples are correct', () => {
        assert.equal(lookupChar('str', 0), 's');
        assert.equal(lookupChar('string', 3), 'i');
        assert.equal(lookupChar('str', 2), 'r');

    })
})
