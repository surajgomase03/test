const { add, subtract } = require("../src/math");

describe("Math Functions", () => {

    test("Add numbers", () => {
        expect(add(2,3)).toBe(5);
    });

    test("Subtract numbers", () => {
        expect(subtract(5,3)).toBe(2);
    });

});