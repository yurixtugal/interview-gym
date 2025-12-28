/**
 * 242. Valid Anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * @example
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * @example
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * @param s - First string
 * @param t - Second string
 * @returns true if t is an anagram of s, false otherwise
 *
 * Time Complexity: O(n) - where n is the length of the strings
 * Space Complexity: O(k) - where k is the number of unique characters
 */
export function isAnagram(s: string, t: string): boolean {
  if (!s || !t || s.length !== t.length) return false;

  const map = new Map<string,number>()

  for (let i = 0; i< s.length;i++) {
    map.set(s[i], (map.get(s[i])||0)+1)
  }

  for (let i = 0; i < t.length; i++) {
    const count = map.get(t[i])
    if (!count) return false
    map.set(t[i],count-1)
  }

  return true;
}


console.log(isAnagram('rat','tar'))