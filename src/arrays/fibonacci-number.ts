/**
 * 509. Fibonacci Number
 *
 * Compute the n-th Fibonacci number where:
 *   F(0) = 0, F(1) = 1
 *   F(n) = F(n-1) + F(n-2) for n > 1
 *
 * The implementation is intentionally left as a TODO (skeleton only).
 */
export function fib(n: number): number {
  if (n == 0) return 0;
  let prevFib = 1;
  let antPrevFib = 0;
  let currentFib = 1;
  for (let i = 2; i <= n;i++){
    currentFib = antPrevFib + prevFib;
    [antPrevFib, prevFib] = [prevFib, currentFib];
  }
  return currentFib
}
