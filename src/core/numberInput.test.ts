import { getNumberFrequency, convertNumbersToString, NumberFrequency } from './numberInput'

describe('fibonacci', () => {

  describe('isFibonacci', () => {
    test('should add fibonacci number', () => {
      const numbers = new Map();
      const result = getNumberFrequency('8', numbers);
      expect(result.fibonacci).toEqual(true)
      expect(result.frequency).toEqual(1)
    })

    test('should add non fibonacci number', () => {
      const numbers = new Map();
      const result = getNumberFrequency('9', numbers);
      expect(result.fibonacci).toEqual(false)
      expect(result.frequency).toEqual(1)
    })

    test('should add existing number', () => {
      const numbers = new Map();
      numbers.set('9', {
        frequency: 1,
        fibonacci: false
      })
      expect(getNumberFrequency('9', numbers).frequency).toEqual(2)
    })
    
  })

  describe('convertToString', () => {
    test('handle empty array', () => {
      const numbers = new Map();
      const result = convertNumbersToString( numbers);
      expect(result).toEqual('')
    })

    test('handle single element', () => {
      const numbers = new Map();
      numbers.set('1', {
        frequency: 1,
        fibonacci: false
      })
      const result = convertNumbersToString(numbers);
      expect(result).toEqual('1:1')
    })

    test('handle multiple elements', () => {
      const numbers: Map<string,NumberFrequency> = new Map();
      numbers.set('10',  {
        frequency: 3,
        fibonacci: false
      });
      numbers.set('8', {
        frequency: 2,
        fibonacci: false
      })
      numbers.set('33', {
        frequency: 1,
        fibonacci: false
      })
      expect(convertNumbersToString(numbers)).toEqual('10:3, 8:2, 33:1')
    })
    
  })
})
