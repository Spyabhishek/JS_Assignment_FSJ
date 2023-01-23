// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

// var a = "hola";
// console.log(typeof (a));

// var b = true;
// console.log(typeof (b));

// var c;
// console.log(typeof (c));

// var d = null;
// console.log(typeof (d));


// ------- 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method. ------

// info = (first_name, last_name, marital_status, age, country) => {
//     return (`hey, My name is ${first_name} ${last_name}. My marital status is ${marital_status}. My age is ${age} & i'm from ${country}`)
// }
// console.log(info("Abhishek", "Kumar", "Unmarried", 22, "India"));


// ----- 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method. -----

// var a = "hey there";
// console.log(a.toUpperCase());


// ----- 4. Check if the string contains a word Script using includes() method.  ------

// var a = "Hello Everyone, hope you all are doing good";
// console.log(a.includes("hope"));

// ----- 5. Split the string into an array using split() method  ------

// var a = "Hi, how are you?";
// console.log(a.split(" "));

// ----- 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.  -----

// var a = "facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(a.split(" "));

// ----- 7. Use lastIndexOf to determine the position of the last occurrence of a script. ----- 

// var a = "Hello Everyone, hope you all are doing good";
// console.log(a.lastIndexOf("are"));

// ----- 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.  -----

// var a= "You cannot end a sentence with because because because is a conjunction";
// console.log(a.indexOf("because"));

// ----- 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.  -----

// let a = "       Hello World!       ";
// console.log(a.trim());

// ----- 10. Boolean value is either true or false. Write three JavaScript statement which provide truthy value - Write three JavaScript statement which provide falsy value. 

// var a = 0;
// var b = null;
// var c = undefined;
// console.log(Boolean(a));
// console.log(Boolean(b));
// console.log(Boolean(c));


// var d = "0";
// var e = [];
// var f = {};
// console.log(Boolean(d));
// console.log(Boolean(e));
// console.log(Boolean(f));


// ----- 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()..  -----
// console.log(4 > 3);   //true
// console.log(4 >= 3);  //true
// console.log(4 < 3);   //false
// console.log(4 <= 3);  //false
// console.log(4 == 4);  //true
// console.log(4 === 4); //true
// console.log(4 != 4);  //false
// console.log(4 !== 4); //false
// console.log(4 != '4');  //false
// console.log(4 == '4');  //true
// console.log(4 === '4'); //flase


// 12. Use the Date object to do the following activities
// const a = new Date();
// // What is the year today?
// console.log(a.getFullYear());
// // What is the month today as a number?
// console.log(a.getMonth());
// // What is the date today?
// console.log(a.getDate());
// // What is the day today as a number?
// console.log(a.getDay());
// // What is the hours now?
// console.log(a.getHours());
// //What is the minutes now?
// console.log(a.getMinutes());
// // Find out the numbers of seconds elapsed from January 1, 1970 to now.
// console.log(a.getTime());


// ----- 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)  -----

// var a = prompt("Enter the Base");
// var b = prompt("Enter the height");
// OR
// var a = 2;
// var b = 2;
// const area = 0.5 * a * b;
// console.log(area);

// ----- 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)  -----

// var x1 = 2;
// var x2 = 2;
// var y1 = 6;
// var y2 = 10;

// var slope = (y2-y1)/(x2-x1);
// console.log(slope); 

// ----- 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2. -----

// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// var r = prompt("Enter the radius");

//AREA
// var area = (Math.PI * r * r);
// console.log(area);

// CIRCUMFERENCE
// var circumference = (2 * Math.PI * r);
// console.log(circumference);


// ----- 17. Create a human readable time format using the Date time object ----- 

// YYYY-MM-DD HH:mm
// var todayDate = new Date().toISOString().slice(0, 10);
// console.log(todayDate);

// DD-MM-YYYY HH:mm


// DD/MM/YYYY HH:mm


// ----- 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.  ----- 

// var age = prompt("Enter your age");
// if (age >= 18) {
//     console.log("You are old enough to drive");
// } else {
//     console.log("You have to wait till you are 18 years old");
// }


// ----- 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? -----

// var number = 13;
// if (number%2 == 0){
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }

// ----- 20. Write a code which can give grades to students according to theirs scores: -----

// var scores = 405;
// if(scores >= 80 && scores <= 100) {
//     console.log("Grade is A");
// } else if ( scores >= 70 && scores <= 79){
//     console.log("Grade is B");
// }else if ( scores >= 60 && scores<= 69) {
//     console.log("Grade is C");
// }else if ( scores >= 50 && scores<= 59) {
//     console.log("Grade is D");
// }else if ( scores >= 0 && scores<= 49) {
//     console.log("Fail");
// } else {
//     console.log("Enter the number b/w 0-100");
// }

// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

//    var month = "August";
//     if(month=="september" | month== "October" | month == "November") {
//         console.log("The season is Autumn.");
//     } else if (month=="December" | month== "January" | month == "February"){
//         console.log("The season is Winter");
//     }else if ( month=="March" | month== "April" | month == "May") {
//         console.log("The season is Spring");
//     }else if (month=="June" | month== "July" | month == "August") {
//         console.log("The season is summer");
//     }else {
//         console.log("Enter the correct Month name");
//     }

// 22. Write a program which tells the number of days in a month.

// var month = "April";
// if (month == "January" | month == "March" | month == "May" | month == "July" | month == "August" | month == "October" | month == "December") {
//     console.log("31 Days ");
// } else if (month == "February") {
//     console.log("28 Days");
// } else if (month == "April" | month == "June" | month == "September" | month == "November") {
//     console.log("30 Days");
// } else {
//     console.log("Enter the correct Month name (1st letter capital)");
// }

// 23. Write a program which tells the number of days in a month, now consider leap year.
// var month = "February";
// if (month == "January" | month == "March" | month == "May" | month == "July" | month == "August" | month == "October" | month == "December") {
//     console.log("31 Days ");
// } else if (month == "February") {
//     console.log("29 Days");
// } else if (month == "April" | month == "June" | month == "September" | month == "November") {
//     console.log("30 Days");
// } else {
//     console.log("Enter the correct Month name (1st letter capital)");
// }

// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.unshift('Meat');   // unshift add in the begning of array
// shoppingCart.push('sugar');  // push add in the end of the array
// shoppingCart.splice(4, 1);  // splice took 2 param 1st is starting index and 2nd how many elements from that position.
// console.log(shoppingCart);

//26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// 27. The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
// - Find the median age(one middle item or two middle items divided by two)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use abs() method

 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
 ages.sort();
 Math.min(...ages);
 Math.max(...ages);
 
 

 console.log(ages);





