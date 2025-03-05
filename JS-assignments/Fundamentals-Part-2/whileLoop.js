/*
The while Loop﻿
1. Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, 
   but this time using a while loop (call the array percentages3).

2. Reflect on what solution you like better for this task: the for loop or the while loop?
*/

function percentageOfWorld(population) {
  return ((population / 7900) * 100).toFixed(2);
}

const populations = [10, 1441, 332, 83];
const percentages3 = [];

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld(populations[i]));
  i++;
}

console.log(percentages3);
// I like the for loop better because it is more concise and easier to read.
