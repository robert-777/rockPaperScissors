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
  ).toLowerCase();
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

function displayCurrentScores(){
  console.log("Current Scores:");
  console.log("Player Score: " + humanScore);
  console.log("Computer Score: " + computerScore);
}

function playGame() {
  let roundCount = 0;

  console.log("##### TicTacToe ####");
  displayCurrentScores();
  console.log("# Rules: #");
  console.log("# The Game is a best out of 5");
  console.log("# The firstplayer to win 3 matches");
  console.log("# also wins the entire game.");
  console.log("# Good luck and have fun!");
  
  while (humanScore < 3 && computerScore < 3){
    roundCount++;
    console.log("---------------");
    console.log("## Round "+ roundCount);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    displayCurrentScores();
  }

  if(humanScore >= 3){
    console.log("Congratulations! You won against the computer.")
    console.log("Final Score: " + humanScore + " : " + computerScore);
  }
  else{
    console.log("You lost to the computer. Better luck next time.")
    console.log("Final Score: " + computerScore + " : " + humanScore);
  }
}

playGame();
