/*
Functions﻿
1.Write a function called describeCountry which takes 
three parameters: country, population and capitalCity. 
Based on this input, the function returns a string with this format: 
'Finland has 6 million people and its capital city is Helsinki'.

2.Call this function 3 times, with input data for 3 different countries. 
Store the returned values in 3 different variables, and log them to the console.
*/

function describeCountry(country, population, captialCity) {
  return `${country} has ${population} million people and its capital city is ${captialCity}`;
}

const country1 = describeCountry("India", 1300, "New Delhi");
const country2 = describeCountry("USA", 330, "Washington D.C.");
const country3 = describeCountry("UK", 67, "London");
console.log(country1);
console.log(country2);
console.log(country3);

/*
Function Declarations vs. Expressions﻿
1.The world population is 7900 million people. Create a 
function declaration called percentageOfWorld1 which receives a population value,
and returns the percentage of the world population that the given population represents. 
For example, China has 1441 million people, so it's about 18.2% of the world population.

2.To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

3.Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables,
 and log them to the console.

4.Create a function expression which does the exact same thing, called percentageOfWolrd2, 
and also call it with 3 country populations (can be the same populations).
*/

// function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const india = percentageOfWorld1(1300);
const china = percentageOfWorld1(1441);
const usa = percentageOfWorld1(330);
console.log(india.toFixed(2), china.toFixed(2), usa.toFixed(2));

// function expression
const percentageOfWolrd2 = function (population) {
  return (population / 7900) * 100;
};

const india1 = percentageOfWolrd2(1300);
const china1 = percentageOfWolrd2(1441);
const usa1 = percentageOfWolrd2(330);
console.log(india1.toFixed(2), china1.toFixed(2), usa1.toFixed(2));
