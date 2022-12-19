import { inventors, data, people } from "./data.js";

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function oldInventors() {
    return this.filter(inventor => inventor.year >= 1501 && inventor.year <= 1601)
};
export { oldInventors as myFunc1 };

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// const namesInventors = inventors.map(inventor => {
//     return { first: inventor.first, last: inventor.last };
// })
function namesInventors() {
    return this.map(inventor => `${inventor.first} ${inventor.last}`);
}
export { namesInventors as myFunc2 }

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
function sortInventors() {
    return this.sort((a, b) => a.year - b.year);
}
export { sortInventors as myFunc3 }

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
function totalLiveInventors() {
    return this.reduce((prev, cur) => {
        return prev += (cur.passed - cur.year);
    }, 0)
}
export {totalLiveInventors as myFunc4};
// 5. Sort the inventors by years lived
const sortOldToYoungInv = inventors.sort((a, b) => {
    return (b.passed - b.year) - (a.passed - a.year);
})
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these

