import { describe, it, expect } from "vitest";
import { isAnagram } from "./valid-anagram";

describe("isAnagram", () => {
  it("should return true for valid anagrams", () => {
    expect(isAnagram("anagram", "nagaram")).toEqual(true);
  });

  it("should return false for invalid anagrams", () => {
    expect(isAnagram("car", "rat")).toEqual(false);
  });

  it("should handle pair length", () => {
    expect(isAnagram("katy", "yakt")).toEqual(true);
  });

  it("should handle void entry", () => {
    expect(isAnagram("", "")).toEqual(false);
    expect(isAnagram("", "yakt")).toEqual(false);
  });

  it("should handle null entry", () => {
    expect(
      isAnagram(null as unknown as string, null as unknown as string)
    ).toEqual(false);
  });

  it("should handle 1 word", () => {
    expect(isAnagram("a", "a")).toEqual(true);
  });

  it("should handle same word", () => {
    expect(isAnagram("aaaaaaaaa", "aaaaaaaaa")).toEqual(true);
  });

  it("should return false for different lengths", () => {
    expect(isAnagram("abc", "abcd")).toEqual(false);
    expect(isAnagram("a", "ab")).toEqual(false);
  });

  it("should return false for different character frequencies", () => {
    expect(isAnagram("aab", "abb")).toEqual(false);
    expect(isAnagram("aabbcc", "aabbc")).toEqual(false);
  });

  it("should be case sensitive", () => {
    expect(isAnagram("Anagram", "nagaram")).toEqual(false);
  });
});
