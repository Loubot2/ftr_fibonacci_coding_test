
import fibonacci from 'fibonacci'
import fibonacciIndex from '@stdlib/math-base-special-fibonacci-index'

export const isFibonacci = (value: string): boolean => {
  const number = Number(value)
  // 0 is part of fibinacci sequence
  if (number === 0) {
    return true
  } else {
    // get the rough index
    const n = fibonacciIndex(number)
    if (!Number.isNaN(n) && n <= 1000) {
      // get actual value at index
      const v = fibonacci.iterate(n)
      // convert both values to big int for comparison
      const bigFib = BigInt(v.number)
      const bigNumber = BigInt(value)
      return bigNumber === bigFib
    }
  }
  return false
}
