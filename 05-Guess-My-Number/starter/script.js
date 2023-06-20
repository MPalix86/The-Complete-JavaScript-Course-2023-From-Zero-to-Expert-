'use strict';

/**
 * piccolo programma di esericizio in cui bisogna indovinare un numero gernerato casualemtne !
 */

const maxNum = 21;
let actualNum = getNumber();
let highScore = 0;
const maxScore = 20;
let win = false;
document.querySelector('.score').textContent = maxScore;

let guess = document.getElementsByClassName('guess').value;
console.log(`actual num ${actualNum}`);

function getNumber() {
  return Math.floor(Math.random() * maxNum);
}

function updateScore() {
  if (win) return;
  let score = Number(document.querySelector('.score').textContent);
  if (score > 0) {
    document.querySelector('.score').textContent = --score;
  } else {
    console.log('else');
    document.querySelector('.message').textContent = ' 🤦 YOU LOSE 🤦';
  }
  return score;
}

const check = () => {
  if (win) return;
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  let score = updateScore();
  if (score > 0) {
    if (guess === actualNum) {
      console.log('vittoria');
      document.querySelector('.message').textContent = '🎉 YOU WIN 🎉';
      win = true;
      if (score > highScore) highScore = score;
      document.querySelector(
        '.label-highscore'
      ).textContent = `🥇 Highscore: ${highScore}`;
      document.body.style.backgroundColor = 'green';
    } else if (guess > actualNum) {
      document.querySelector('.message').textContent = 'too high! Decrease ⬇️';
    } else if (guess < actualNum) {
      document.querySelector('.message').textContent = 'too low! Increase ⬆️';
    }
  }
};

const again = function () {
  win = false;
  actualNum = getNumber();
  console.log(actualNum);
  document.querySelector('.message').textContent = 'GUESS THE NUMBER';
  document.querySelector('.score').textContent = maxScore;
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = 'black';
};

document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', again);
