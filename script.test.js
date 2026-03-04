const { add } = require("./script");

test("adds two numbers", ()=>{
    expect(add(2,3)).toBe(5);
});

test("adds string numbers", ()=>{
    expect(add("4","6")).toBe(10);
});

test("adds negative numbers", ()=>{
    expect(add(-2, -3)).toBe(-5);
});