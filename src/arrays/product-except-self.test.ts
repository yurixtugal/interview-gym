import { describe, it, expect } from 'vitest'
import { productExceptSelf } from './product-except-self'

describe('productExceptSelf', () => {
  it('returns products for [1,2,3,4]', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
  })

  it('handles array with zero and negatives', () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0])
  })

  it('handles single zero and one', () => {
    expect(productExceptSelf([0, 1])).toEqual([1, 0])
  })

  it('handles multiple zeros', () => {
    expect(productExceptSelf([0, 0, 2])).toEqual([0, 0, 0])
  })

  it('all ones', () => {
    expect(productExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1])
  })

  it('empty array returns empty array', () => {
    expect(productExceptSelf([])).toEqual([])
  })
})
