/*
Iteration: The for Loop﻿
1. There are elections in your country! in a small town, there are only 50 voters. 
   Use a for loop to simulate the 50 people voting,
  by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.
*/

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

/*
Looping Arrays, Breaking and Continuing﻿
Let's bring back the populations array from a previous assignment.

Use a for loop to compute an array called percentages2 containing the percentages of the world population 
for the 4 population values. Use the function percentageWOrld1 that you created earlier.

Confirm that percentages2 contains exactly the same values as the percentages array that we created manually 
in the previous assignment, and reflect on how much better this solution is.
*/

function percentageOfWorld(population) {
  return ((population / 7900) * 100).toFixed(2);
}

const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);
