function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const div = document.querySelector("div");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");

let humanScore = 0;
let computerScore = 0;
const btnReload = document.createElement("button");
btnReload.textContent = "Mulai Lagi";
btnReload.style.marginTop = "30px";

div.appendChild(btnReload);

btnReload.addEventListener("click", () => {
  location.reload();
});

function playRound(humanChoice, computerChoice) {
  const span = document.createElement("span");
  const para = document.createElement("p");
  const para2 = document.createElement("p");

  
  if (humanChoice === computerChoice) {
    span.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    span.textContent = "You Win!";
    humanScore++;
  } else {
    span.textContent = "You Lose!";
    computerScore++;
  }

  div.appendChild(para);
  div.appendChild(para2);
  div.appendChild(span);

  if (humanScore === 5) {
    para.textContent = "You are the Winner!!";
    para2.textContent =
      "Human: " + humanScore + " | Computer: " + computerScore;
  }

  if (computerScore === 5) {
    para.textContent = "You are the Loser!!";
    para2.textContent =
      "Human: " + humanScore + " | Computer: " + computerScore;
  }
}

btnRock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

btnPaper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

btnScissor.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
