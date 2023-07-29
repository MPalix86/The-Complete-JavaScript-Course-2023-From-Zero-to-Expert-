'use strict';
///////////////////////////////////////
// Modal window

/**
 * in js possiamo interagire con l'interfaccia tramite L'api DOM
 * il dom non è nient'altrp che una rappresentazione ad albero degli oggetti presenti
 * nella pagina html. Ogni oggetto del dom è di tipo Node (nodo)
 * e il Node puo a sua volta essere di tipo HTML o TEXT
 *
 * come vengoono rappresentati i diversi tipo di nodo ?
 * ogni nodo ha dei "filgi" con un tipo diverso questi figli sono
 * - Text : ogni volta che c'è un testo in nodo ci sara un sotto elemento di tipo Text
 * - Elemmt : element è un oggetto del node che da accesso ad un sacco di proprietà come:
 *            innerhtml,classlist,children,parentelement ecc.
 *            ma ha anche un sacco di metodi come:
 *            append(),remove(),matches(), queryselector() ecc..;
 *            inoltre gli elementi si specializzano per il tipo di elemento HTML che rappresentano
 *            avremo quindi gli HTMLButtonElement, HTMLDivElement ecc...
 *            ogni elemento puo avere proprietà differenti
 * - Comment : la stessa cosa del testo succede per i commenti html (che sono letteralemte i commenti) <!--- commento ---!>
 *             quindi i commenti fanno parte del DOM a tutti gli effetti
 * - Document : document è solo un altro tipo di nodo che contiene metodi importanti come querySelectr()
 *              getElementById().
 *              In JavaScript, l'oggetto document è uno degli oggetti globali predefiniti ed è fornito dal browser.
 *              Rappresenta il modello del documento HTML corrente e fornisce un'interfaccia per interagire con il
 *              contenuto della pagina web. In sostanza, document è un oggetto che rappresenta la struttura del
 *              documento HTML aperto nel browser e consente di manipolare gli elementi, il testo e altri aspetti del documento.
 * 
 * quello che permette a tutta questa struttura di funzionare è l'ereditarietà!
 * questo significa che tutti i figli hanno accesso ai metodi e alle proprietà dei parent
 *
 * inoltre esiste un'altro tipo di node che nella gerarchia sta sopra al Node (nodo) stesso, questo significa che tutti i nodi ereditano
 * da questo super tipo che è l'event Target ! ecco quindi che possiamo aggiungere a tutti gli elementi del dom dei listener, e questo
 * perche tutti gli elementi ereditano dal superElemento (o superNodo) eventTarger
 * 
 * anche l'oggetto window eredita da event target, l'oggetto window è un altro tipo di oggetto che non è un Nodo e che ha metodi 
 * non correlati al DOM
 * 
 * Tutto questo avviene dietro le quinte (noi non avremo mai il bisogno di creare un oggetto EventTarget) è solo un suèerTipo sul quale 
 * tutti gli altri sono costruiti
 *

 *
 */

/**
 * La differenza tra document e document.documentElement è che document rappresenta l'intero documento HTML,
 * mentre document.documentElement rappresenta specificamente l'elemento radice del documento HTML,
 * cioè l'elemento <html>.
 *
 * per gli elementi <html>, <body> e <head> non c'è bisogno di specificare nessun selettore con querySelector() ,
 */
console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

/**
 * querySelector alla ritorna una NodeList
 *
 * Origine: Un NodeList è ottenuto principalmente come risultato di un metodo che restituisce più elementi, come querySelectorAll()
 *  o childNodes.
 * Aggiornamento: Un NodeList è "statico", il che significa che non riflette gli eventuali cambiamenti che avvengono nel DOM dopo
 * la sua creazione. In altre parole, se elementi vengono aggiunti o rimossi dal DOM dopo l'ottenimento del NodeList, questo non
 * verrà automaticamente aggiornato.
 *
 * Metodi: Un NodeList fornisce metodi di iterazione base come .forEach(), .item(), o [indice].
 */
const section1 = document.querySelectorAll('.section');

/**
 * getElementsByTagName alla ritorna una HTMLCollection
 *
 * Origine: Un HTMLCollection è ottenuto da proprietà del DOM che restituisce collezioni di elementi, come getElementsByTagName() o
 * getElementsByClassName().
 * Aggiornamento: A differenza di un NodeList, un HTMLCollection è "live" e riflette gli eventuali
 * cambiamenti nel DOM. Se gli elementi vengono aggiunti o rimossi dal DOM, l'HTMLCollection verrà automaticamente aggiornato.
 * Metodi: Un HTMLCollection è simile a un NodeList e fornisce metodi di iterazione base come .item(), [indice],
 * e altri metodi specifici come .namedItem().
 */
