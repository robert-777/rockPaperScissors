// randomly returns “rock”, “paper” or “scissors”
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = getRandomInt(3);
    return choices[randomChoice];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
