/*
Taking Decisions: if / else Statements﻿
1. If your country's population is greater than 33 million, log a string like this to the 
console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

2. After checking the result, change the population temporarily to 13 and then to 130.
 See the different results, and set the population back to original.
*/

let country = "India";
let population = 1300;

if (population > 330) {
  console.log(
    `${country}'s population is ${population - 330} million above average`
  );
} else {
  console.log(
    `${country}'s population is ${330 - population} million below average`
  );
}
