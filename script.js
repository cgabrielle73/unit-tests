const googleDatabase = [
    'animals.com',
    'dogslover.com',
    'imstupid.com',
    'butimnot.com',
    'gabrielsfreakingout.com',
    'flower.com',
    'prouddogmom.com',
]

const googleSearch = (searchInput, db) => {
    const matches = db.filter(search => search.includes(searchInput));
    return matches.length > 3 ? matches.splice(0, 3) : matches;
}

googleSearch('dog', googleDatabase);

module.exports = googleSearch;