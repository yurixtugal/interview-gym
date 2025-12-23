import { describe, it, expect } from 'vitest'
import { helloWorld } from './hello-world'

describe('helloWorld', () => {
  it('should return "Hello, World!" when no name is provided', () => {
    expect(helloWorld()).toBe('Hello, World!')
  })

  it('should return "Hello, Yuri!" when name is "Yuri"', () => {
    expect(helloWorld('Yuri')).toBe('Hello, Yuri!')
  })

  it('should return "Hello, TypeScript!" when name is "TypeScript"', () => {
    expect(helloWorld('TypeScript')).toBe('Hello, TypeScript!')
  })
})
