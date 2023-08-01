const fetch = require('node-fetch');
const { getPeople, getPeoplePromise } = require('./script2');

//Jest Cheat Sheet: https://github.com/sapegin/jest-cheat-sheet

//First way of using asynchronous tests with the keyword Done()
it('calls getPeople function to get people', (done) => {
    //With asynchronous tests, always use the expect.assertions
    expect.assertions(1)
    getPeople(fetch).then(data => {
        expect(data.count).toEqual(82)
        done()
    })
})

//Second way of handling asynchronous data
it('calls getPeoplePromise function to get people', () => {
    expect.assertions(2)
    return getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(82)
        expect(data.results.length).toBeGreaterThan(3)
    })
})