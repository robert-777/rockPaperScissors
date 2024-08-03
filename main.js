// Score variables
let humanScore = 0;
let computerScore = 0;

// randomly returns “rock”, “paper” or “scissors”
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = getRandomInt(3);
  return choices[randomChoice];
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let humanChoice = prompt(
    "What is our choice? (options: rock, paper, scissors)"
  );
  while (!choices.includes(humanChoice)) {
    humanChoice = prompt(
      "Invalid choice. Please choose between rock, paper, scissors"
    );
  }
  return humanChoice;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function playRound(humanChoice, computerChoice) {
  console.log("Round starts!");
  switch(humanChoice) {
    case "rock":
      if (computerChoice === "rock") {
        console.log("It's a tie!");
      }
      else if (computerChoice === "paper") {
        console.log("Computer wins!");
        computerScore++;
      }
      else if (computerChoice === "scissors") {
        console.log("You win!");
        humanScore++;
      }
      break;
    case "paper":
      if (computerChoice === "paper") {
        console.log("It's a tie!");
      }
      else if (computerChoice === "scissors") {
        console.log("Computer wins!");
        computerScore++;
      }
      else if (computerChoice === "rock") {
        console.log("You win!");
        humanScore++;
      }
      break;
    case "scissors":
      if (computerChoice === "scissors") {
        console.log("It's a tie!");
      }
      else if (computerChoice === "rock") {
        console.log("Computer wins!");
        computerScore++;
      }
      else if (computerChoice === "paper") {
        console.log("You win!");
        humanScore++;
      }
      break;
    default:
      console.log("Invalid choice");
      return;
  }
  return;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
