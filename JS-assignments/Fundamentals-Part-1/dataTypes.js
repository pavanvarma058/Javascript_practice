/*
1.Declare a variable called isIsland and set its value according to your country. 
The variable should hold a Boolean value. Also declare a variable language, 
but don't assign it any value yet.

2.Log the types of isIsland, population, country and language to the console.
*/

let isIsland = false;
let language;
let country = "India";
let population = 1350;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);

/*
let, const and var﻿
1.Set the value of language to the language spoken 
where you live (some countries have multiple languages, but just choose one).

2.Think about which variables should be const variables (which values will never change, and which might change?). 
Then, change these variables to const.

3.Try to change one of the changed variables now, and observe what happens.
*/

language = "Telugu";
const count = "India";
count = "USA"; // Uncaught TypeError: Assignment to constant variable.
console.log(count); // Uncaught ReferenceError: count is not defined
console.log(language); // Telugu
