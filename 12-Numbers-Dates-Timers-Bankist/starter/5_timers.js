'use strict';

/**
 * esistono 2 tipi di timer
 * questo è il primo tipo,
 * ovevro una funzione NON bloccante alla quale passo una callback che viene
 * eseguita nel momento in cui il timer finisce
 */

setTimeout(() => {
  console.log('🍕');
}, 2000);
console.log('test');

/**
 * e se volessi passare un argomento alla callback?
 * tutti glia rgomenti che passo dopo il delay time saranno argomenti della
 * mia callback
 */

setTimeout(
  text => {
    console.log(text + ' 🍕');
  },
  2000,
  'io sono un argomento'
);

/**
 * un'ultima particolarità di questa funzione è che possiamo passare effettivamente
 * bloccare il timer prima che siano il delay di tempo impostato !
 */

const ingredients = ['pasta', 'pizza', 'ceci', 'farina'];
setTimeout(
  (arg1, arg2, arg3, arg4) => {
    console.log(arguments + ' 🍕');
  },
  2000,
  ...ingredients
);

/**
 * per qualche motivo quando la eseguo mi esce arguments is not defined !
 * perche ?
 * perche per le arrow functions arguments non è definito !!
 */

setTimeout(
  function (arg1, arg2, arg3, arg4) {
    // prettier-ignore
    // arguments non è un vero è proprio array e non supporta tutti i metodi degli array
    // per questo lo converto in un vero array ( lo spread operator è supportato)
    const args = [...arguments]
    console.log(args, ' 🍕');
  },
  2000,
  ...ingredients
);

/**
 * per bloccare un timer dobbiamo salvarlo e poi passarlo alla funzione clearTimeout
 */
const pizzaTimer = setTimeout(
  function (arg1, arg2, arg3, arg4) {
    // prettier-ignore
    // arguments non è un vero è proprio array e non supporta tutti i metodi degli array
    // per questo lo converto in un vero array ( lo spread operator è supportato)
    const args = [...arguments]
    console.log(args, ' 🍕');
  },
  2000,
  ...ingredients
);

if (ingredients.includes('pizza')) {
  console.log('pizzaTimer bloccato');
  clearTimeout(pizzaTimer);
}

/**
 * setInterval è uguale a setTimeout ma viene eseguita ogni n secondi specificati
 * fin quando non viene bloccata
 */

const interval = setInterval(
  function (text) {
    // prettier-ignore
    // arguments non è un vero è proprio array e non supporta tutti i metodi degli array
    // per questo lo converto in un vero array ( lo spread operator è supportato)
    const args = [...arguments]
    console.log(text);
  },
  1000,
  'set interval'
);

setTimeout(() => {
  clearInterval(interval);
}, 10000);

/**
 * immaginiamo di voler creare un timer che conti n minuti e dopo quegli n minuti di inattivita
 * disconnette l'utente per motivi di sicurezza
 */
const logoutTimer = function () {
  const time = document.querySelector('#time');
  const minInMillis = 1000 * 60;
  const dividend = 2;
  const minutes = 1;
  const logoutTime = (minutes / dividend) * minInMillis;
  let timePassed = 0;
  const minInSec = 60 / dividend;

  const intervalTimer = setInterval(() => {
    timePassed++;
    console.log(timePassed);
    let timepassedInMillis = timePassed * 1000;
    let minutes = Math.trunc((logoutTime - timepassedInMillis) / 1000 / 60);
    let seconds = minInSec - timePassed;
    Math.getse;
    time.textContent = `${minutes}:${seconds}`;
  }, 1000);

  let timer = setTimeout(() => {
    clearInterval(intervalTimer);
    time.textContent = 'LOGOUT PER INATTIVITA';
  }, logoutTime);

  document.addEventListener('click', () => {
    time.textContent = 'TIMER RESETTATO';
    timePassed = 0;
    clearInterval(timer);
    timer = setTimeout(() => {
      clearInterval(intervalTimer);
    }, logoutTime);
  });
};

logoutTimer();
