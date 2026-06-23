import sum from "./sum.js";

describe("test for sum fnx",()=>{
    test("test for 2 + 2 be 4",()=>{
        expect(sum(2,2)).toBe(4);
    });

    test("test for -5 + -5 be -10",()=>{
        expect(sum(-5,-5)).toBe(-10);
    })
})

