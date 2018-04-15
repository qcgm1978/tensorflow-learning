import { expect } from 'chai';
describe(``, () => {
    beforeAll: {
        process.on('unhandledRejection', function (err, promise) {
            console.error('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
        });
    }
    describe(`https://www.ncbi.nlm.nih.gov/pubmed/25002004`, () => {
        it(`Dose = [(8.52 - Desired change in serum 25-hydroxyvitamin D level) + (0.074 × Age) - (0.20 × BMI) + (1.74 × Albumin concentration) - (0.62 × Starting serum 25-hydroxyvitamin D concentration)]/(-0.002). `, () => {
            const Age = 40, BMI = 2, AlbuminConcentration = 0.1, hydroxyvitaminDConcentration = 0.2, dose = ((8.52 - 25 - 1) + (0.074 * Age) - (0.20 * BMI) + (1.74 * AlbuminConcentration) - (0.62 * 25 - hydroxyvitaminDConcentration)) / (-0.002);
            expect(dose).to.greaterThan(15022)
        });
    });
});