const allButtons = document.getElementsByTagName('button');

/**
 * Dal punto di vista delle prestazioni, esistono alcune differenze tra NodeList e HTMLCollection, ma queste differenze potrebbero
 * variare a seconda del contesto specifico in cui vengono utilizzati. La performance dipenderà principalmente dal modo in cui si
 * accede e si itera sugli elementi della collezione.
 * NodeList: Poiché un NodeList è "statico" e non è aggiornato automaticamente quando il DOM cambia, la sua creazione potrebbe
 * richiedere un po' più di tempo rispetto all'HTMLCollection.
 * Tuttavia, una volta creato, accedere agli elementi tramite l'indice o utilizzando il metodo .item() è generalmente veloce e s
 * imile alle prestazioni di un array JavaScript.
 * Se devi accedere a una collezione di elementi una sola volta e non hai bisogno di monitorare eventuali cambiamenti nel DOM,
 *  un NodeList potrebbe essere più performante.
 * HTMLCollection: Poiché un HTMLCollection è "live" e riflette automaticamente gli eventuali cambiamenti nel DOM, la sua creazione
 * potrebbe essere leggermente più veloce rispetto al NodeList, poiché è possibile che venga aggiornato dinamicamente.
 * Tuttavia, poiché è "live", ogni volta che accedi o modifichi l'HTMLCollection, potresti incorrere in una piccola penalità in
 * termini di prestazioni a causa della necessità di monitorare continuamente il DOM per i cambiamenti.
 * Se hai bisogno di un elenco di elementi che deve essere costantemente aggiornato quando il DOM cambia, un HTMLCollection può
 * essere più pratico e performante.
 * In generale, le differenze di performance tra NodeList e HTMLCollection sono spesso trascurabili,
 * soprattutto con collezioni di dimensioni relativamente piccole.
 */

console.log(section1);
console.log(allButtons);

allButtons[0].style.backgroundColor = 'blue';

/**
 * se provo a fare questo ottendo effettivamente blue
 */
console.log(allButtons[0].style.backgroundColor);

/**
 * in questo altro caso non ottengo nulla, perche la proprietà style funziona solo per lo style dell'elemento inline
 */
console.log(allButtons[0].style.border);

/**
 * per ottenere style che è in un css bisogna usare la getComputedStyle
 * e possiamo anche modificarle queste proprietà !
 */
console.log(getComputedStyle(allButtons[0]));
console.log(getComputedStyle(allButtons[0]).color);

setTimeout(() => {
  console.log(allButtons[0]);
  console.log('fatto');
  allButtons[0].style.height =
    Number.parseFloat(getComputedStyle(allButtons[0]).height) + 1000 + 'px';
}, 1000);

/**
 * un modo per modificare direttamente la classe css( senza aggiungere styke inline ) è il seguente
 * da notare che la proprietà deve essere gia presente, altrimenti non succede nulla ( non applica nuove proprietà)
 */
allButtons[0].style.setProperty('cursor', 'grab');

/**
 * in js possiamo anche accedere e cambiare gli attributi
 * questo funziona solo con gli attributi che sono standard ! per attributi non standard ovviamente non
 * possiamo accederci come se fossero proprietà !
 */
console.log(allButtons[0].type);

allButtons[0].type = 'button';
console.log(allButtons[0].type);

/**
 * c'è anche un modo per settare attributi :
 */

allButtons[0].setAttribute('prova', 'prova');

/**
 * per leggere attributi custom possiamo usare un metodo;
 */
console.log(allButtons[0].getAttribute('prova'));

/**
 * esiste un tipo speciale di attributi che sono i data Attributes
 * e sono tutti gli attributi che iniziano con la parola data
 *
 * data-number-of-person
 * data-test
 * ecc...
 *
 * questi attributi saranno sotto la proprieta dataset e saranno accessibili in camel case
 */

const btn = allButtons[0];

btn.setAttribute('data-person-number', 89);

console.log('data attributes', btn.dataset.personNumber);

/**
 * classes
 */

btn.classList.add('test');
btn.classList.remove('test');
btn.classList.toggle('test');
btn.classList.contains('teste');

/**
 * possiamo scrivere le classi come:
 * (la funzione si chiama className per motivi storici)
 * questo pero andra a sovrascrivere tutte le classi => non usarlo mai
 */

// btn.className = 'test';

/**
 * usaimo invece
 */

btn.classList.add('test');
