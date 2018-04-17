---
layout: post
title:  "TensorFlow-AI-Learning"
date:   2018-04-14 19:38:28 +0800
categories: jekyll update
---
Today I know TensorFlow.js is released that is a library train and use deep learning models directly in the browser, in JavaScript. Includes the full Keras API, and ability to load saved Keras models (and even fine-tune them in the browser)! So I learn it on the official page: https://js.tensorflow.org/

There's a simple model in the page. So I try it by TDD style. And I want to code a blog with typescript then publish it.

So you know how many technologies and tools I'll use.

1, The development environment: VS Code.

2, The language: TypeScript, because Tensorflow.js is coded by it.

3, Modules compiling: Webpack

4, TDD framework: Jest, Works with TypeScript

5, HTML integration

6, Website generator: jekyll, integrated into github page

7, Code Managing: GitHub

I'll explain the above by the following article by order:

1, https://code.visualstudio.com/

You can install HTML Boilerplate plugin and then code `html5-boilerplate` to generate HTML5 Document easily.

2, https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

Code the first TypeScript TDD

{% highlight typescript %}
describe(`http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html`, () => {
    beforeAll: {
        process.on('unhandledRejection', function (err, promise) {
            console.error('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
        });
    }
    it(` just JavaScript`, () => {
        function greeter(person) {
            return "Hello, " + person;
        }

        let user = "Jane User";
        expect(greeter(user)).to.equal('Hello, Jane User')
    });
    it(`Type annotations in TypeScript are lightweight ways to record the intended contract of the function or variable.use TypeScript even if there are errors in your code.`, () => {
        function greeter(person: string) {
            return "Hello, " + person;
        }

        let user = [0, 1, 2];
        expect(greeter(user)).to.equal('Hello, 0,1,2')
    });
    it(` implement an interface just by having the shape the interface requires, without an explicit implements clause.`, () => {
        interface Person {
            firstName: string;
            lastName: string;
        }

        function greeter(person: Person) {
            return "Hello, " + person.firstName + " " + person.lastName;
        }

        let user = { firstName: "Jane", lastName: "User" };
        expect(greeter(user)).to.equal('Hello, Jane User')
    });
    it(`public on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.`, () => {
        class Student {
            fullName: string;
            constructor(public firstName: string, public middleInitial: string, public lastName: string) {
                this.fullName = firstName + " " + middleInitial + " " + lastName;
            }
        }

        interface Person {
            firstName: string;
            lastName: string;
        }

        function greeter(person: Person) {
            return "Hello, " + person.firstName + " " + person.lastName;
        }

        let user = new Student("Jane", "M.", "User");
        expect(greeter(user)).to.equal('Hello, Jane User')
    });
    describe(`Basic Types
`, () => {
            it(`The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.`, () => {
                let isDone: boolean = false;
                expect(isDone).to.equal(false)
            });
            it(`As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.`, () => {
                let decimal: number = 6;
                let hex: number = 0xf00d;
                let binary: number = 0b1010;
                let octal: number = 0o744;
                expect(hex).to.equal(0xf00d)
            });
            it(` Array types can be written in one of two ways`, () => {
                let list: number[] = [1, 2, 3];

                let list1: Array<number> = [1, 2, 3];
                expect(list).to.eql(list1)
            });
            it(`Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same`, () => {
                // Declare a tuple type
                let x: [string, number];
                // Initialize it
                x = ["hello", 10]; // OK
                // Initialize it incorrectly
                // x = [10, "hello"]; // Error
            });
        });
});
{% endhighlight %}

3, https://webpack.js.org/guides/getting-started/

We use webpack Getting Started generating project.

{% highlight cmd %}
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
{% endhighlight %}

At last we build a bundle.js in dist/ by `webpack -d -w`

4, https://facebook.github.io/jest/docs/en/getting-started.html

We use jest Getting Started writting the first Jest Tests:

{% highlight javascript %}
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
=> test passed
{% endhighlight %}

5, We creat a index.html in the root directory and reference the bundled js file in 3 step.

6,7 http://jmcglone.com/guides/github-pages/

We can create a project and manage it by following the above instructions.

Now you can code tensorflow.js by TDD and publish it!

{% highlight javascript %}
describe(`https://js.tensorflow.org/tutorials/core-concepts.html`, () => {
    beforeAll: {
        process.on('unhandledRejection', function (err, promise) {
            console.error('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
        });
        process.on('uncaughtException', function (err) {
            console.log('Caught exception: ', err);
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
});
{% endhighlight %}