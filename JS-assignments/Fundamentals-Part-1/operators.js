/*
Basic Operators﻿

1. If your country split in half, and each half would contain half the population, 
   then how many people would live in each half?

2. Increase the population of your country by 1 and log the result to the console.

3. Finland has a population of 6 million. Does your country have more people than Finland?

4. The average population of a country is 33 million people. Does you country have less people than the average country?

5. Based on the variables you created, create a new variable description which contains a 
string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
*/

let country = "India";
let population = 1380;
let halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);
let finlandPopulation = 600;
console.log(population > finlandPopulation);
let averagePopulation = 33;
console.log(population < averagePopulation);
let description = `${country} is in Aisa, and it has population of ${population} million`;
console.log(description);
