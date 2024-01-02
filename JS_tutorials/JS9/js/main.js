// user Input 
// alert("Hello World!");

// let myBoolean = confirm("ok === true\nCancel === false");
// console.log(myBoolean);

let myName = prompt("Please enter your name?");
if(myName){
  console.log(myName.length);
  console.log(myName.trim().length);
  console.log(myName);
} else {
  console.log("You didn't enter your name");
}
