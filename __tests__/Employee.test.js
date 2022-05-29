const Employee = require('../lib/employee');

describe("Employee", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id and email address if provided valid arguments", () => {
            const employee = new Employee("Theo Phillips", 3, "TheoPhillips@gmail.com");

            expect(employee.name).toEqual("Theo Phillips");
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual("TheoPhillips@gmail.com");
        })
    });

    describe("Name", () => {
        it("Should set the Name via the constructor function", () => {
        const input = "Theo Phillips";
        const expected = {"name": "Theo Phillips", "id": 1, "email": "name@name.com"};
        
        const result = new Employee(input, 1, "name@name.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Employee ID", () => {
        it("Should set the Employee ID via the constructor function", () => {
        const input = 100;
        const expected = {"name": "First Last", "id": 100, "email": "name@name.com"};
        
        const result = new Employee("First Last", input, "name@name.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Email", () => {
        it("Should set the Email via the constructor function", () => {
        const input = "TheoPhillips@gmail.com";
        const expected = {"name": "First Last", "id": 1, "email": "TheoPhillips@gmail.com"};
        
        const result = new Employee("First Last", 1, input);

        expect(result).toEqual(expected);
        });
    });
});