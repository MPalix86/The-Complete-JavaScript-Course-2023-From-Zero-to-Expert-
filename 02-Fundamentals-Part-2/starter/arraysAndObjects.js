"use strict";
const friends = ["mirco", "ba", "lore"];
console.log(friends[2]);

// notiamo che anche se l'array è dichiarato come const il codice sotto
// funziona ugualmente! lo vederemo più in dettaglio dopo questa cosa
// per ora basta sapere che questo avviene perche solo i valori primitivi sono immutabili
friends[2] = "marco";
console.log(friends[2]);

// quello che non possiamo fare è sostituire l'intero array
// friends = ['bob','mark','giovanni']; // questo non posso farlo

const user = {
  nome: "mirco",
  congome: "palese",
  annoNascita: 1995,

  calcAge: function (annoNascita) {
    return 2023 - annoNascita;
  },
};

// quel'è la differenza tra queste 2 notazioni ?
console.log(user.nome); // in questa accediamo alla proprieta e non possiamo fare altrimenti
console.log(user["nome"]); // in questa possiamo non scrivere direttamente la stringa del campo che volgio ma la posso calcolare tramite qualche operazione

function getNome() {
  return "nome";
}
console.log(user[getNome()]);

// possiamo anche chiamare i metodi definiti all'interno dell'oggetto
console.log(user.calcAge(1995));
console.log(user["calcAge"](1995));

// notiamo tuttavia che l'anno di nascita  è presente all'interno dell'oggetto e lo stiamo semplicemente ripetendo
// è qui dobbiamo usare this !

const user1 = {
  nome: "mirco",
  congome: "palese",
  annoNascita: 1995,
  // ora capiamo anche ameglioa cosa servono le functions expression
  calcAge: function () {
    console.log(this);
    return 2023 - this.annoNascita;
  },
};

// inoltre notiamo che this è l'oggetto stessto
console.log(user1.calcAge());

// ci possiamo chiedere perche piuttosto che usare this non facciamo una cosa del genere :
const user2 = {
  nome: "mirco",
  congome: "palese",
  annoNascita: 1995,
  calcAge: function () {
    // AL POSTO DI THIS ABBAIMO USATO L'OGGETTO STESSO
    return 2023 - user2.annoNascita;
    // non facciamo questo perche se dovessimo cambiare il nome dell'oggetto da user3
    // a qualsiasi altra cosa, la funzione non funzionerebbe piu !
  },
};

// per far funzionare il segunete codice commentare tutto quello che c'è sopra tranne use strict
// console.log('---------------')
// possiamo inoltre calcolare proprieta all'interno dell'oggetto e salvare al momento stesso sempre grazie a this
const user3 = {
  nome: "mirco",
  congome: "palese",
  annoNascita: 1995,

  calcAge: function () {
    this.age = 2023 - this.annoNascita;
    return this.age;
  },

  age: function () {
    if (typeof this.age != "number") {
      console.log("calling calcage");
      this.age = this.calcAge();
    }
    return this.age;
  },
};

console.log(user3.age());
// console.log(user3.age()) // will cause error because now age is not a function but a parameter
console.log(user3.age);
