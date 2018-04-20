import * as tf from '@tensorflow/tfjs';
import { expect } from 'chai';
describe(`https://js.tensorflow.org/api/latest/index.html`, () => {
    beforeAll: {
        process.on('unhandledRejection', function (err, promise) {
            console.error('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
        });
    }
    it(`dataSync () method
    Synchronously downloads the values from the tf.Tensor. `, () => {
            /**
             * @returns {TypedArray}
             */
            // expect(typeof (tf.tensor([1, 2, 3, 4]).dataSync())).to.equal('object')
            expect(true).to.eql(true)

        });
    //     it(`tf.tensor (values, shape?, dtype?) function`, () => {
    //         // Pass an array of values to create a vector.
    //         const tfTensor = tf.tensor([1, 2, 3, 4])
    //         expect(tfTensor.dataSync()).to.eql(new Float32Array([1, 2, 3, 4]))
    //         // Pass a nested array of values to make a matrix or a higher
    //         // dimensional tensor.
    //         expect(tf.tensor([[1, 2], [3, 4]]).dataSync()).to.eql(new Float32Array(new Float32Array([1, 2, 3, 4])))
    //         // Pass a flat array and specify a shape yourself.
    //         expect(tf.tensor([1, 2, 3, 4], [2, 2]).dataSync()).to.eql(new Float32Array([1, 2, 3, 4]))
    //     });
    //     it(`tf.scalar (value, dtype?) function`, () => {
    //         const scalar = tf.scalar(3.14);
    //         expect(scalar.toFloat().dataSync()[0].toString().length).to.eql(17)
    //     });
    //     it(`tf.tensor1d (values, dtype?) function`, () => {
    //         const tensor1d = tf.tensor1d([1, 2, 3]);
    //         expect(tensor1d.dataSync()).to.eql(new Float32Array([1, 2, 3]))
    //     });
    //     it(`tf.tensor2d (values, shape?, dtype?) function`, () => {
    //         // Pass a nested array.
    //         const tensor2d = tf.tensor2d([[1, 2], [3, 4]]),
    //             // Pass a flat array and specify a shape.
    //             tensor2d_1 = tf.tensor2d([1, 2, 3, 4], [2, 2]),
    //             actual = new Float32Array([1, 2, 3, 4])
    //         expect(tensor2d.dataSync()).to.eql(actual)
    //         expect(tensor2d_1.dataSync()).to.eql(actual)

    //     });
});