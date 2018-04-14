import * as tf from '@tensorflow/tfjs';
import { expect } from 'chai';

describe(`https://js.tensorflow.org/tutorials/core-concepts.html`, () => {
    beforeAll: {
        process.on('unhandledRejection', function (err, promise) {
            console.error('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
        });
    }
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
    it(`The following example creates an identical tensor to the one above using tf.tensor2d:`, () => {
        const c = tf.tensor2d([[1.0, 2.0, 3.0], [10.0, 20.0, 30.0]]);
        c.print();
        expect(c.dataSync()).to.eql(new Float32Array([1, 2, 3, 10, 20, 30]))
    });
    it(`creating tensors with all values set to 0 (tf.zeros) or all values set to 1 (tf.ones):`, () => {
        // 3x5 Tensor with all values set to 0
        const zeros = tf.zeros([3, 5]);
        expect(zeros.dataSync()).to.eql(new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
    });
    it(`Variables are initialized with a tensor of values`, () => {
        const initialValues = tf.zeros([5]);
        const biases = tf.variable(initialValues); // initialize biases
        biases.print(); // output:
        expect(biases.dataSync()).to.eql(new Float32Array([0, 0, 0, 0, 0]))
        const updatedValues = tf.tensor1d([0, 1, 0, 1, 0]);
        biases.assign(updatedValues); // update values of biases
        biases.print(); // output: 
        expect(biases.dataSync()).to.eql(new Float32Array([0, 1, 0, 1, 0]))
    });
    describe(`While tensors allow you to store data, operations (ops) allow you to manipulate that data.`, () => {
        it(`Available ops include unary ops such as square:`, () => {
            const d = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
            const d_squared = d.square();
            d_squared.print();
            expect(d_squared.dataSync()).to.eql(new Float32Array([1, 4, 9, 16]))
        });
        beforeAll: {
            this.f = tf.tensor2d([[5.0, 6.0], [7.0, 8.0]]);

            this.e = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
            this.e_plus_f = this.e.add(this.f);
        }
        it(`binary ops such as add, sub, and mul`, () => {


            this.e_plus_f.print();
            expect(this.e_plus_f.dataSync()).to.eql(new Float32Array([6, 8, 10, 12]))
        });
        it(`TensorFlow.js has a chainable API`, () => {
            const sq_sum = this.e.add(this.f).square();
            sq_sum.print();
            expect(sq_sum.dataSync()).to.eql(new Float32Array([36, 64, 100, 144]))

            // All operations are also exposed as functions in the main namespace,
            // so you could also do the following:
            const sq_sum = tf.square(tf.add(this.e, this.f));
            expect(sq_sum.dataSync()).to.eql(new Float32Array([36, 64, 100, 144]))
        });
    });
    describe(`Models and Layers`, () => {
        it(`a model is a function that given some input will produce some desired output.`, () => {
            // Define function
            function predict(input) {
                // y = a * x ^ 2 + b * x + c
                // More on tf.tidy in the next section
                return tf.tidy(() => {
                    const x = tf.scalar(input);

                    const ax2 = a.mul(x.square());
                    const bx = b.mul(x);
                    const y = ax2.add(bx).add(c);

                    return y;
                });
            }

            // Define constants: y = 2x^2 + 4x + 8
            const a = tf.scalar(2);
            const b = tf.scalar(4);
            const c = tf.scalar(8);

            // Predict output for input of 2
            const result = predict(2);
            result.print() // Output: 24
            expect(result.dataSync()).to.eql(new Float32Array([24]))
        });
        it(`the high-level API tf.model to construct a model out of layers, which are a popular abstraction in deep learning. `, (done) => {
            const model = tf.sequential({
                layers: [tf.layers.dense({ units: 1, inputShape: [10] })]
            });
            model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });
            async function asyncFoo() {

                return await model.fit(tf.ones([8, 10]), tf.ones([8, 1]), {
                    batchSize: 4,
                    epochs: 3
                });
            }
            asyncFoo().then(data => {
                expect(data.epoch).to.eql([0, 1, 2])
                done()
            }).catch(() => {
                done()
            })
        });
    });
    describe(`Memory Management: dispose and tf.tidy`, () => {
        it(`call dispose on a tensor or variable to purge it and free up its GPU memory:`, () => {
            const x = tf.tensor2d([[0.0, 2.0], [4.0, 6.0]]);
            const x_squared = x.square();
            expect(x.dataSync()).to.eql(new Float32Array([0.0, 2.0, 4.0, 6.0]))
            x.dispose();
            expect(x.dataSync).to.throw()

            x_squared.dispose();
        });
    });
    it(`tf.tidy executes a function and purges any intermediate tensors created, freeing up their GPU memory. It does not purge the return value of the inner function.`, () => {
        // tf.tidy takes a function to tidy up after
        const average = tf.tidy(() => {
            // tf.tidy will clean up all the GPU memory used by tensors inside
            // this function, other than the tensor that is returned.
            //
            // Even in a short sequence of operations like the one below, a number
            // of intermediate tensors get created. So it is a good practice to
            // put your math ops in a tidy!
            const y = tf.tensor1d([1.0, 2.0, 3.0, 4.0]);
            const z = tf.ones([4]);

            return y.sub(z).square().mean();
        });

        average.print() // Output: 3.5
        expect(average.dataSync()).to.eql(new Float32Array([3.5]))
    });
});