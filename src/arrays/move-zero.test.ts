import { describe, it, expect } from 'vitest'
import { moveZeroes } from './move-zero'

describe('moveZeroes', () => {
  it('moves zeros to end for [0,1,0,3,12]', () => {
    const nums = [0, 1, 0, 3, 12]
    moveZeroes(nums)
    expect(nums).toEqual([1, 3, 12, 0, 0])
  })

  it('handles empty array', () => {
    const nums: number[] = []
    moveZeroes(nums)
    expect(nums).toEqual([])
  })

  it('no zeros remains same', () => {
    const nums = [1, 2, 3]
    moveZeroes(nums)
    expect(nums).toEqual([1, 2, 3])
  })

  it('moves zeros when they are at front', () => {
    const nums = [0, 0, 1]
    moveZeroes(nums)
    expect(nums).toEqual([1, 0, 0])
  })

  it('all zeros stays all zeros', () => {
    const nums = [0, 0, 0]
    moveZeroes(nums)
    expect(nums).toEqual([0, 0, 0])
  })

  it('complex case with multiple zeros', () => {
    const nums = [4, 0, 5, 0, 0, 3, 0, 1]
    moveZeroes(nums)
    expect(nums).toEqual([4, 5, 3, 1, 0, 0, 0, 0])
  })
})
