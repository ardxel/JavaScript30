import { inventors, people, data } from './data.js'

//original source
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function fifteen() {
    return this.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
};
export { fifteen as original1 }
// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
function fullNames() {
    return this.map(inventor => `${inventor.first} ${inventor.last}`);
}
export { fullNames as original2 };
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function(a, b) {
//   if(a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

function ordered() {
    return this.sort((a, b) => a.year > b.year ? 1 : -1);
}
export { ordered as original3 };

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
function totalYears() {
    return inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0)
}
export {totalYears as original4};
// 5. Sort the inventors by years lived
const oldest = inventors.sort(function (a, b) {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;
});

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});

// 8. Reduce Exercise
// Sum up the instances of each of these
const transportation = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});