const btnRollDice1 = document.getElementById("rollDice1");
const dice1 = document.getElementById("dice1");
const btnRollDice2 = document.getElementById("rollDice2");
const dice2 = document.getElementById("dice2");
const btnRollDiceAll = document.getElementById("rollDiceAll");
const LOG = document.getElementById("LOG");

btnRollDice1.addEventListener("click", printDice1);
btnRollDice2.addEventListener("click", printDice2);
btnRollDiceAll.addEventListener("click", printDiceAll);

function printDice1() {
  const min = 1;
  const max = 7;
  const value = Math.floor(Math.random() * (max - min)) + min;
  dice1.innerHTML = value;
  diceLog(value);
}

function printDice2() {
  const min = 1;
  const max = 7;
  const value = Math.floor(Math.random() * (max - min)) + min;
  dice2.innerHTML = value;
  diceLog(value);
}

function printDiceAll() {
  const min = 1;
  const max = 7;
  const value1 = Math.floor(Math.random() * (max - min)) + min;
  const value2 = Math.floor(Math.random() * (max - min)) + min;
  dice1.innerHTML = value1;
  dice2.innerHTML = value2;
  diceLog(value1, value2);
}

function diceLog(dice1 = null, dice2 = null) {
  if (dice1 != null && dice2 != null) {
    LOG.innerHTML += `<li><span class="${dice1 > dice2 ? "win" : "lose"}">"dice 1" roll ${dice1}</span> and <span class="${dice2 > dice1 ? "win" : "lose"}">"dice 2" roll ${dice2}</span></li>`;
  } else {
    LOG.innerHTML += `<li>"dice" roll ${dice1}</li>`;
  }
}
