const factorial = (n: number): number => (n ? n * factorial(n - 1) : 1);

/**
 * How many combos of M you can receive from N
 *
 * C = n! / m! * (n - m)!
 * @example
 * C(2, ♠️♣️♥️♦️) -> ♠️♣️,♠️♥️,♠️♦️,♣️♥️,♣️♦️,♥️♦️
 */
export const combinations = (m: number, n: number) =>
  Math.floor(factorial(n) / (factorial(m) * factorial(n - m)));
