/**
 * 49. Group Anagrams
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * @example
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Explanation: There is no string in strs that can be rearranged to form "bat".
 * The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
 * The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
 *
 * @example
 * Input: strs = [""]
 * Output: [[""]]
 *
 * @example
 * Input: strs = ["a"]
 * Output: [["a"]]
 *
 * @param strs - Array of strings to group by anagrams
 * @returns Array of grouped anagrams, where each group contains strings that are anagrams of each other
 *
 * Constraints:
 * 1 <= strs.length <= 10^4
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters
 *
 * Time Complexity: O(n * k log k) - where n is the number of strings and k is the maximum length of a string (with sorting approach)
 * Space Complexity: O(n * k) - for storing all strings in the hash map
 */
export function groupAnagrams(strs: string[]): string[][] {
  if (!strs) return []
  const resultMap = new Map<string,string[]>();

  for (let str of strs) {
    const hashStr = str.split('').sort().join('')
    const group = resultMap.get(hashStr) ?? []
    group.push(str);
    resultMap.set(hashStr,group)   
  }
  return Array.from(resultMap.values())
}
