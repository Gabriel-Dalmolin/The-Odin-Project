let computer_choice;
let player_choice;
const plays = ["rock", "scissors", "paper"];
const wins = {"rock": "scissors", "paper": "rock", "scissors": "paper"};

const player_wins_label = document.querySelector("#player-wins")
const computer_wins_label = document.querySelector("#computer-wins")

let player_wins = 0
let computer_wins = 0


function getComputerChoice(){
    random_number = Math.floor(Math.random()*3);
    computer_choice = plays[random_number]
    return computer_choice
}

function checkIfWinner(){
    if (player_wins >= 5){
        resultsText.textContent = "The player won!!"
    } else if (computer_wins >= 5){
        resultsText.textContent = "The computer won!!"
    } else {
        return
    }

    paperButton.removeEventListener("click", playRoundPaper);
    rockButton.removeEventListener("click", playRoundRock);
    scissorsButton.removeEventListener("click", playRoundScissors);
}

function playRound(player_choice){
    computer_choice = getComputerChoice()

    if (computer_choice == player_choice) {
        resultsText.textContent = ("it was an draw! player chose: " + player_choice + " and the computer chose: " + computer_choice);
    } else {
        if (wins[player_choice] == computer_choice){
            resultsText.textContent = ("The player won! player chose: " + player_choice + " and the computer chose: " + computer_choice);
            player_wins++;
            player_wins_label.textContent = "Player wins: " + player_wins;
        } else {
            resultsText.textContent = ("The computer won! player chose: " + player_choice + " and the computer chose: " + computer_choice);
            computer_wins++;
            computer_wins_label.textContent = "Computer wins: " + computer_wins;
        }
        checkIfWinner()
    }
}

function playRoundPaper(){
    playRound("paper");
}

function playRoundRock(){
    playRound("rock");
}

function playRoundScissors(){
    playRound("scissors");
}

const paperButton = document.querySelector("#paper");
const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");

const resultsText = document.querySelector(".results");

paperButton.addEventListener("click", playRoundPaper);
rockButton.addEventListener("click", playRoundRock);
scissorsButton.addEventListener("click", playRoundScissors);
