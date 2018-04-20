// import { expect } from 'chai';
// import * as sinon from 'sinon'
describe(`https://boostlog.io/@nixus89896/10-famous-bugs-in-javascript-5ad82c4447018500491f3e41`, () => {
    // it(` Syntax Error`, () => {
    //     expect(() => { Number.MAX_SAFE_INTEGER = 67 }).toThrow()
    // });
    it(`Invalid Comparison Operators`, () => {
        const func = (arg) => {
            return arg = 1
        }
        expect(func(2)).toEqual(1)
    });
    it(`Range Error`, () => {
        let i = 0;
        function add(a) {
            i++
            if (i > 10) {
                throw ('Range Error')
            }
            add(a - 5);
        }
        expect(add.bind(5)).toThrow()
    });
    it(`Extra commas`, () => {
        const obj = { a: 1, }
    });
});
describe(`The Float32Array typed array represents an array of 32-bit floating point numbers (corresponding to the C float data type) in the platform byte order.`, () => {
    beforeAll: {
        process.on('unhandledRejection', function (err, promise) {
            console.log('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
        });
    }
    describe(`https://wanago.io/2018/04/16/explaining-async-await-creating-dummy-promises/`, () => {
        it(`beginners try to do something like that`, (done) => {
            function fetchUsers() {
                let users;
                new Promise(resolve => {
                    setTimeout(() => {
                        users = 'setTimeout'
                        resolve(users)
                    }, 500)
                }).then(data => {
                    expect(data).toEqual('setTimeout')
                    done()
                })
                expect(users).toEqual(); // undefined
            }
            fetchUsers()
        });
        it(`write asynchronous code that looks synchronous`, () => {
            async function fetchUsers() {
                const usersResponse = await new Promise(resolve => setTimeout(() => resolve(42), 500));
                const usersData = await new Promise(resolve => setTimeout(() => resolve(usersResponse + 10), 500));
                expect(usersData).toEqual(52);
            }
            fetchUsers()
        });
        it(`With async/await, a try catch block makes a big return`, () => {
            async function fetchUsers() {
                try {
                    const usersResponse = await fetch(`${apiUrl}/users`);
                    const usersData = await usersResponse.json();
                } catch (e) {
                    expect(e.message).toEqual("fetch is not defined");
                }
            }
            fetchUsers()
        });
        it(`Companies are fetched only after the users were fetched`, () => {
            async function fetchUsers() {
                const start = new Date().getTime();
                const Companies = await new Promise(resolve => setTimeout(() => resolve(10), 500));
                const users = await new Promise(resolve => setTimeout(() => resolve(42), 800));
                const end = new Date().getTime();
                expect(end - start).to.greaterThan(500 + 800 - 1);
            }
            fetchUsers()
        });
        it(`Promise.all runs all requests in parallel and returns a new promise to whom we can wait for`, () => {
            async function fetchUsers() {
                const start = new Date().getTime();
                const Companies = await Promise.all([new Promise(resolve => setTimeout(() => resolve(10), 500)),
                new Promise(resolve => setTimeout(() => resolve(42), 800))]);
                const end = new Date().getTime();
                expect(end - start).to.lessThan(500 + 800);
            }
            fetchUsers()
        });
        it(`await calls the then method.`, () => {
            const usersPromise = new Promise(resolve => setTimeout(() => resolve(10), 500))
            expect(usersPromise.then).toBeInstanceOf(Function) // a function here

            usersPromise.then(data => 42);
            async function fetchUsers() {

                const usersResponse = await usersPromise;
                usersPromise.then(data => {

                    expect(data).toEqual(10)
                })
            }
            fetchUsers()
        });
        it(` this points to the promise itself, just like it would if a then method was simply called on it.`, () => {
            function customThen(resolve, reject) {
                resolve(this.response);
            }

            const dummyPromise = {
                response: 'that is the question',
                then: customThen
            };

            dummyPromise.then(response => {
                expect(response).toEqual('that is the question');
                // To be, or not to be 
                // that is the question
            });
        });
    });
    it(`Different ways to create a Float32Array:`, () => {
        // From a length
        var float32 = new Float32Array(2);
        float32[0] = 42;
        expect(float32[0]).toEqual(42)
        expect(float32.length).toEqual(2)
        expect(float32.BYTES_PER_ELEMENT).toEqual(4)

        // From an array
        var arr = new Float32Array([21, 31]);
        expect(arr[1]).toEqual(31)

    });
    it(`The DataView view provides a low-level interface for reading and writing multiple number types in an ArrayBuffer irrespective of the platform's endianness.`, () => {
        // create an ArrayBuffer with a size in bytes
        var buffer = new ArrayBuffer(16);
        // Create a couple of views
        var view1 = new DataView(buffer);
        var view2 = new DataView(buffer, 12, 4); //from byte 12 for the next 4 bytes
        view1.setInt8(12, 42); // put 42 in slot 12
        expect(view2.getInt8(0)).toEqual(42)
        // expected output: 42
    });
    it(`DataView accessors provide explicit control of how data will be accessed irrespective of the platform architecture's endianness.`, () => {
        var littleEndian = function (bool) {
            var buffer = new ArrayBuffer(2);
            new DataView(buffer).setInt16(0, 256, bool /* littleEndian */);
            // Int16Array uses the platform's endianness.
            return new Int16Array(buffer)[0] === 256;
        };
        expect(littleEndian(true)).toEqual(true)
        expect(littleEndian(false)).toEqual(false)

    });
    it(`DataView.prototype.setInt16()
Stores a signed 16-bit integer (short) value at the specified byte offset from the start of the view.`, () => {
            var buffer = new ArrayBuffer(16);
            var dv = new DataView(buffer, 0);

            dv.setInt16(1, 42);
            expect(dv.getInt16(1)).toEqual(42)
        });
    it(`Calling DataView() as a function without new, will throw a TypeError from now on.`, () => {
        expect(() => { var dv = DataView(buffer, 0) }).toThrow()
    });
});