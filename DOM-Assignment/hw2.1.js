const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
// ---
// - create an empty set
// - Create a set containing 0 to 10 using loop
// - Remove an element from a set
// - Clear a set
// - Create a set of 5 string elements from array
// - Create a map of countries and number of characters of a country


// const iSet = new Set();
// for(let i = 0; i<= 10; i++){
//     iSet.add(i);
// }

// console.log(iSet.delete(8));
// console.log(iSet);

// iSet.clear();
// console.log(iSet);


/* Create a set of 5 string elements from array

const str = new Set(["hey", "hi", "hola","namaste", "Hiee"]);
console.log(str);

*/

const nMap = new Map();
countries.forEach((country) =>{
    nMap.set(country, country.length)
});

console.log(nMap);