
import { isFibonacci } from './fibonacci'

export type NumberFrequency = {
  frequency: number;
  fibonacci: boolean
}

export const getNumberFrequency = (value: string, numbers: Map<string,NumberFrequency>): NumberFrequency => {
  let numberInput = numbers.get(value);
  if(!numberInput) {
    numberInput = {
      frequency: 0,
      fibonacci: isFibonacci(value)
    };
  }
  return {
    frequency: numberInput.frequency + 1,
    fibonacci: numberInput.fibonacci
  };
}

const convertToString = (number: string, input: NumberFrequency): string => {
  return `${number}:${input.frequency}`
}

export const convertNumbersToString = (numbers: Map<string,NumberFrequency>): string => {
  const numbersString = [...numbers].map(([name, value]) => (convertToString(name, value)));
  return numbersString.join(', ')
}