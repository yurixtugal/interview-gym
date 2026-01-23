/**
 * Move Zeroes
 *
 * Given an array nums, move all 0's to the end while maintaining the relative
 * order of the non-zero elements. Modify the array in-place and do not return
 * a new array.
 *
 * NOTE: Implementation intentionally omitted here — this file provides the
 * function signature and documentation only.
 */
export function moveZeroes(nums: number[]): void {
  
  let lazyIndex = 0;
  for (let i = 0; i< nums.length;i++){
    if (nums[i] !== 0){
      let tempValue = nums[lazyIndex];
      nums[lazyIndex] = nums[i];
      nums[i] = tempValue;
      lazyIndex += 1;
    }
  }
}