import * as tf from '@tensorflow/tfjs';
import { expect } from 'chai';
describe(`https://js.tensorflow.org/api/latest/index.html`, () => {
    beforeAll: {
        process.on('unhandledRejection', function (err, promise) {
            console.error('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
        });
    }
    it(`tf.tensor (values, shape?, dtype?) function`, () => {
        // Pass an array of values to create a vector.
        const tfTensor = tf.tensor([1, 2, 3, 4])
        expect(tfTensor.dataSync()).to.eql(new Float32Array([1, 2, 3, 4]))
        // Pass a nested array of values to make a matrix or a higher
        // dimensional tensor.
        expect(tf.tensor([[1, 2], [3, 4]]).dataSync()).to.eql(new Float32Array(new Float32Array([1, 2, 3, 4])))
        // Pass a flat array and specify a shape yourself.
        expect(tf.tensor([1, 2, 3, 4], [2, 2]).dataSync()).to.eql(new Float32Array([1, 2, 3, 4]))
    });
});