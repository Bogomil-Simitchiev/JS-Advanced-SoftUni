const rgbToHexColor = require('../RGBToHex');

const expect = require('chai').expect;

describe('RGBToHex TESTS', () => {

    it('Checks if numbers are in the range', () => {

        expect(rgbToHexColor(12, 12, 45)).to.equal('#0C0C2D');
        expect(rgbToHexColor(1, 51, 45)).to.equal('#01332D');
        expect(rgbToHexColor(1, 21, 141)).to.equal('#01158D');

    })
    it('Checks if color inputs are the expected type', () => {

        let red = 1;
        let green = 2;
        let blue = 3;
        expect(Number.isInteger(red)).to.equal(true);
        expect(Number.isInteger(green)).to.equal(true);
        expect(Number.isInteger(blue)).to.equal(true);
    })
    it('Checks if the example of (12,1,3) is equal to #0C0103', () => {

        expect(rgbToHexColor(12, 1, 3)).to.equal('#0C0103');
    })
    it('Checks if the examples of (-2,1,3), (2,-4,52) and (241,4,-56) are invalid', () => {

        expect(rgbToHexColor(-2, 1, 3)).to.equal(undefined);
        expect(rgbToHexColor(2, -4, 52)).to.equal(undefined);
        expect(rgbToHexColor(241, 4, -56)).to.equal(undefined);
    })
})