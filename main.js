let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
   let computerChoice = Math.random();
if (computerChoice < 1/3) {
   return "rock";
} else if (computerChoice < 2/3) {
   return "paper";
} else {return "scissors";
}
}

function getHumanChoice() {
   let humanChoice = prompt("Rock, Paper, or Scissors", "");
   return humanChoice ? humanChoice.toLowerCase() : " ";
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playAround(humanChoice, computerChoice) {
   if (humanChoice === computerChoice) {
      console.log("Draw");} 
      else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You Lose");}
      else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You Win");}
      else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You Win");}
      else if (humanChoice === "paper" && computerChoice === "scissors" ) {
      console.log("You Lose");}
      else if (humanChoice === "scissors" && computerChoice === "rock" ) {
      console.log("You Lose");}
      else if (humanChoice === "scissors" && computerChoice === "paper" ) {
      console.log("You Win");}
      else {console.log("Try Again");}
}

playAround(humanChoice, computerChoice);

