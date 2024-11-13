const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
let winner = [0,0];

console.log(buttons);


for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", playGame);
}

function playGame(e){
console.log("User" + " " + e.target.innerText);
let playerSelection = e.target.innerText;
let computerSelection = Math.random();
console.log(computerSelection);
if(computerSelection < 0.34){
    computerSelection = "Rock";
} else if(computerSelection <= 0.67){
    computerSelection = "Paper"; 
} else { 
    computerSelection = "Scissors"; 
}
console.log("Computer" + " " +computerSelection);
let result = checkWinner(playerSelection, computerSelection);
console.log(result);

if(result == "player"){
    result += " wins!";
    winner[0]++;
}else if(result == "computer"){
    result += " wins!";
    winner[1]++;
}
else {
    result += "It's a tie!";
}
score.innerHTML = "<small>Player</small>[" + winner[0] + "] <small>Computer</small>[" + winner[1] + "]";

messenger(playerSelection + " vs " + computerSelection + "<br><b>" + result + "</b>");

}

function messenger(mes){
    message.innerHTML=mes;
}


function checkWinner(player, computer) {
    console.log(player, computer);
    if (player === computer) {
        return "";
    }
    if (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper")
    ) {
        return "player";
    }
    return "computer";
}
