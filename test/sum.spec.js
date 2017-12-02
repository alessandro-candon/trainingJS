let chai = require('chai'),
    path = require('path');

chai.should();

let Calculator = require(path.join(__dirname, '..','web', 'calculator'));



describe('Calculator', () => {
    describe('sum', () => {
        let calculator;
        calculator = new Calculator();

        it('sum 1 1 should be equal 2', function() {
            let sum = calculator.sum(1,1);
            sum.should.equal(2)
        });
    })
});