'use strict';
/**
 * vediamo ora come funziona l'ultimo modo per creare oggetti che conserva la prototype delegation ma
 * ha delle sostanziali differenze rispetto a ai metodi visti prima.
 *
 * Object.create ci permette di linkare il __proto__ di un ogetto literal qualsiasi ad un oggetto
 */

const personProto = {
  saluta: function () {
    console.log('ciao');
  },

  init: function (name) {
    this.name = name;
  },
};
const mirco = Object.create(personProto);

/**
 * quindi Object.create ritorna un nuovo oggetto con il __proto__ linkato a personProto
 * per il resto rimane vero tutto quello che abbiamo detto prima sulla catena dei __proto__ [[prototype]] ecc
 */

mirco.init('mirco');

// prettier-ignore
console.log("mirco.__proto__ == personProto" , mirco.__proto__ == personProto); // true

/**
 * vediamo ora l'ereditarieta tra classi ! fino ad ora abbiamo visto la prototype delegation !
 * tuttavia se voglio estendere una classe per ereditare dei metodi da un altra classe non so come fare !
 *
 * in pratica voglio sfruttare la prototype delegation per creare l'ereditarietà tra classi ! quello che voglio fare è che:
 * ammettiamo di avere 2 classi Person e Student, student è anche person quindi dovrebbe ereditare tutte le sue
 * proprieta e metodi.
 *
 * Nella pratica raggiungeremo questo scopo sfruttando sempre la prototype delegation
 */

const Person = function (name) {
  this.name = name;
};

Person.prototype.saluta = function () {
  console.log('ciao ' + this.name);
};

// const Student = function (name, voto) {
//   Person(name);
//   this.voto = voto;
// };

/**
 * ovviamente questa non funziona, mi dira che name è una proprietà di undefined !
 * questo perche stiamo chiamando Person senza l'operatore new, ovvero come una funziona normale
 * e nelle funzioni normali se chiamate senza nessun operatore avranno this undefined ! dobbiamo abbinare this noi
 */

/**
 * per abbinare il this alla funzione usiamo la funzione "call" che ci permette di passare come primo parametro
 * un oggetto da abbinare a this
 */
const Student = function (name, voto) {
  Person.call(this, name);
  this.voto = voto;
};

/**
 * Chiamando person in questo modo , this dentro Person sara uguale a this dentro Student,
 */

Student.prototype.sonoBravo = function () {
  if (this.voto >= 5) console.log('bravo');
  else console.log('merda');
};

let luca = new Student('luca', 5);

/**
 * Tuttavia ancora non ho raggiunto niente, infatti se vado a vedere la catena di __proto__ di luca
 * avro la classica catena standard, ovver:
 * luca.__proto__ == Student.prototype
 * luca.__proto__.__proto__ = Object.prototype
 * luca.__proto__.__proto__.__proto__ = null
 */
console.log(luca);

/**
 * fin qui niente di nuovo, quello che vogliamo raggiungere noi è qualcosa del genere
 * luca.__proto__ == Student.prototype
 * luca.__proto__.__proto__ = Person.prototype
 * luca.__proto__.__proto__.__proto__ = Object.prototype
 * luca.__proto__.__proto__.__proto__.__proto__ = null
 *
 * in questo modo ereditiamo sia tutte le proprieta di Person,
 * ( dato che prototype dentro person ha constructor che punta a Person stessa)
 * e in piu siamo anche in grado di "ereditare" tutti i metodi di Person tramite la prototype delegation
 *
 * abbiamo studiato che la Object.create ci permette di linkare il __proto__ di un oggetto a qualcosa che
 * decidiamo noi !
 *
 * potremmo pensare che basti fare :
 */

Student.__proto__ = Person.prototype;

// prettier-ignore
console.log("Student.__proto__ == Person.prototype: ", Student.__proto__ == Person.prototype); // true

/**
 * ora ovviamente devo ricreare l'oggetto luca
 */

luca = new Student('luca', 5);

// prettier-ignore
console.log("luca.__proto__ == Student.prototype ", luca.__proto__ == Student.prototype); // true

/**
 * che è esattamente quello che ci aspettiamo
 */

// prettier-ignore
console.log("luca.__proto__.__proto__ == Person.prototype ", luca.__proto__.__proto__ == Person.prototype); // FALSE

/**
 * NON funziona. perche ?
 * rivediamo i passaggi:
 * Student.__proto__ == Person.prototype ---> true
 * luca.__proto__ == Student.prototype ---> true
 * luca.__proto__.__proto__ == Person.prototype ---> false
 *
 * ho sbagliato perche ho invertito ! quello che l'oggetto luca eredita
 * in __proto__ è Student.prototype non student.__proto__
 * la cosa corretta da fare è :
 */

//Student.prototype = Person.__proto__;

/**
 *
 * non solo Student.prototype = Person.__proto__; non funziona ma da anche errore
 */

luca = new Student('luca', 10);

// prettier-ignore
console.log("luca.__proto__.__proto__ == Person.prototype ", luca.__proto__.__proto__ == Person.prototype) // false

/**
 * proviamo a farlo sfruttando object.create()
 */

Student.prototype = Object.create(Person.prototype);

luca = new Student('luca', 12);

// prettier-ignore
console.log("luca.__proto__.__proto__ == Person.prototype ", luca.__proto__.__proto__ == Person.prototype) // true

/**
 * ora perche Student.prototype = Person.__proto__; non funziona e
 * Student.prototype = Object.create(Person.prototype); funziona ?
 * L'assegnazione Student.prototype = Object.create(Person.prototype); è corretta perché
 * crea un nuovo oggetto vuoto che ha Person.prototype come suo prototipo.
 * Questo significa che Student.prototype eredita tutte le proprietà e i metodi definiti
 * nel prototipo di Person, che è esattamente ciò che desideri quando stai cercando di ottenere
 * l'ereditarietà dei metodi.
 * D'altro canto, l'assegnazione Student.prototype = Person.__proto__; è sbagliata perché
 * Person.__proto__ fa riferimento direttamente al prototipo dell'oggetto Person.
 * Questo significa che Student.prototype avrebbe fatto riferimento direttamente al prototipo
 * di Person, invece di creare un nuovo oggetto prototipo vuoto basato su Person.prototype.
 * L'oggetto Person.prototype dovrebbe rimanere invariato per garantire che le istanze di Person continuino a comportarsi correttamente.
 * In altre parole, Object.create(Person.prototype) crea un nuovo oggetto che eredita da Person.
 * prototype, mentre Person.__proto__ fa riferimento direttamente al prototipo di Person,
 * il che può causare problemi se si tenta di modificarlo.
 * Quindi, l'uso di Object.create è la pratica corretta quando si tratta di creare una catena di prototipi
 * e di ereditare metodi in JavaScript.
 *
 *
 *
 * ovviamente con le classi ES6 funziona tutto uguale ma cambia solo la sintassi
 * che è molto piu simile a quello che gia conosciamo da java ecc...
 * da notare tuttavia che è solo la sintassi che cambia tutto qeullo che abbiamo spiegato qui rimane vero !
 */
