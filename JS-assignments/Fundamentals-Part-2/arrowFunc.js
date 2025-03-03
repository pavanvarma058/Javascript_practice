/*
Arrow Functions﻿
1. Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.
*/

const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

const china = percentageOfWorld3(1441);
const japan = percentageOfWorld3(126);
const europe = percentageOfWorld3(741);
console.log(china.toFixed(2), japan.toFixed(2), europe.toFixed(2));
