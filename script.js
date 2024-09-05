let compScoreElement = document.getElementById("compScore");
let yourScoreElement = document.getElementById("yourScore");
let resultDisplay = document.getElementById("result");
const choices = ["rock", "paper", "scissors"];
let compDisplay = document.getElementById("computerChoiceDisplay");
let playerDisplay = document.getElementById("playerChoiceDisplay");

let yourScore = 0;
let compScore = 0;

function choose(playerChoice) {
    let compChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (compChoice === playerChoice) {
        result = "IT'S A TIE";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (compChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (compChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (compChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    compDisplay.textContent = `Computer: ${compChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("win", "lose");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("win");
            yourScore++;
            yourScoreElement.textContent = yourScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("lose");
            compScore++;
            compScoreElement.textContent = compScore;
            break;
    }
}
