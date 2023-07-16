
var fibonacciIndex = require( '@stdlib/math-base-special-fibonacci-index' );
import fibonacci  from 'fibonacci';

export const isFibonacci = (value: string): boolean => {
  const number = Number(value)
  if(number == 0) {
    return true
  } else {
    //get the rough index
    const n = fibonacciIndex( number );
    if(!Number.isNaN(n) && n <= 1000) {
      //get actual value at index
      const v = fibonacci.iterate(n);
      //convert both values to big int for comparison
      const bigFib = BigInt(v.number);
      const bigNumber = BigInt(value);
      return bigNumber === bigFib;
    }
  } 
  return false
  
}