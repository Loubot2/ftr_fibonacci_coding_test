import { isFibonacci } from './fibonacci'

describe('fibonacci', () => {
  describe('isFibonacci', () => {
    test('should return true if first fibonacci', () => {
      expect(isFibonacci('0')).toEqual(true)
    })

    test('should return true if fibonacci', () => {
      expect(isFibonacci('8')).toEqual(true)
    })
    test('should return false if not fibonacci', () => {
      expect(isFibonacci('10')).toEqual(false)
    })

    test('should return false if not fibonacci negative value', () => {
      expect(isFibonacci('-8')).toEqual(false)
    })

    test('should return false invalid value', () => {
      expect(isFibonacci('bannana')).toEqual(false)
    })

    test('should return true if really big fibonacci', () => {
      const thousand = '43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875'
      expect(isFibonacci(thousand)).toEqual(true)
    })

    test('should return false if really big but not fibonacci', () => {
      expect(isFibonacci('43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849200800')).toEqual(false)
    })

    test('should return true if really big fibonacci above 1000', () => {
      const thousandAndOne = '70330367711422815821835254877183549770181269836358732742604905087154537118196933579742249494562611733487750449241765991088186363265450223647106012053374121273867339111198139373125598767690091902245245323403501'
      expect(isFibonacci(thousandAndOne)).toEqual(false)
    })
  })
})
