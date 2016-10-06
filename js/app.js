

$(function initialize() {
  addEventListeners();
})

function addEventListeners() {
  var lis = $("li");
  lis.each(function(index, li) {
    $(li).click(function() {
      return play(li);
    });
  });
  $("#clearButton").click(clear);

}
var humanScoreGlobal= 0;
var computerScoreGlobal= 0;
function play(move) {

  var moves = ["rock", "paper", "scissors"];
  var playerMove = moves.indexOf(move.id);
  var computerMove = getComputerMove();
  var winner = getWinner(playerMove, computerMove);
  var playerText = moves[playerMove];
  var computerText = moves[computerMove];
  return updatePage(winner);
}

function getComputerMove() {
  return Math.floor(Math.random()*3);
}

function clear(){
  var humanScore = $("#humanScore");
  var computerScore = $("#computerScore");
  var message = $("#message");
  humanScore.innerText= "0";
  computerScore.innerText= "0";
  message.innerText= "";
  humanScoreGlobal = 0;
  computerScoreGlobal= 0;
}

function getWinner(playerMove, computerMove) {
  console.log(playerMove, computerMove);
  var winMatrix = [
    ["draw", "player", "computer"],
    ["computer", "draw", "player"],
    ["player", "computer", "draw"]
  ];
  return winMatrix[computerMove][playerMove];
}

function updatePage(winner) {
  var humanScore = document.getElementById("humanScore");
  var computerScore = document.getElementById("computerScore");
  var message = document.getElementById("message");
  var winningScore= parseInt(document.getElementById("winningScore").value);

  if (winner === "player") {
    humanScore.innerText++;
    message.innerText = "Player wins!";
    humanScoreGlobal++;
  } else if (winner === "computer") {
    computerScore.innerText++;
    message.innerText = "Computer wins!";
    computerScoreGlobal++;
  } else {
    message.innerText = "It's a draw!";
  }
  console.log(humanScoreGlobal);
  console.log(winningScore);
  if (humanScoreGlobal >= winningScore){
    alert("You WIN!");
    clear();

  }
  else if(computerScoreGlobal >= winningScore){
    alert("Sorry Computer Wins");
    clear();
  }
}
