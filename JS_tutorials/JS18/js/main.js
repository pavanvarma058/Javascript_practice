// Javascript errors and errror handling
/* Any code that is not syntactically correct will cause an error.
And it will be not executed if it is in try block and then it will go
catch block and print the error message.
And finally method will be executed, no matter what
*/


"use strict";
// variable = "pavan";
// console.log(variable);

const makeError = () => {
  let i = 1;
  while(i<=5){
    try {
      if(i%2 !== 0){
        throw new Error("odd number");
      }
      console.log("Even number");
    } catch (err) {
      console.error(err.stack);
    } finally{
      console.log("...finally");
      i++;
    }
  }
  
};
makeError();

// function customError(message) {
//   this.message = message;
//   this.name = "CustomError";
//   this.stack = `${this.name} ${this.message}`;
// }
