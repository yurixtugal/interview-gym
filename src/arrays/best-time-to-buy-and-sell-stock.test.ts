import { describe, it, expect } from "vitest";
import { maxProfit } from "./best-time-to-buy-and-sell-stock";

describe("maxProfit", () => {
  it("should return the correct answer", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
  });

  it("should return 0 if there is no transaction to do", () => {
    expect(maxProfit([3, 2, 1])).toEqual(0);
  });

  it("should handle null input", () => {
    expect(maxProfit(null as unknown as number[])).toEqual(0);
  });

  it("should handle void array", () => {
    expect(maxProfit([])).toEqual(0);
  });

  it("should handle single element", () => {
    expect(maxProfit([5])).toEqual(0);
  });

  it("should handle two elements with profit", () => {
    expect(maxProfit([1, 5])).toEqual(4);
  });

  it("should handle two elements without profit", () => {
    expect(maxProfit([5, 1])).toEqual(0);
  });

  it("should handle all same prices", () => {
    expect(maxProfit([3, 3, 3, 3])).toEqual(0);
  });

  it("should handle min price at the end", () => {
    expect(maxProfit([5, 4, 3, 2, 1])).toEqual(0);
  });

  it("should handle max price at the beginning", () => {
    expect(maxProfit([10, 2, 5, 1, 3])).toEqual(3);
  });

  it("should handle multiple peaks", () => {
    expect(maxProfit([2, 1, 2, 1, 0, 1, 2])).toEqual(2);
  });
});
