const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]
// ---

// - Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
// - Destructure and assign the elements of countries array to fin, est, sw, den, nor
// - Destructure the rectangle object by its properties or keys.
// - Iterate through the users array and get all the keys of the object using destructuring
// - Find the persons who have less than two skills
// ---

// - Create a closure which has one inner function
// - Create a closure which has three inner functions

/**********************************************************/

/* - Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

*/

/* Destructure and assign the elements of countries array to fin, est, sw, den, nor

const [fin, est, sw, den, nor] = countries;

*/

/* - Destructure the rectangle object by its properties or keys.

let { height, area, perimeter, width } = rectangle;
console.log(rectangle);

*/

/* - Iterate through the users array and get all the keys of the object using destructuring

users.forEach((user) => {
    let { age, name, scores, skills } = user;
    console.log(age, name, scores, skills);
})

*/

/* - Find the persons who have less than two skills

let lessThanTwoSkills = users.filter((user) => user.skills.length <= 2);
console.log(lessThanTwoSkills);

*/

// - Create a closure which has one inner function.

let hello = () => {
    let a = "hi";
    // console.log(a);
    let innerFunction = () => {
        console.log(a);
    };
    innerFunction();
};

hello();



