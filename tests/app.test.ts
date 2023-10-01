import calculator from "../src/calculator";

describe("calculator operations", () => {
    it("sum", () => {
        expect(calculator.sum(2,2)).toBe(4);
    });

    it("sub", () => {
        expect(calculator.sub(2,2)).toBe(0)
    });

    it("div", () => {
        expect(calculator.div(10,2)).toBe(5);
    })

    it("mult", () => {
        expect(calculator.mul(10,2)).toBe(20)
    })


})