const assert = require('assert').strict;

const isOddOrEven = require('../EvenOrOdd');

describe('EvenOrOdd TESTS', () => {
    it('Checks if test type is not a string', () => {
        assert.equal(isOddOrEven(1), undefined);
        assert.equal(isOddOrEven({}), undefined);
    })
    it('Checks if current example is with even length', () => {
        assert.equal(isOddOrEven('test'), 'even');
    })
    it('Checks if current example is with odd length', () => {
        assert.equal(isOddOrEven('oddTest'), 'odd');
    })
    it('Checks different strings to ensure that program works correctly', () => {
        assert.equal(isOddOrEven('Real'), 'even');
        assert.equal(isOddOrEven('five'), 'even');
        assert.equal(isOddOrEven('four'), 'even');

        assert.equal(isOddOrEven('one'), 'odd');
        assert.equal(isOddOrEven('three'), 'odd');
        assert.equal(isOddOrEven('words'), 'odd');

    })
})