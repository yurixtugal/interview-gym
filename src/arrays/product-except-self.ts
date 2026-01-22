/**
 * 238. Product of Array Except Self
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product
 * of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 * Constraints:
 * - 2 <= nums.length <= 10^5
 * - -30 <= nums[i] <= 30
 *
 * Follow-up:
 * - Can you solve it in O(n) time without using division?
 * - Can you solve it with constant extra space (excluding the output array)?
 */
export function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];
  result[0] = 1;
  
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i-1]*nums[i-1];
  } 
  let rightAccum = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightAccum;
    rightAccum *= nums[i];
  }

  for (let i = 0; i < result.length; ++i) {
    if (result[i] === 0) result[i] = 0
  }

  return result;
}
