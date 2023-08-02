const { sum, subtract, multiply, divide } = require('./script3');

test('sum', () => {
  expect(sum(1,3)).toEqual(4)
})

test('subtract', () => {
  expect(subtract(6, 5)).toEqual(1)
})

test('multiply', () => {
  expect(multiply(1,3)).toEqual(3)
})

test('divide', () => {
  expect(divide(25,5)).toEqual(5)
})

test('divide2', () => {
  expect(divide(25,5)).toBeGreaterThanOrEqual(1)
})