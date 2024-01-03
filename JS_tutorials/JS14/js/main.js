// Arrays 
const myArray = [];

// add elements to an array
myArray[0] = "Pavan";
myArray[1] = 1001;
myArray[2] = false;

// myArray.push("Yeswanth");
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// myArray.unshift("gsoc");
// console.log(myArray);
// myArray.shift();
/*myArray.splice(1, 0, "Pavan");
console.log(myArray);*/



/*const myArray = ['A', 'B', 'C', 'D', 'E', 'F'];
const newArray = myArray.slice(1, 3);
console.log(newArray);

const newString = myArray.join();
console.log(newString);*/


// refer to an array
// console.log(myArray);
// Length property
// console.log(myArray.length);
// last element in an array
// console.log(myArray[myArray.length - 1]);
// console.log(myArray[1]);


/*const myArrayA = ['A', 'B', 'C']
const myArrayB = ['D', 'E', 'F'];
const newArray1 = myArrayB.concat(myArrayA);
console.log(newArray1);*/

// Arrays example
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "soccer", "tennis"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoddies"];

// console.log(equipShelfA[0]);
//or
// console.log(clothesShelfB[1]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][2]);
