'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function () {
    if (arguments.length == 0) return;
    const orders = [];

    for (let i = 0; i < arguments.length; i++) {
      let menuType = arguments[i][0];
      let menuIndex = arguments[i][1];
      // prettier-ignore
      orders.push( (this[menuType])[menuIndex]);
    }
    return orders;
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// array destructuring è una feature introdotta con ES6 ed è un modo per decomporre
// i valori di un array o un oggetto in valori separati
const arr = [2, 3, 4, 5];

// questo che sembra un array in realtà è il destructuring,
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4

// posso destrutturare anche solo parzialmente e lasciando spazi vuoti salto elementi
let [first, , second] = restaurant.categories;
console.log(first, second);

// ora mettiamo il caso che vogliamo sostituire first con second
const temp = first;
first = second;
second = temp;
console.log(first, second);

// con il destructuring lo possiamo fare direttamente cosi:
// senza bisogno di una variabile temporanea
[first, second] = [second, first];
console.log(first, second);

// un'altro trick del destructing è che possiamo avere una funzione che ritorna un'array
// e poi destrutturarlo subito, in questo modo riuscimo a ricevere n valori di ritorno da una funzione
const [starter, main] = restaurant.order(['starterMenu', 1], ['mainMenu', 0]);
console.log(starter, main);

// cosa succede se abbiamo un nested array ?
const nested = [2, 4, ['ciao', 'mirco'], 5];
const [a1, , arr1] = nested;
console.log(a1, arr1);

// è possibile decomporre anche un nested array
const [r, , [j, k]] = nested;
console.log(r, j, k);

// se non sappiamo il numero di elementi di un array possiamo destrutturarlo ugualmente
// const [p,t,l] = [8,5]
// console.log(p,y,l) // l sara semplicemente undefined
// la cosa interessante è che posso anche assegnare dei valori di default nel caso alle variabili
const [p = 1, t = 2, l = 3] = [8, 5];
console.log(p, t, l);
