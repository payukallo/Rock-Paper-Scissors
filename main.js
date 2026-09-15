function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  } }

function getHumanChoice() {
  let humanChoice = prompt("rock, paper, or scissors", "");
  return humanChoice ? humanChoice.toLowerCase() : "";
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose!");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win!");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win!");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose!");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose!");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win!");
      humanScore++;
    } else {
      console.log("Wrong input");
      computerScore++;
    } }

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  console.log(
    "Final Score..!!  Human " + humanScore + " | Computer Score " + computerScore);

  if (humanScore > computerScore) {
    console.log("You are the Winner!!");
  } else if (humanScore < computerScore) {
    console.log(" You are the Loser");
  } else {
    console.log("It's a tie..");
  }
}

playGame();
