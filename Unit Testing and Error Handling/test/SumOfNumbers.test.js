const assert = require('assert').strict;
const sum = require('../SumOfNumbers');


describe('SumOfNumbers TESTS', () => {
    it('Input must be array', () => {

        let isArray = Array.isArray([1, 2, 3, 4, 5]);
        assert.equal(true, isArray);
    })

    it('All elements in the array must be numbers', () => {

        let isElementNumber = true;
        let elements = [1, 2, 3, 4, 5];
        for (let element of elements) {
            if (typeof element !== 'number') {
                isElementNumber = false;
            }
        }
        assert.equal(true, isElementNumber);
    })
    it('Equal sum of elements', () => {

        let elements = [1, 2, 3, 4, 5];

        let actualSumOfElements = sum(elements);
        let expectedSum = 15;

        assert.equal(actualSumOfElements, expectedSum);
    })

})
