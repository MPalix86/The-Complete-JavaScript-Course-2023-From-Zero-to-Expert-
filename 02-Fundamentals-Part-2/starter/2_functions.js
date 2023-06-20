"use strict";

// FUNCTION DECLARATION
function calcAge1(birthDate) {
  return 2023 - birthDate;
}

const age1 = calcAge1(1995);

// FUNCTION EXPRESSION
/**
 * in js le funzioni sono trattate e sattamente come oggeti. quindi posso
 * salvare una funzione dentro una varibili.
 *
 * dichiarare una funzione cosi è sostanzialmente equivalente a quello scritto sopra
 * l'unica differenza è che queste non possono essere usate prima di averle definite
 */
const calcAge2 = function (birthDate) {
  return 2023 - birthDate;
};
const age2 = calcAge2(1995);

// ARROW FUNCTION
// una arrow function è sempreuna function expression ma è piu veloce da scrivere
// e ha alcune differenze che vedremo dopo come ad esempio con l'uso di this e arguments
const calcAge3 = (birthDate) => {
  return 2023 - birthDate;
};
const age3 = calcAge3(1995);

console.log(age1, age2, age3);
