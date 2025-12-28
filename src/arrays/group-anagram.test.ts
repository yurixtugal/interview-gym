import { describe, it, expect } from "vitest";
import { groupAnagrams } from "./group-anagram";

describe("groupAnagram", () => {
  it("should group anagram families correctly", () => {
    const result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
    expect(result).toHaveLength(3);
    expect(result).toContainEqual(expect.arrayContaining(["bat"]));
    expect(result).toContainEqual(expect.arrayContaining(["nat","tan"]));
    expect(result).toContainEqual(expect.arrayContaining(["ate","eat","tea"]));
  });

  it("should handle no anagrams (all different)", () => {
    const result = groupAnagrams(["ab","dce","f","ghij","klmnop","rstuvwz"]);
    expect(result).toHaveLength(6);
    expect(result).toContainEqual(["ab"]);
    expect(result).toContainEqual(["dce"]);
    expect(result).toContainEqual(["f"]);
    expect(result).toContainEqual(["ghij"]);
    expect(result).toContainEqual(["klmnop"]);
    expect(result).toContainEqual(["rstuvwz"]);
  });

  it("should group all strings into one family when all are anagrams", () => {
    const result = groupAnagrams(["abc", "bca", "cab"]);
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveLength(3);
    expect(result[0]).toEqual(expect.arrayContaining(["abc", "bca", "cab"]));
  })

  it("should handle void entries", () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
  });

  it("should handle one entry", () => {
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
  });

  it("should handle null entry", () => {
    expect(
      groupAnagrams(null as unknown as [])
    ).toEqual([]);
  });

  it("handle void array", () => {
    expect(
      groupAnagrams([])
    ).toEqual([]);
  })
});
