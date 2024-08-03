// randomly returns “rock”, “paper” or “scissors”
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = getRandomInt(3);
    return choices[randomChoice];
}

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let humanChoice = prompt("What is our choice? (options: rock, paper, scissors)");
    while (!choices.includes(humanChoice)) {
        humanChoice = prompt("Invalid choice. Please choose between rock, paper, scissors");
    }
    return humanChoice;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getHumanChoice());
