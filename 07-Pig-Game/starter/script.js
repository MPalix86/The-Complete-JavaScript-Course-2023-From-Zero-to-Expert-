/**
 * piccolo gioco nel browser per esercitarsi !
 * aprire la pagina html in chrome per vedere
 */
'use strict';
// player0
const player0Panel = document.querySelector('.player--0');
const player0TempPoint = player0Panel.querySelector('#current--0');

// player1
const player1Panel = document.querySelector('.player--1');
const player1TempPoint = player1Panel.querySelector('#current--1');

// global
let isPalayer0Active = true;
let selectedPlayerPanel = player0Panel;
const btnHold = document.querySelector('.btn--hold');
const btnRollDice = document.querySelector('.btn--roll');
let selectedPlayerName = 'player0';
const overlay = document.querySelector('.overlay');
const dice = document.querySelector('.dice');
const modal = document.querySelector('.modal');
const btnNewGame = document.querySelector('.btn--new');
const winningScore = 50;

// console.log(overlay);

// console.log(player0Panel);
// console.log(player1Panel);
// console.log(btnHold);

function getSelectedTempScore() {
  let selectedPlayerTempScore =
    selectedPlayerPanel.querySelector('.temp-score');
  return selectedPlayerTempScore;
}

function getSelectedScore() {
  let score = selectedPlayerPanel.querySelector('.score');
  return score;
}

function switchActivePlayer() {
  if (isPalayer0Active) {
    player0Panel.classList.remove('player--active');
    player1Panel.classList.add('player--active');
    selectedPlayerPanel = player1Panel;
    selectedPlayerName = 'player1';
  } else {
    player1Panel.classList.remove('player--active');
    player0Panel.classList.add('player--active');
    selectedPlayerPanel = player0Panel;
    selectedPlayerName = 'player0';
  }
  isPalayer0Active = !isPalayer0Active;
}

function rollDice() {
  // recovering scores
  let tempScore = Number(getSelectedTempScore().textContent);
  let num = Math.floor(Math.random() * 6) + 1;

  // changing dice img
  let image = `dice-${num}.png`;
  dice.attributes.getNamedItem('src').value = image;

  // verify win
  if (num === 1) {
    getSelectedTempScore().textContent = 0;
    switchActivePlayer();
    return;
  }
  tempScore += num;
  getSelectedTempScore().textContent = tempScore;
}

function hold() {
  let score = Number(getSelectedScore().textContent);
  let tmpScore = Number(getSelectedTempScore().textContent);
  let totalScore = score + tmpScore;
  getSelectedScore().textContent = totalScore;
  getSelectedTempScore().textContent = 0;
  if (totalScore >= winningScore) {
    modal.classList.remove('hidden');
    modal.children[0].textContent = `${selectedPlayerName} WIN`;
    overlay.classList.remove('hidden');
    return;
  }
  switchActivePlayer();
}

function startNewGame() {
  location.reload();
}

btnNewGame.addEventListener('click', startNewGame);
btnHold.addEventListener('click', hold);
btnRollDice.addEventListener('click', rollDice);
