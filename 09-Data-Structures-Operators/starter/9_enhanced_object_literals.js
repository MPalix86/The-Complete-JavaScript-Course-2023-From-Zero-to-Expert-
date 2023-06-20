'use strict';

/**
 * un object literals è un ogettp scrittp a mano con tutti i campi nel codice
 * ES6 ha introdotto 3 metodi nuovi che rendono piu facile scrivere questo tipo di oggetti
 */

const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  /**
   * prima di ES6 per mettere openingHours dentro questo oggetto :
   * openingHours : openingHours
   * ora invece
   */
  openingHours,

  /**
   * il secondo enhancement riguarda le funzioni, in pratica possiamo direttamente
   * scrivere la funzione non come order : function(){...} (vecchio metodo)
   * ma possiamo fare così:
   */
  order() {
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
};

/**
 * l'ultimo enhancement riguarda il fatto che ora possiamo calcolare i nomi delle
 * proprietà dell'oggetto piuttosto che scriverli a mano, basta mettere i nomi delle proprietà
 * tra parentesi []
 */
const days = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];

const orari = {
  [days[0]]: {
    apertura: 5.0,
    chiusura: 20.0,
  },
  [days[1]]: {
    apertura: 5.0,
    chiusura: 20.0,
  },
  [`giorno_${1 + 2}`]: {
    apertura: 5.0,
    chiusura: 20.0,
  },
};

console.log(orari);
