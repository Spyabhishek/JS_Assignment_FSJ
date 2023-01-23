const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
/*
---
- Explain the difference between forEach, map, filter, and reduce.
- Define a callback function before you use it in forEach, map, filter or reduce.
- Use forEach to console.log each name in the names array.
- Use forEach to console.log each country in the countries array.
- Use forEach to console.log each number in the numbers array.
- Use map to create a new array by changing each country to uppercase in the countries array.
- Use map to create an array of countries length from countries array.
- Use map to create a new array by changing each number to square in the numbers array
- Use map to change to each name to uppercase in the names array
- Use map to map the products array to its corresponding prices.
- Use filter to filter out countries containing land.
- Use filter to filter out countries having six character.
- Use filter to filter out countries containing six letters and more in the country array.
- Use filter to filter out country start with 'E';
- Use filter to filter out only prices with values.
- Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
- Use reduce to sum all the numbers in the numbers array.
- Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
- Explain the difference between some and every
- Use some to check if some names' length greater than seven in names array
- Use every to check if all the countries contain the word land
- Explain the difference between find and findIndex.
- Use find to find the first country containing only six letters in the countries array
- Use findIndex to find the position of the first country containing only six letters in the countries array
- Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
- Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

*/

//--------------------------------------------------------------------------------
// syntax: array.forEach() -- forEach() calls a function once for each element in an array, in order and it allows to iterate through elements of that array.

// var numbers = [1,2,3,4,5]
// var doubledNumbers = []
// // forEach
// numbers.forEach(
// function(num){
//   doubledNumbers.push(num * 2)
// })
// console.log(doubledNumbers)


// map() is a method applied on arrays which return a new array after performing given action on each element without disturbing the original array. map takes 2 arguments, a callback and an optional context.
// var numbers = [1,2,3,4,5]
// // map
// var doubledNumbers = numbers.map(function(num){
//     return (num * 2)
// })
// console.log(doubledNumbers)



// filter() is a method applied on arrays which returns a new array with all elements that pass the test implemented by the provided function. It returns an empty array if none of the element pass the test. It doesn't change the original array.

// let numbers = [1, 2, 3, 4, 5, 6];
// let even = numbers.filter(n => n % 2 != 0)
// console.log(even);

// Reduce() is a method applied on arrays which executes a reducer function on each element of the array and returns a single output. It won't execute the function if the array is empty.

// Syntax -- array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)
// current index, arr, initialValue are optional parameters

// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

/******************************************************************************/

/* Use forEach to console.log each name in the names array.

names.forEach((name) =>{
    console.log(name)
});

*/

/* Use forEach to console.log each country in the countries array.

countries.forEach((country) => {
    console.log(country);
});

*/

/* Use map to create a new array by changing each country to uppercase in the countries array.

let country = countries.map(n => n.toUpperCase());
console.log(country);

*/

/* Use map to create an array of countries length from countries array.

let countryLen = countries.map((c) => c.length);
console.log("countries Len", countryLen);

*/

/* Use filter to filter out countries having six character.

let country = countries.filter((count) => count.length === 6);
console.log(country);

*/

/* Use filter to filter out countries containing six letters and more in the country array.

let country = countries.filter((country) => country.length > 6);
console.log(country);

*/

/* Use filter to filter out country start with 'E'.

let country = countries.filter(country => country.startsWith('E'));
console.log(country);

*/

// let product = products.filter(prod => prod.price);
// console.log(product);

// let prod = products.filter((p) => p.price > 3);
// console.log(prod);

// let sum = numbers.reduce((acc, num) => acc + num);
// console.log(sum);

/* Use map to create a new array by changing each number to square in the numbers array

let square = numbers.map( n => n**2);
console.log(square);

*/

/* Use map to change to each name to uppercase in the names array

let uName = names.map(n => n.toUpperCase());
console.log(uName);

*/

/* Use filter to filter out countries containing land.

let filterC = countries.filter((name) => name.toLowerCase().includes('land'));
console.log(filterC);

*/

/********************************************************************************/

/* Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists = (str) => {
  return str.filter((strs) => typeof strs === 'string');
}

let arr = [ true, 'Hey', 'Hola', false, 23, '45', {isActive: true}, null];
console.log(getStringLists(arr));

*/

/* Use reduce to sum all the numbers in the numbers array.

let arr = [ 1, 2, 3, 4, 5, 6];
let sum = arr.reduce((acc, num) => acc + num );
console.log(sum);

*/


// - Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// - Explain the difference between some and every


/* - Use some to check if some names' length greater than seven in names array

const isSeven = names.some((name) => name.length > 7);
console.log("Nmaes length greater than seven is" , isSeven);

*/

/* Use every to check if all the countries contain the word land.

const wordLand = countries.every((country) => {
  country.toLowerCase().includes('land');
});

console.log("Countries that include land is", wordLand);

*/

// - Explain the difference between find and findIndex.

/* - Use find to find the first country containing only six letters in the countries array

let sixLettersCountries = countries.find((country) => country.length === 6);
console.log(sixLettersCountries);

*/

/* - Use findIndex to find the position of the first country containing only six letters in the countries array

let position = countries.findIndex((country) => country.length === 6);
console.log(position);

*/

/* - Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

let positionNorway = countries.findIndex((country) => country === 'Norway');
console.log(positionNorway);

*/

// - Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

// let positionRussia = countries.findIndex((country)=> country === 'Russia');
// console.log(positionRussia);