import inventors from './data/data_inventors.js'
// import {people} from '/data/data_people.js';
// import data from './data/data_transports.js';

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const oldInventors = inventors.filter(inventor => inventor.year >= 1501 && inventor.year <= 1601);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const namesInventors =  inventors.map(inventor => {
    return {first: inventor.first, last: inventor.last};
})
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortInventors = inventors.sort((a, b) => a.year - b.year);
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalLiveInventors = inventors.reduce((prev, cur) => {
    return prev += (cur.passed - cur.year);
}, 0);
// 5. Sort the inventors by years lived
const sortOldToYoungInv = inventors.sort((a,b) => {
    return (b.passed - b.year) - (a.passed - a.year);
})
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these

console.log(oldInventors);
console.log(namesInventors);
console.log(sortInventors);
console.log(totalLiveInventors);
console.log(sortOldToYoungInv);