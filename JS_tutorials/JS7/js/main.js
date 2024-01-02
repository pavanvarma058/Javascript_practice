// conditionals if and else statements
let customerIsBanned = false;
let soup = "chicken noodle soup";
let reply;
let crackers = true;
if (customerIsBanned) {
  reply = "You are not allowed to eat here";
} else if (soup && crackers) {
  reply = `Here is your ${soup} and crackers`;
} else if (soup) {
  reply = `Here is your ${soup}`;
} else {
  reply = "Sorry, we don't have that";
}
console.log(reply);

// another example
let testScores = 89;
let collegeStudent = true;
let grade;

if (testScores >= 90) {
  grade = "A";
} else if (testScores >= 80) {
  grade = "B";
} else if (testScores >= 70) {
  grade = "C";
} else if (testScores >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}
console.log(grade);

// rock, paper and scissor
if(playerOne == computer){
    //tie game
  } else if(playerOne == "rock"){
    if(computer == "paper"){
      //computer wins
    } else {
      //player wins
    }
  } else if(playerOne == "paper"){
    if(computer == "scissors"){
      //computer wins
    } else {
      //player wins
    }
  } else if(playerOne == "scissors"){
    if(computer == "rock"){
      //computer wins
    } else {
      //player wins
    }
  } else {
    //invalid input
  }


switch (Math.floor(Math.random() * 10 + 1)){
    case 1:
        console.log(1);
        break;
        
    case 2:
        console.log(2);
        break;
    
    case 3:
        console.log(3);
        break;    

    default:
        console.log("no match");
}




