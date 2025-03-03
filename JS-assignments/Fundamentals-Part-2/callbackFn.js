/*
Functions Calling Other Functions﻿
1. Create a function called describePopulation. Use the function type you like the most.
   This function takes in two arguments: country and population, and returns a strings like this: 
  'China has 1441 million people, which is about 18.2% of the world'.

2. To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

3. Call describePopulation with data for 3 countries of your choice.
*/

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population, fn) {
  const percentage = fn(population);
  return `${country} has ${population} million people, which is about ${percentage.toFixed(
    2
  )}% of the world`;
}

const india = describePopulation("India", 1300, percentageOfWorld1);
console.log(india);
