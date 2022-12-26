// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.forms[0].search;
const list = document.getElementById('list');

async function fetchingCities() {
    return fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
        .then(resolve => resolve.json())
        .then(data => cities.push(...data))
}

fetchingCities();
const cities = [];

console.log(cities);

function filterByInput(input) {
    const output = cities.filter(item => {
        let city = item.city.toLowerCase();
        return city.includes(String(input));
    });
    return output;
}

function matchCities() {
    list.innerHTML = '';
    const cities = filterByInput(this.value);

    for (let value of cities) {
        let li = document.createElement('li');
        li.innerHTML = value.city;
        list.append(li);
    }
}

searchInput.addEventListener('input', matchCities)

