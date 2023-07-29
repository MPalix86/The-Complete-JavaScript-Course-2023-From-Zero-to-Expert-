'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderDelivery: function ({ obj }) {
    console.log(obj);
  },

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

// per destrutturare gli oggetti usiamo le parentesi graffe e non le quadre, tutto quello che
// dobbiamo fare è fornire i nomi di variabile esattamente uguali alle proprieta che vogliamo destrutturare

// const { name, location } = restaurant;
// console.log(name, location);

// questo dal punto di vista logico e sintattico dovrebbe funzionare ! stiamo destrutturando
// un oggetto. Tuttavia, mi da errore. Questo perche se andiamo ad analizzare l'oggetto this globale
// scopriamop che ha le seguenti proprietà
// {window: Window, self : Window, document:document, name = '',location = Location}
// e probabilemtne sono dichiarate come const quindi quello che sto facendo di fatto è provare a
// riassegnare quelle variabili e quindi il compilatore da errore !

console.log(this);

const restaurant1 = {
  _name: 'Classico Italiano',
  _location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

  order: function () {
    if (arguments.length == 0) return;
    const orders = [];

    for (let i = 0; i < arguments.length; i++) {
      let menuType = arguments[i][0];
      let menuIndex = arguments[i][1];
      // prettier mi rimuove sempre le parentesi per far ignorare a prettier la
      // linea di codice seguente si usa il commento
      // prettier-ignore
      orders.push( (this[menuType])[menuIndex]);
    }
    return orders;
  },
};

const { _name, _location } = restaurant1;
console.log(_name, _location);

// se volessimo che i nomi delle variabili siano diversi da quello usati nell'oggetto ?
const { name: restaurantName, location: restaurantLocation } = restaurant; // che è molto meglio rispetto a prima che abbiamo aggiunto i trattini
console.log(restaurantLocation, restaurantName);

// possiamo anche dare i valori di default nel caso la proprieta non dovesse esistere
// poiche menu non c'è nell'oggetto verra restituito il valore di default
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// vediamo ora come fare lo switching delle variabili per gli oggetti sfruttando la
// destrutturazione
let a = 111;
let b = 222;
const obj = { a: 23, b: 49, c: 56 };
// le variabili a e b sono gia state assegnate quindi non posso fare const/let {a,b} = obj
// in quanto le variabili verrebbero ridichiarate causando errore.

// la cosa piu logica che mi viene da fare è {a,b} = obj
// tuttavia anche in questo caso js da errore e questo perche quando qualcosa inizia con {}
// per js è un blocco di codice, e ovviamente non possiamo assegnare dei valori ad un blocco di codice
// il trick che si usa è mettere tutto tra parentesi tonde
({ a, b } = obj);
console.log(a, b);

// vediamo ora come funzionana il destructuring con i nested object
const oh = restaurant.openingHours;
// come per il destructuring degli array mi definisco un nested object
// si fa come per gli array
// prettier-ignore
const {fri: { open, close }} = oh;
console.log(open, close);

// vediamo ora un esempio pratico
// spesso in una funzione vogliamo solo alcuni argomenti di un oggetto, piuttosto che definire i singoli argomenti
// passiamo direttamente l'oggetto e poi lo destrutturiamo per come ci serve all'interno della funzione.
const restaurant3 = {
  name: 'ristorante bello',
  // prettier-ignore
  orderDelivery: function ({time,address='via del sole 23',mainIndex,starterIndex}) {
    console.log(time,mainIndex,address,starterIndex);
  },
};

// passiamo un oggetto che verra destrutturato automaticamente
restaurant3.orderDelivery({
  time: '22:35',
  mainIndex: 0,
  starterIndex: 2,
});
console.log('diocane');
