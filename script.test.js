const { add } = require("./script");

describe("add function", () => {

    describe("valid inputs", () => {

        test("adds two numbers", () => {
            expect(add(2, 3)).toBe(5);
        });

        test("adds string numbers", () => {
            expect(add("4", "6")).toBe(10);
        });

        test("adds negative numbers", () => {
            expect(add(-2, -3)).toBe(-5);
        });

        test("adds decimal numbers", () => {
            expect(add(2.5, 3.1)).toBeCloseTo(5.6);
        });

        test("adds empty string and number", () => {
            expect(add("", 5)).toBe(5);
        });

    });
    describe("invalid inputs", () => {

        test("throws error for invalid input", () => {
            expect(() => add("abc", 5)).toThrow("Invalid input");
        });

        test("throws error for undefined", () => {
            expect(() => add(undefined, 5)).toThrow("Invalid input");
        });

    });

});
