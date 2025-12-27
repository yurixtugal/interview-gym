import { describe, it, expect } from "vitest";
import { maxProfit } from "./best-time-to-buy-and-sell-stock-II";

describe("maxProfit - Stock II (Multiple Transactions)", () => {
  it("should handle example 1: multiple transactions", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7);
  });

  it("should handle example 2: ascending prices", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
  });

  it("should handle example 3: descending prices (no profit)", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });

  it("should handle null input", () => {
    expect(maxProfit(null as unknown as number[])).toEqual(0);
  });

  it("should handle empty array", () => {
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

  it("should handle multiple peaks and valleys", () => {
    expect(maxProfit([2, 1, 2, 1, 0, 1, 2])).toEqual(4);
  });

  it("should handle alternating prices", () => {
    expect(maxProfit([1, 3, 2, 4, 1, 5])).toEqual(8);
  });
});
