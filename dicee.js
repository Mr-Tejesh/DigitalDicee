rollDice();

function rollDice() {
  var player1DiceValue = Math.floor(Math.random() * 6) + 1;
  var player2DiceValue = Math.floor(Math.random() * 6) + 1;
  if (player1DiceValue === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
  } else if (player1DiceValue === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
  } else if (player1DiceValue === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
  } else if (player1DiceValue === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
  } else if (player1DiceValue === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
  } else if (player1DiceValue === 6) {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
  }

  if (player2DiceValue === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
  } else if (player2DiceValue === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
  } else if (player2DiceValue === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
  } else if (player2DiceValue === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
  } else if (player2DiceValue === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
  } else if (player2DiceValue === 6) {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
  }
}

document.querySelector(".roll").addEventListener("click", function () {
  rollDice();
});

document.addEventListener("keydown", function (event) {
  if (event.key == " ") {
    rollDice();
  }
});
console.log(player1DiceValue);
console.log(player2DiceValue);
