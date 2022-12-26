const searchInput = document.forms[0].search;
const list = document.getElementById('list');

async function fetchingCities() {
    return fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
        .then(resolve => resolve.json())
        .then(data => cities.push(...data))
}

fetchingCities()
const cities = [];

console.log(cities);

function filterByInput(input) {
    const regexp = new RegExp(input, 'gi');
    return cities.map(value => {
            return {
                state: value.state,
                city: value.city,
                population: value.population
            }
        }
    )
        .filter(item => {
            const city = item.city;
            const state = item.state;
            return city.match(regexp) || state.match(regexp);
        });
}

function formatNumberOfPopulation(number) {
    return new Intl.NumberFormat('en-US').format(number);
}

// it turns out there is a text-transofrm prop :D

// Object.defineProperty(String.prototype, 'capitalize', {
//     value: function() {
//         return this.charAt(0).toUpperCase() + this.slice(1);
//     },
//     enumerable: false
// });

function matchCities() {
    list.innerHTML = '';
    const cities = filterByInput(this.value);
    const regexp = new RegExp(this.value, 'gi');
    for (let value of cities) {
        const li = document.createElement('li');

        const city = value.city.replace(regexp, `<span class="hl">${searchInput.value}</span>`);
        const state = value.state.replace(regexp, `<span class="hl">${searchInput.value}</span>`);
        const population = formatNumberOfPopulation(value.population);

        li.innerHTML = `
        <span class="tagged">${state}, ${city}</span>
        <span>${population}</span>`
        list.append(li);
    }

}


searchInput.addEventListener('input', matchCities);

