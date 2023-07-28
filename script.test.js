const googleSearch =  require('./script')

const dbMock = [
    'animals.com',
    'doglover.com',
    'flower.com',
    'prouddogmom.com',
]

describe('googleSearch', () => {
    it('this is a test', () => {
        expect(googleSearch('testess', dbMock)).toEqual([]);
        expect(googleSearch('flower', dbMock)).toEqual(['flower.com']);
        expect(googleSearch('dog', dbMock)).toEqual(['doglover.com', 'prouddogmom.com']);
    })

    it('working with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })

    it('working with 3 values', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })
})
