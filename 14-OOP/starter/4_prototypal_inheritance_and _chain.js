'use strict';

/**
 * prendiamo come esempio la funzione :
 */

const Person = function (name) {
  this.name = name;
};

Person.prototype.saluta = function () {
  console.log('ciao ' + this.name);
};

const mirco = new Person('mirco');

// console.log(mirco);

/**
 * 
 * da qui in poi quando diro prototype intendo il l'ogetto prototype 
 * (ovvero quello che dovrebbe chiamarsi prototypeOfLinkedObject)
 * 
 * e quando diro __proto__ intendo il vero prototype
 *
 * a questo punto abbiamo la funzione costruttore Person dentro la quale abbiamo un oggetto chiamato
 * prototype che contiene il metodo saluta.
 *
 * se analizziamo prototype ( letteralemtne dalla console lo esapndiamo )
 * notiamo che c'è un loop infinita, perche dentro prototype abbiamo una funzione
 * chiamata constructor che a sua volta ha un oggetto prototype che a sua volta ha una funzione chiamata
 * constructor e cosi via.
 *
 * questo perche quella funzione constructor altro non è che un puntatore alla funzione di partenza stessa
 * in questo caso Person ! è un loop !

 *
 *
 * ____constructor___                ____prototype____
 * |                |               |                 |
 * |                |-------------> | Person.prototype|
 * |    Person()    |               | - saluta()      |
 * |                |<------------- | - constructor() |
 * |________________|               |_________________|
 *
 * infatti:
 * 
 */

console.dir(Person.prototype.constructor); // punta a Person

/**
 * detto questo vediamo ora la catena di __proto__
 *
 * __proto__ dentro mirco, è un oggetto che punta al prototype della funzione che lo ha creato.
 *
 * infatti se vediamo il tipo di __proto__ dentro  mirco scopriamo che è di tipo f()
 * ed è esattamente la funzione Person (come ci aspettiamo) questo perche dentro prototype c'è il costruttore
 * che punta a person come spiegato prima
 *
 * notare che __proto__ è segnato nell'oggetto quando facciamo console.log NON come __proto__
 * ma come [[Prototype]]
 *
 */

console.log(mirco.__proto__);

/**
 * mirco ha __proto__ che punta al prototype di Person che punta a Person stessa,
 * che essendo a sua volta un oggetto dovrà avere un __proto__ che punta al prototipo della funzione
 * che lo ha creato, e cosi via
 * scorpiamo qual'è questa funzione
 */

console.log(mirco.__proto__.__proto__);

/**
 * è Object ! quindi il __proto__ di Person punta al prototype di Object
 * ma Object  avra quindi un suo __proto__ che punta a al prototype di chi lo ha creato
 */

console.dir(mirco.__proto__.__proto__.__proto__);

/**
 * è null ! Object essendo l'oggetto da cui parte tutto ha il prototype = null !
 * e si interrompe la catena
 *
 * Tutto questo meccanismo che abbiamo spiegato funziona esattamente identico anche
 * per le classi ES6, ma non per Object.create() (che vedremo dopo)
 *
 * questo meccaniscmo inoltre ci consente di delegare i metodi a catena fino ad object,
 * detto in altre parole mirco puo chiamare i metodi dentro prototype di person e di object
 */

/**
 * come detto prima : attenzione quando andiamo a vedere dentro la proprieta [[prototype]] di una funzione quella è __proto__
 * hanno fatto un casino con i nomi ! ma è importante non fare confusione ! infatti contiene tutti i metodi ereditati come fill map ecc
 */

/**
 * vediamo un altro esempio
 */

const arr = [1, 2, 3, 4, 3, 3, 5, 1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.__proto__); // contiene tutti i metodi degli array

/**
 * arr.__proto__ = Array.prototype proprio come ci aspettiamo
 *
 * infatti se andiamoa  vedere la documentazione di js per un qualsiasi metodo degli array
 * ad esempio map è segnato come
 * Array.prototype.map()
 * perche il metodo map è contenuto nella proprieta prototype di Array!
 *
 * ma questo significa anche che posso estendere le funzionalita degli array semplicemente
 * aggiungendo metodi ad Array.prototype e questi metodi funzioneranno su tutti gli array !
 *
 * per esempio posso creare una funzione che mi ritorna tutti i valori dell'array senza duplicati
 */

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

/**
 * anche se questa non è una buona idea !! e non andrebbe mai fatto.
 *
 * possiamo gli stessi ragionamenti fatti sopra co qualsiasi ogetto
 */

const h1 = document.querySelector('h1');

console.dir(h1);
console.log(h1.__proto__); // ecc ecc
//ecc
//ecc
