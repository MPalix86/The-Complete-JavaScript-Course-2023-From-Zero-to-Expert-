'use strict';
/**
 * come abbiamo visto in js le funzioni sono oggetti, e il campo prototype non è altro che una propeita
 * che viene aggiunta da js agli oggetti => le funzioni sono oggetti => le funzioni avranno
 * la propeita prototype
 */

const Person = function (name) {
  this.name = name;
};

/**
 * breve divagazione su cosnol.dir e console.log
 *
 * console.log():
 * È principalmente utilizzato per registrare messaggi di testo o variabili in una forma leggibile per gli sviluppatori.
 * Può essere utilizzato per visualizzare i valori delle variabili o stampare messaggi di debug.
 * Accetta un numero variabile di argomenti e li registra separatamente.
 * Formatta automaticamente gli oggetti JavaScript in una forma leggibile quando si passano oggetti come argomenti.
 *
 * console.dir():
 * È principalmente utilizzato per visualizzare la struttura di un oggetto JavaScript in modo dettagliato.
 * È utile quando si desidera esaminare tutte le proprietà e i metodi di un oggetto, specialmente oggetti complessi o annidati.
 * Accetta un oggetto come argomento e visualizza la sua struttura in modo più dettagliato rispetto a console.log().
 * Spesso utilizzato per esaminare l'albero dei nodi DOM o gli oggetti complessi in JavaScript.
 */

console.dir(Person);

/**
 * Tutti gli oggetti creati con il costruttore (new) avranno accesso alle propeita e ai metodi dichiarati nella proprietà
 * prototype della funzione che viene usata come costruttore!
 */

console.log(Person.prototype);

Person.prototype.saluta = function () {
  console.log('ciao ' + this.name);
};

const mirco = new Person('mirco');

mirco.saluta();

/**
 * se analizziamo l'oggetto mirco, ha un ogetto prototype che non contine nessun metodo ! tuttavia è in grado di richiamare
 * la funzione saluta grazie all'ereditarietà di prototipo. Com'è possibile ?
 * l'unico modo logico in cui questa ereditarietà puo funzionare è che il prototype dell'oggetto creato punti a quello della funzione che lo crea !
 * ma se analizziamo il prototype dell'oggetto creato non contiene i metodi ! e inoltre se faccio:
 */

console.log(mirco.prototype == Person.prototype); // ottengo false

/**
 * come funziona allora tutto questo ?
 *
 * di fatto ogni oggetto contiene un altro campo chiamato __proto__, che punta al prototipo della funzione che ha creato l'oggetto
 * in altre parole mirco.__proto__ = Person.prototype
 *
 * questo significa che prototype non è di fatto il prototypo della funzione o dell'oggetto creato, ma è cio che verra
 * utilizzato come prototipo se si decidesse di utilizzare quella determinata funzione come Constructor (new)!
 *
 * di fatto il prototipo di ogni oggetto è __proto__  !
 * mentre prototype è il prototipo che faresti ereditare (dentro __proto__) agli eventuali oggetti che verranno
 * creati sando la funzione come constructor (new)
 *
 * è un bordello e di certo hanno avuto una fantasia di cacca nel chiamare tutto uguale, ma in realta non
 * è difficile
 *
 * la cosa che confonde è che hanno chiamato prototype una cosa che non è il prototype !
 */

console.log(mirco.__proto__ == Person.prototype); // ritorna true

/**
 * questo risolve anche il problema di dichiarare direttamente le funzioni nel costruttore con this che avevamo prima.
 * in qusto modo esiste solo una copia di questa funzione e ogni oggetto la riutilizza !
 */

/**
 * nella lezione precedente avevamo detto :
 *
 * - 1) per prima cosa durante l'esecuzione della funzione al suo interno viene creato un nuovo oggetto vuoto {}
 * - 2) l'oggetto this dentro la funzione verra settato all'oggetto appena creato, ovvero this = {}
 * - 3) l'oggetto vuoto appena creato viene linkato al prototipo ( piu avanti spiegheremo meglio questo)
 * - 4) l'oggetto creato viene automaticaticamente ritornato
 *
 * il 3) fa riferimento proprio a questo meccasimo spiegato ora
 * quando usiamo new viene creata una proprieta chiamata __proto__ che punta alprototype della funzione che lo sta creando
 */

/**
 * infatti se logghiamo mirco possiamo vedere la proprieta __proto__ ! ma se loggiamo Person no !
 * queto è il meccanismo per con cui js riconosce gli oggetti (non literal) e a chi sono linkati
 */

console.dir(Person.__proto__);
console.log(mirco.__proto__);
