// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
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
    return cities.map(value => {
            return {
                state: value.state,
                city: value.city,
                population: value.population
            }
        }
    )
        .filter(item => {
            const city = item.city.toLowerCase();
            const state = item.state.toLowerCase();
            const output = city + ' ' + state;
            return output.includes(input);
        });
}

function formatNumberOfPopulation(number) {
    return new Intl.NumberFormat('en-US').format(number);
}

Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});

function matchCities() {
    list.innerHTML = '';
    const cities = filterByInput(this.value);
    const regexp = new RegExp(this.value, 'gi');
    for (let value of cities) {
        const li = document.createElement('li');
        const spanMain = document.createElement('span');
        const spanPop = document.createElement('span');

        let city = value.city;
        let state = value.state;
        // allNames = allNames.replace(regexp, `<span class="hl">${searchInput.value}</span>`);
        city = city.replace(regexp, `<span class="hl">${searchInput.value}</span>`);
        city = city.capitalize();

        state = state.replace(regexp, `<span class="hl">${searchInput.value}</span>`);
        state = state.capitalize();

        const population = formatNumberOfPopulation(value.population);

        let allNames = `${state} ${city}`;

        spanMain.classList.add('tagged');
        // spanMain.innerHTML = `${state} ${city}`;
        spanMain.innerHTML = allNames;
        spanPop.style.fontSize = 16+'px';
        spanPop.innerHTML = population;
        li.append(spanMain, spanPop);


        list.append(li);
    }

}


searchInput.addEventListener('input', matchCities);
// list.addEventListener('change', markTeggedLi)

