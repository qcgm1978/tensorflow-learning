import { expect } from 'chai';
import * as math from 'mathjs'
describe(``, () => {
    beforeAll: {
        process.on('unhandledRejection', function (err, promise) {
            console.error('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
        });
    }
    it(`The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (2^53 - 1).`, () => {
        expect(Number.MAX_SAFE_INTEGER).to.equal(Math.pow(2, 53) - 1)
    });
    it(``, () => {
        // load math.js
        var math = require('mathjs');

        // functions and constants
        math.round(math.e, 3);            // 2.718
        math.atan2(3, -3) / math.pi;      // 0.75
        math.log(10000, 10);              // 4
        math.sqrt(-4);                    // 2i
        math.pow([[-1, 2], [3, 1]], 2);   // [[7, 0], [0, 7]]
        math.derivative('x^2 + x', 'x');  // 2 * x + 1

        // expressions
        math.eval('12 / (2.3 + 0.7)');    // 4
        math.eval('12.7 cm to inch');     // 5 inch
        math.eval('sin(45 deg) ^ 2');     // 0.5
        math.eval('9 / 3 + 2i');          // 3 + 2i
        math.eval('det([-1, 2; 3, 1])');  // -7

        // chaining
        expect(math.chain(3)
            .add(4)
            .multiply(2)
            .done()).to.equal(14); // 14
    });
    describe(`http://mathjs.org/docs/expressions/algebra.html`, () => {
        it(`The function math.simplify simplifies an expression tree:`, () => {
            expect(math.simplify('3 + 2 / 4').toString()).to.equal('7 / 2');             // '7 / 2'
            expect(math.simplify('2x + 3x').toString()).to.equal('5 * x');               // '5 * x'
            expect(math.simplify('x^2 + x + 3 + x^2').toString()).to.equal('2 * x ^ 2 + x + 3');     // '2 * x ^ 2 + x + 3'
            expect(math.simplify('x * y * -x / (x ^ 2)').toString()).to.equal('-y');  // '-y'
        });
    });
});