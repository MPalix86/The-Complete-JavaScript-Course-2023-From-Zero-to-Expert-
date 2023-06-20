'use strict';
/**
 * una mappa è una struttura dati che serve a mappare chiavi con valori,
 * proprio come gli oggetti, l'unica differenza è che nella mappa le chiavi possono
 * avere qualsiasi tipo, mentre negli oggetti possono essere solo stringhe.
 * creiamo la mappa con il costruttore e poi aggiungiamo elementi con il metodo set
 */

const rest = new Map();
rest.set(0, 'argomento bello');
rest.set('nome', 'via di guincer');

console.log(rest);

// i set si possono concatenare

// prettier-ignore
rest
.set(1, 'test')
.set(2, 'test2')
.set(3,'test3')

rest.delete(2);

rest.set([1, 2], 'anche gli array possono essere chiavi');
/**
 * ovviamente assegnando in questo modo un array come chiave il valore non sara
 * piu recuperabile perche se provassi a fare rest.get([1,2]) per recuperare il valore
 * non funzionerebbe dato che verrebbe un nuovo array nell'heap con indirizzo diverso !
 * per far si che funzioni bisogna prima salvare l'array
 */
const arr = [1, 2];
rest.set(arr, 'testArr');

console.log(rest.get(arr));

/**
 * l'usare qualsiasi cosa come chiave ci puo tornare molto utile specialmente
 * quando lavoriamo con l'interfaccia grafica, infatti gli elementi del dom non sono
 * altro che oggetti che con le mappe possiamo assegnare come chiavi di qualche valore.
 *
 * Oltre al set esiste un altro modi di popolare una nuova mappa che è piu comodo.
 * in pratica si passa nel costruttore un'array di array dove in ogni array ci sono 2 valori,
 * il primo è la chiave il secondo il valore
 *
 * ATTENZIONE : se si mette in più oggetti la stessa chieave l'ultimo oggetto inserito
 * in ordine sara l'unico ad essere visualizzato
 * questo perche il riferimento in memoria relatico a quella chiave man mano che mettiamo
 * valori sulla stessa chiave viene sostituito
 */

/**
 * un altro modo di creare una mappa è convertire un oggetto in mappa
 */

const settimana = {
  lun: {
    nome: 'lunedi',
    tempo: 'bello',
  },
  mar: {
    nome: 'martedi',
  },
  mer: {
    nome: 'mercoledi',
    tempo: 'bello',
  },
  gio: {
    nome: 'giovedi',
  },
};

const converted = new Map(Object.entries(settimana));
console.log(converted);

/**
 * vediamo come si itera nelle mappe. Si iterano esattamente come gli oggetti ma senza
 * il bisongo di convertire prima tramite Object.key o Object.values o Object.entries
 */

for (const el of converted) {
  console.log(el);
}

for (const [key, { nome, tempo }] of converted) {
  console.log(`key : ${key}, value: {
    ${nome}
    ${tempo ?? 'tempo non definito '}
  }`);
}

const question = new Map([
  ['question', `quel'e il miglio linguaggio ? `],
  [1, 'js'],
  [2, 'c'],
  [3, 'php'],
  [4, 'java'],
  ['correct', 3],
  [true, 'correct !!'],
  [false, 'try again'],
]);

console.log(question);

console.log(`question : ${question.get('question')}`);
for (const [key, value] of question) {
  typeof key == 'number' && console.log(`${key}) : ${value}`);
}
const risposta = Number(prompt('risposta'));

/**
 * implementazione di if else tramite short circuiting
 */
// prettier-ignore
const messaggio = (typeof risposta == 'number' && risposta == question.get('correct') && question.get(true) ) || question.get(false)
console.log(messaggio);
/**
 * SPIEGAZIONE : const messaggio = (typeof risposta == 'number' && risposta == question.get('correct') && question.get(true) ) || question.get(false)
 * 1) risposta corretta
 * bisogna guardare : (typeof risposta == 'number' && risposta == question.get('correct') && question.get(true) )
 *  - && ritorna appena trova il primo valore falso =>
 *  - risposta == 'number' vero, allora andiamo avanti
 *  - risposta == question.get('correct') vero, allora andiamo avanti
 *  - question.get(true) vero, allora andiamo avanti... non posso andare avanti perche è l'ultimo valore, allora ritorno questo valore
 * 2) risposta errata
 * bisogna guardare (...) || question.get(false)
 *  - || ritorna appena trova un valore vero
 *  - se la risposta è sbagliato un qualsiasi controllo dentro (...) ritorna falso e poiche sono tutti in && tutte
 *    le (..) sono considerate false, allora si va avanti
 *  - question.get(false) = 'try again' che è vero  allora ritorna questo valore
 */

/**
 * puo succedere che a volte sia necessario convertire una mappa in array di array
 * const question = new Map([
 * ['question', `quel'e il miglio linguaggio ? `],
 * [1, 'js'],
 * [2, 'c'],
 * [3, 'php'],
 * [4, 'java'],
 * ['correct', 3],
 * [true, 'correct !!'],
 * [false, 'try again'],
 * ]);
 */

console.log(...question);

/**
 * a questo punto la domanda è: perche le mappe sono iterable e gli oggetti no ? Perche per gli oggetti devo usare
 * Object.qualcosa per poterli iterare ?
 *
 * Le mappe (Map) in JavaScript sono progettate per essere iterable, il che significa che è possibile scorrere le
 * loro chiavi, valori o coppie chiave-valore utilizzando costrutti come il ciclo for...of, il metodo forEach() o
 * l'operatore spread (...). Questa caratteristica è stata introdotta con l'obiettivo di fornire un modo
 * semplice per iterare sugli elementi di una mappa in un ordine prevedibile.
 *
 * Gli oggetti (Object) in JavaScript, d'altra parte, non sono nativamente iterable.
 * Ciò è dovuto al fatto che gli oggetti sono stati originariamente progettati per essere contenitori di proprietà,
 * e l'ordine di queste proprietà non era garantito prima dell'introduzione di ES2015 (ECMAScript 2015).
 * Pertanto, iterare su un oggetto non garantiva un ordine specifico delle sue proprietà.
 * Tuttavia, a partire da ES2015, è stato introdotto l'iterable protocol in JavaScript,
 * che consente di definire un comportamento di iterazione personalizzato per gli oggetti.
 * Utilizzando il protocollo iterable e l'iteratore (iterator) corrispondente, oppure Object.qualcosa è
 * possibile rendere gli oggetti iterable e specificare l'ordine delle loro proprietà durante l'iterazione.
 */

/**
 * inoltre per le mappe abbiamo i metodi
 */

console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);
