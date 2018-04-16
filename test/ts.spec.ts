import { expect } from 'chai';

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