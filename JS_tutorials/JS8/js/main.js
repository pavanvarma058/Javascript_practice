// conditionals: Ternary operator

// syntax
//condition ? exprIfTrue : exprIfFalse
let soup = "chicken soup";
let isCusomerBanned = false;
let soupAccess = isCusomerBanned ? "sorry, no soup for you" : soup ? `Yes, we have ${soup}` : "Sorry, we don't have soup";
console.log(soupAccess);

// testscore example
let testScore = 89;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
      ? "B"
      : testScore > 69
        ? "C"
        : testScore > 59
          ? "D"
          : "F";
console.log(`My test grade is a ${myGrade}`);

// rock paper and scissor example
let PlayerOne = "rock";
let computer = "rock";
let result =
  PlayerOne === computer
    ? "Tie"
    : PlayerOne === "rock" && computer === "paper"
      ? "Computer wins"
      : playerOne === "paper" && computer === "scissors"
        ? "Computer wins"
        : playerOne === "scissors" && computer === "rock"
          ? "Computer wins"
          : "Player wins";
console.log(result);



