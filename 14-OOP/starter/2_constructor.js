'use strict';

/**
 * questa è una normale funzione !
 */
let Person = function (firstName, phoneNumber) {
  console.log(firstName);
};

/**
 * come facciamo a creare un oggetto da questa funzione ?
 *
 * la funzione constructor si richiama semplicemente aggiungendo la keyword new accanto ad una funzione normale
 *
 * inoltre, nell' OOP c'è una convenzione secondo la quale le classi degli oggetti iniziano con la lettera maiuscola,
 * in questo caso la classe è rappresentata dal constructor, quindi :
 *
 * Attenzione poiche stiamo creando un oggetto tramite una funzione non possiamo usare le arrow function !
 * questo perche le arrow function non hanno un propria keyword this che negli oggetti è fondamentale.
 */

new Person('mirco', 64387);

/**
 * in questo modo abbiamo creato un nuovo oggetto !
 * ma vediamo cosa succede dietro le quinte :
 *
 * - 1) per prima cosa durante l'esecuzione della funzione al suo interno viene creato un nuovo oggetto vuoto {}
 * - 2) l'oggetto this dentro la funzione verra settato all'oggetto appena creato, ovvero this = {}
 * - 3) l'oggetto vuoto appena creato viene linkato al prototipo ( piu avanti spiegheremo meglio questo)
 * - 4) l'oggetto creato viene automaticaticamente ritornato
 *
 * il trick chiave è proprio quest'ultimo ! richiamando la funzione con new viene automaticamente ritornato l'oggetto
 * vuoto che è stato  creato . Sapendo che l'oggetto this punta all'oggetto vuoto creato all'interno
 * della funzione, e che la funzione ritornera automaticamente questo oggetto, possiamo fare cosi :
 */

Person = function (firstName, phoneNumber) {
  this.firstName = firstName;
  this.phoneNumber = phoneNumber;
};

const p1 = new Person('mirco', 78768);

console.log(p1);

/**
 * abbiamo creato p1 che è un istanza di person per verificarlo usiamo l'operatore instanceOf
 */

console.log(p1 instanceof Person); // return true !

/**
 * per creare i metodi basterebbe fare :
 */
Person = function (firstName, phoneNumber) {
  this.firstName = firstName;
  this.phoneNumber = phoneNumber;

  this.saluta = () => {
    console.log('bella');
  };
};

/**
 * tuttavia questa è una bad practice perche in questo modo, definedo le funzioni nel costruttore,
 * succede che ogni volta che creiamo un nuovo oggetto la funzione verrebbe copiata nel nuovo oggetto
 * avendo, in base al numero di oggetti, centiania o migliaia di copie della stessa funzione !
 */
