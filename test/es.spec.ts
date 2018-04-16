import { expect } from 'chai';
describe(`The Float32Array typed array represents an array of 32-bit floating point numbers (corresponding to the C float data type) in the platform byte order.`, () => {
    beforeAll: {
        process.on('unhandledRejection', function (err, promise) {
            console.log('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
        });
    }
    describe(`https://wanago.io/2018/04/16/explaining-async-await-creating-dummy-promises/`, (done) => {
        it(`beginners try to do something like that`, () => {
            function fetchUsers() {
                let users;
                new Promise(resolve => {
                    setTimeout(() => {
                        users = 'setTimeout'
                        resolve(users)
                    })
                }).then(data => {
                    expect(data).to.equal('setTimeout')
                    done()
                })
                expect(users).to.equal(); // undefined
            }
            fetchUsers()
        });
    });
    it(`Different ways to create a Float32Array:`, () => {
        // From a length
        var float32 = new Float32Array(2);
        float32[0] = 42;
        expect(float32[0]).to.equal(42)
        expect(float32.length).to.equal(2)
        expect(float32.BYTES_PER_ELEMENT).to.equal(4)

        // From an array
        var arr = new Float32Array([21, 31]);
        expect(arr[1]).to.equal(31)

    });
    it(`The DataView view provides a low-level interface for reading and writing multiple number types in an ArrayBuffer irrespective of the platform's endianness.`, () => {
        // create an ArrayBuffer with a size in bytes
        var buffer = new ArrayBuffer(16);
        // Create a couple of views
        var view1 = new DataView(buffer);
        var view2 = new DataView(buffer, 12, 4); //from byte 12 for the next 4 bytes
        view1.setInt8(12, 42); // put 42 in slot 12
        expect(view2.getInt8(0)).to.equal(42)
        // expected output: 42
    });
    it(`DataView accessors provide explicit control of how data will be accessed irrespective of the platform architecture's endianness.`, () => {
        var littleEndian = function (bool) {
            var buffer = new ArrayBuffer(2);
            new DataView(buffer).setInt16(0, 256, bool /* littleEndian */);
            // Int16Array uses the platform's endianness.
            return new Int16Array(buffer)[0] === 256;
        };
        expect(littleEndian(true)).to.equal(true)
        expect(littleEndian(false)).to.equal(false)

    });
    it(`DataView.prototype.setInt16()
Stores a signed 16-bit integer (short) value at the specified byte offset from the start of the view.`, () => {
            var buffer = new ArrayBuffer(16);
            var dv = new DataView(buffer, 0);

            dv.setInt16(1, 42);
            expect(dv.getInt16(1)).to.equal(42)
        });
    it(`Calling DataView() as a function without new, will throw a TypeError from now on.`, () => {
        expect(() => { var dv = DataView(buffer, 0) }).to.throw()
    });
});