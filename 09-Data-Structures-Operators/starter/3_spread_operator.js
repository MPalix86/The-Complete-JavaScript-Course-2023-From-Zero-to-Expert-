'use strict';
const arr = [7, 8, 9];
const badNewArr = [5, 6, arr[0], arr[1], arr[2]];

// lo spread operator espande tutti gli elementi di un array, letteralmente è come se scrivesse arr[0], arr[1], arr[2]
console.log(...arr);
console.log(arr);

// è possibile notare inoltre che lo spread operator è simile al destructuring, la grande differenza è che lo spread operator
// toglie tutti gli elementi dagll'array e inoltre non crea nuove variabili
const newArr = [1, 2, ...arr];
console.log(newArr);

// 2 possibili use case sono
// 1) creare copie superficiali (ovvero se ci sono nested array non verranno copiati ma verra copiato solo il riferimento a quest)
//  di array
const arrayCopy = [...arr]; // aver messo [] significa nuovo array

// 2) merge di 2 o piu array
const mergeArray = [...arr, ...arrayCopy];

// in realta lo spread operator funziona su ogni elemento Iterable
// Iterables : arrays, string, maps, sets. Gli oggetti NON sono Irerable
const firstName = 'mirco';
const mircoLetters = [...firstName];
console.log(mircoLetters);
console.log(...mircoLetters);

// vediamo come applicarlo agli argomenti di una funzione
function ordPasta(ing1, ing2, ing3) {
  console.log(ing1, ing2, ing3);
}

// prettier-ignore
const ingredients = ['s', 's','s']

ordPasta(ingredients[0], ingredients[1], ingredients[2]);
ordPasta(...ingredients);

// dal 2018 lo spread operator funziona anche con gli oggetti anche se gli oggetti rimangono non iterable
const restaurant = {
  address: 'via del sole 70',
  name: 'good restaurant',
  menu: ['pasta', 'pizza', 'cacca', 'pastaschifosa'],
};

// copia superficialmente tutte le proprieta dell'oggetto nel nuovo oggetto
const newRestaurant = { founded: 1898, ...restaurant };
restaurant.menu = restaurant.menu.push('pipi');
console.log(newRestaurant);
