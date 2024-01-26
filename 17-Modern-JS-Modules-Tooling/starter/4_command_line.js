/**
 * perche abbiamo bisogno di strumenti come npm ?
 * prima dell'avvento di npm il modo classico di includere librerie nel browser era quello di
 * includere lo script principale della libreria globalmente nel documento html, proprio come abbiamo fatto nei vecchi progetti.
 * questo comporta molti aspetti negativi,
 * 1) semplicemente includere tutti gli script nell'html risulta incasinato e difficile da gestire.
 * 2) quasi sempre abbiamo bisogna di scaricare questi script, tuttavia quando esce una nuova versione,
 *    se vogliamo aggiornare dobbiamo andare manualmente ad aggiornare lo script con tutte le sue dipendenze,
 *    inoltre poi se vogliamo mantenere entrambe le versiojne dobbiamo andare manualmente file per file ad
 *    includere o cambiare la libreria che stiamo usando. Non è fattibile! npm
 */

/**
 * la prima cosa è il comando npm init:
 *
 * Il comando npm init inizializza un nuovo progetto Node.js e crea un file package.json. Questo
 * file contiene le informazioni sul progetto, come le dipendenze, i comandi di script, l'autore, la versione,
 * e altre configurazioni importanti.
 *
 * in pratica in questo file ci sara tutta la configurazione del nostro progetto
 */

/**
 * npm install leaflet.
 * questo comando installa nuovi moduli e li installa in una nuova cartella chiamata node_modules
 * che conterra tutte le dipendeze del nostro progetto.
 *
 * inoltre tiene traccia di tutte le dipendenze installate nel file package.json
 * ad esempio proviamo ad installare la libreria leaflet.
 * Questa libreria, tuttavia, usa i moduli commonjs, che non sono compatibili
 * con il browser ma con node. Ma vedremo come utilizzarla ! in sostanza per utilizzarla abbiamo bisogna di un bundler
 * come parcel o webpack
 *
 * Installiamo anche lodash!
 * lodash è una libreria che implementa un botto di metodi per array e oggetti che non sono
 * implementati di default in js come il clone depp per gli oggetti.
 * tuttavia lodash ha 2 versioni: una che utilizza i moduli commonjs e un'altra che utilizza
 * i moduli ES
 *
 * npm install lodash-es
 */

import cloneDeep from './node_modules/lodash-es/cloneDeep';

// prettier-ignore
const state = {
  cart: [

    { product: 'shoes', quantity: 6 },
    { product: 'bread', quantity: 7 },
  ],
  user:{name:'mirco', loggedIn : true}
};

/**
 * utilizziamo il metodo incluso in es6 per clonare gli oggetti.
 * e poi lo rifaccaimo con lodash
 */

const stateClone = Objec.assign({}, state);
console.log(stateClone);

/**
 * all'apparenza sembra uguale identico all'originale !
 * ma vediamo se provo a cambiare qualche proprieta nell'oggetto originale
 * e vediamno cosa succede !
 */
state.user.name = 'john';
console.log(stateClone);

/**
 * quello che succede è che mi trovo cambiato anche state clone, questo perche assign fa solo
 * una copia superficiale dell'oggetto.
 * proviamo con lodash
 */
const depp = cloneDeep(state);
state.user.name = 'john';
console.log(depp);

/**
 * ovviamente il cambiamento nell'oggetto originale rimane confinato solo li.
 */

/**
 * ora queste erano solo delle semplici prove, ma ora immaginiamo di voler spostare questo progetto
 * su un altro pc o di voler usare git per fare il versioning.
 * Se vogliamo fare queste operazioni possiamo non includere la cartela node_modules, perche sara npm
 * ad occuparsi di tutte le dipendenze una volta portato il progetto su un altro pc
 * semplicemente facendo npm install. in questo modo npm andra a leggere il file package.json
 * e creera una cartella node modules e installera tutte le dipendenze.
 * questo perche nei grandi progetti la cartella node_module puo diventare
 * davevro moooolto grande.
 */
