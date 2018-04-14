import * as tf from '@tensorflow/tfjs';
import { expect } from 'chai';

describe(`https://js.tensorflow.org/tutorials/core-concepts.html`, () => {
    it(`The primary Tensor constructor is the tf.tensor function:`, () => {
        // 2x3 Tensor
        const shape = [2, 3]; // 2 rows, 3 columns
        const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
        a.print(); // print Tensor values
        expect(a.dataSync()).to.eql(new Float32Array([1, 2, 3, 10, 20, 30]))
        // Output: [[1 , 2 , 3 ],
        //          [10, 20, 30]]

        // The shape can also be inferred:
        const b = tf.tensor([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
        b.print();
        expect(b.dataSync()).to.eql(new Float32Array([1, 2, 3, 10, 20, 30]))
        // Output: [[1 , 2 , 3 ],
        //          [10, 20, 30]]

    });
});