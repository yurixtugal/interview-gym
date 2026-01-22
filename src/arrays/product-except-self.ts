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
// Implementation (O(n) time, O(1) extra space excluding output)
export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const out = new Array<number>(n);
  if (n === 0) return out;

  out[0] = 1;
  for (let i = 1; i < n; ++i) {
    out[i] = out[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; --i) {
    out[i] *= right;
    right *= nums[i];
  }

  return out;
}

export default productExceptSelf
