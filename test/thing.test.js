const { thing, double } = require('../src/thing');

describe('thing', () => {
    it('should return something', () => {
        const result = thing();
        expect(result).to.equal('something');
    });
});

describe('double', () => {
    it('should double a number', () => {
        const number = chance.integer();
        const result = double(number);
        expect(result).to.equal(number * 2);
    });
});
