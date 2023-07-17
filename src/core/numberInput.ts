
import { isFibonacci } from './fibonacci'

export interface NumberFrequency {
  frequency: number
  fibonacci: boolean
}

export const getNumberFrequency = (value: string, numbers: Map<string, NumberFrequency>): NumberFrequency => {
  let numberInput = numbers.get(value)
  if (numberInput == null) {
    numberInput = {
      frequency: 0,
      fibonacci: isFibonacci(value)
    }
  }
  return {
    frequency: numberInput.frequency + 1,
    fibonacci: numberInput.fibonacci
  }
}

export const convertNumbersToString = (numbers: Map<string, NumberFrequency>): string => {
  const numberArray = [...numbers].map(([name, value]) => ({ number: name, frequency: value.frequency }))
  const sortedArray = numberArray.sort((a, b) => b.frequency - a.frequency)
  const numbersString = sortedArray.map(({ number, frequency }) => (`${number}:${frequency}`))
  return numbersString.join(', ')
}
