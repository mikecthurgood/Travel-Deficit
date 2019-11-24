const fs = require('fs')

let data = fs.readFileSync('factbook.json')

data = JSON.parse(data)

const countries = Object.values(data.countries)

const new_countries = countries.filter(country => !!country.data.people === true)

result = new_countries.map(country => ({
    name: country.data.name.toLowerCase(),
    description: country.data.introduction.background,
    continent: country.data.geography.map_references,
    population: country.data.people.population.total,
    nationality: country.data.people.nationality,
    climate: country.data.geography.climate,
    terrain: country.data.geography.terrain,
    natural_hazards: country.data.geography.natural_hazards
}))

// console.log(newer)
fs.writeFile('country_stats.json', JSON.stringify({ countries: result }), err => { })