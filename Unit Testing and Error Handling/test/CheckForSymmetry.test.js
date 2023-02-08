const assert = require('assert').strict;

const isSymmetric = require('../CheckForSymmetry');

describe('CheckForSymmetry TESTS', () => {
    it('should return false for non-array inputs', () => {
        assert.strictEqual(isSymmetric('not an array'), false);
        assert.strictEqual(isSymmetric(123), false);
        assert.strictEqual(isSymmetric({}), false);
    });

    it('should return true for symmetric arrays', () => {
        assert.strictEqual(isSymmetric([1, 2, 3, 2, 1]), true);
        assert.strictEqual(isSymmetric([]), true);
    });

    it('should return false for non-symmetric arrays', () => {
        assert.strictEqual(isSymmetric([1, 2, 3, 4, 5]), false);
        assert.strictEqual(isSymmetric([1, 2, 3, 2, 4]), false);
    });
})