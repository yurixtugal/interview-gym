/**
 * LeetCode 1. Two Sum
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers
 * such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Time Complexity: O(n) - Single pass through the array
 * Space Complexity: O(n) - HashMap storage for seen numbers
 * 
 * @param nums - Array of integers
 * @param target - Target sum to find
 * @returns Array of two indices that sum to target, or empty array if no solution
 */
export function twoSum(nums: number[], target: number): number[] {
    
    if (nums === null || nums.length === 0) return []
    let seenNumbers = new Map<number, number> (); 
    for (let i = 0; i < nums.length; i++){
        if (seenNumbers.has(nums[i])) return [seenNumbers.get(nums[i])!,i]
        const complement = target - nums[i];
        seenNumbers.set(complement,i)
    }
    
    return []
}