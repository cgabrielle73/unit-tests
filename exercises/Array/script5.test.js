const { sumArray, maxValue, containsElement, sortArray } = require('./script5')

it('Sum Array', () => {
    expect(sumArray([1,2,3,4,5])).toBe(15)
})

it('Max Value Array', () => {
    expect(maxValue([1,4,5,60,30,405])).toBe(405)
})

it('containsElement', () => {
    expect(containsElement(['pao', 'alou', 'aaa'], 'aaa')).toBeTruthy()
})

it('containsElement', () => {
    expect(containsElement(['pao', 'alou', 'aaa'], 'alou')).toContain('alou')
})

it('sortArray', () => {
    expect(sortArray([1, 100000, 21, 30, 4])).toEqual([1, 4, 21, 30, 100000])
})

it('sortArray', () => {
    expect(sortArray([1, 100000, 21, 30, 4])).not.toEqual([1, 4, 21, 30])
})

it('sortArray', () => {
    expect(sortArray([1, 100000, 21, 30, 4])).not.toBeFalsy()
})