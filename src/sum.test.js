const sum = require("./sum");

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer"
];

describe("practicing tests", () => {
  test("sum of two numbers", () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(1, 7)).toBe(8);
    expect(sum(6, 3)).toBe(9);
    expect(sum(-6, 2)).toBe(-4);
    expect(sum(-6, -2)).toBe(-8);
    expect(sum(8, 8)).toBe(16);
    expect(sum(3, -9)).toBe(-6);
  });

  test("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  test("adding positive numbers is not zero", () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test("adding floating point numbers", () => {
    const valueF = 0.1 + 0.2;
    expect(valueF).toBeCloseTo(0.3);
  });

  test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });

  test("the shopping list has beer on it", () => {
    expect(shoppingList).toContain("beer");
  });

  test("the list has no wine on it", () => {
    expect(shoppingList).not.toContain("wine");
  });
});
