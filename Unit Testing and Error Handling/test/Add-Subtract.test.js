const assert = require('assert').strict;

const createCalculator = require('../Add-Subtract');

describe('Add-Subtract TESTS', () => {

    let object = createCalculator();


    it('Checks if the object contains the functions - add(), subtract() and get() as properties', () => {

        assert.equal(createCalculator().hasOwnProperty('add'), true);
        assert.equal(createCalculator().hasOwnProperty('subtract'), true);
        assert.equal(createCalculator().hasOwnProperty('get'), true);
    })
    it('Checks if there is an internal sum that can\'t be modified from the outside', () => {
        let num = object.get();
        assert.equal(num, 0);
    })
    it('Checks if the example - object.add(2), object.subtract(6)', () => {

        object.add(2);
        object.subtract(6);
        let num = object.get();
        assert.equal(num, -4);
    })
    it('Checks if methods add and subtract take parameters that can\'t be parsed as a numbers', function () {

        assert.equal(object.add('hello'), undefined);
        assert.equal(object.subtract('hello'), undefined);

    })


})