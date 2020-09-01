import Triangle from "./../src/triangle.js";
import { TestScheduler } from "jest";

describe("Triangle", () => {
  test("should correctly create a triangle object with three lengths", () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  })
  test("should correctly determine whether three lengths make an equilateral triangle", () => {
    const triangle = new Triangle(2, 2, 2);
    expect(triangle.checkType()).toEqual("Equilateral Triangle!");
  })
})