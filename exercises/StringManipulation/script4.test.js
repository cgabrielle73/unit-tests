const {concatStrings, getStringLength, hasSubstring, toUpperCase} = require('./script4')

it('concatStrings', () => {
    expect(concatStrings('Olá,', 'mundo')).toEqual('Olá, mundo')
})

it('getStringLength', () => {
    expect(getStringLength('Olá, mundo')).toEqual(10)
})

it('hasSubstring', () => {
    expect(hasSubstring('Olá, mundo', 'mundo')).toBeTruthy()
})

it('toUpperCase', () => {
    expect(toUpperCase('Olá, mundo')).toEqual('OLÁ, MUNDO')
})