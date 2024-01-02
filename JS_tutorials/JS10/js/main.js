// Your first interactive game

let playGame = confirm("Shall we play rock, paper or scissors?");
if(playGame){
    let playerChoice = prompt("Please enter rock, paper or scissors.");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
            let result = playerOne === computer
                ? "Tie"
                : playerOne === "rock" && computer === "paper"
                ? `playerone: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerone: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerone: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerone: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing.")
        } else {
            alert("You didn't enter rock, paper or scissor.")
        }
    }else {
        alert("I guess you changed your mind. Maybe next time.")
    }
}else {
    alert("ok, maybe next time.");
}