import { describe, it, expect } from 'vitest'
import { fib } from './fibonacci-number'

describe('fib', () => {
  it('returns 0 for 0', () => {
    expect(fib(0)).toBe(0)
  })

  it('returns 1 for 1', () => {
    expect(fib(1)).toBe(1)
  })

  it('returns 1 for 2', () => {
    expect(fib(2)).toBe(1)
  })

  it('returns 2 for 3', () => {
    expect(fib(3)).toBe(2)
  })

  it('returns 3 for 4', () => {
    expect(fib(4)).toBe(3)
  })

  it('returns 55 for 10', () => {
    expect(fib(10)).toBe(55)
  })

  it('handles larger input like 30', () => {
    expect(fib(30)).toBe(832040)
  })
})
