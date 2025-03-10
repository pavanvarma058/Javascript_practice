/*
Introduction to Objects﻿
1. Create an object called myCountry for a country of your choice, containing properties 
   country, capital, language, population and neighbours (an array like we used in previous assignments).
*/

const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1380,
  neighbours: [
    "Pakistan",
    "China",
    "Nepal",
    "Bhutan",
    "Bangladesh",
    "Myanmar",
    "Sri Lanka",
  ],
};

/*
Using the object from the previous assignment, log a string like this to the console:
 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

Increase the country's population by two million using dot notation,
 and then decrease it by two million using bracket notation
*/

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

/*
Object Methods﻿
Add a method called describe to the myCountry object. 
This method will log a string to the console, similar to the string logged in the previous assignment, 
but this time using the 'this' keyword.

Call the describe method.

Add a method called checkIsland to the myCountry object. 
This method will set a new property on the object, called isIsland. 
isIsland will be true if there are no neighbouring countries, and false if there are. 
Use the ternary operator to set the property.
*/

myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  );
};

myCountry.describe();

myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length === 0 ? true : false;
};

myCountry.checkIsland();
console.log(myCountry.isIsland);
