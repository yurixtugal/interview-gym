import { describe, it, expect } from "vitest";
import { twoSum } from "./two-sum";
describe("twoSum", () => {
    it("should return the correct indices for the target sum", () => {
        expect(twoSum([2,7,11,15], 9)).toEqual(expect.arrayContaining([0,1]));
        expect(twoSum([3,2,4], 6)).toEqual(expect.arrayContaining([1,2]));
        expect(twoSum([3,3], 6)).toEqual(expect.arrayContaining([0,1]));
    });

    it("should return and ampty array if there is no solution", () => {
        expect(twoSum([1,2,3], 7)).toEqual([]);
    })

    it("should handle negative numbers", () => {
        expect(twoSum([-1,-2,-3,-4,-5], -8)).toEqual(expect.arrayContaining([2,4]));
    });

    it("should handle zero as target", () => {
        expect(twoSum([0,4,3,0], 0)).toEqual(expect.arrayContaining([0,3]));
    });

    it("should handle zero with negative numbers", () => {
        expect(twoSum([-3,4,3,0], 0)).toEqual(expect.arrayContaining([0,2]));
    });

    it("should handle null or empty input", () => {
        expect(twoSum([], 5)).toEqual([]);
        expect(twoSum(null as unknown as number[], 5)).toEqual([]);
    });
});