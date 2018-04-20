test('the best flavor is grapefruit', () => {
    expect('grapefruit').toBe('grapefruit');
});
describe(`http://2ality.com/2018/04/type-notation-typescript.html`, () => {
    beforeAll: {
        process.on('unhandledRejection', function (err, promise) {
            console.error('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
        });
    }
    it(`If you store a two-dimensional point in an Array then you are using that Array as a tuple.`, () => {
        let point: [number, number] = [7, 5];
        expect(point).toEqual([7, 5])
        // const point1 = Object.entries({ a: 1, b: 2 })
    });
});