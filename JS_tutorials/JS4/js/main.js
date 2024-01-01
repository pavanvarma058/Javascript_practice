// Numbers

// An integer is a whole number
const myNumber = 42;

/* A number with a decimal point is a float 
which references the floating point */

const myFloat = 42.01;

//Number Methods 
/*The Number .isInteger() method determines whether the 
passed value is an integer or not */

console.log(Number.isInteger(myFloat));

/* The number .parseFloat() method parses an argument and 
returns a floating point number. If a number cannot be  parsed
from the argument, it returns NaN.*/

console.log(Number.parseFloat(myFloat));

/* The toFixed() method formats a number according to how 
many decimal points you provide as the paramter. */

console.log(myFloat.toFixed(2));

//The .toString() method returns  a string  representing the number.

console.log(myFloat.toString());



