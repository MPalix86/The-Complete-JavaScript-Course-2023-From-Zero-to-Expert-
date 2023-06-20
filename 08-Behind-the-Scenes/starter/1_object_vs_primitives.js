'use strict';

/**
 * In altre parole, la variabile age punta all'indirizzo di memoria in cui è memorizzat 30
 * Ogni volta che utilizzi la variabile age, JavaScript accede all'indirizzo di memoria per recuperare il valore corrispondente.
 * inoltre per i dati primitivi ogni volta che si inizializza una nuova variabile viene create un nuovo spazio di memoria
 */
let age = 30;

/**
 * oldAge e age puntano allo stesso indirizzo di memoria iniziale perché stai assegnando il valore di age a oldAge.
 * Quindi, inizialmente, entrambe le variabili condivideranno lo stesso valore e lo stesso indirizzo di memoria.
 * Tuttavia, quando viene eseguita l'assegnazione successiva age = 31;, viene creato un nuovo spazio di memoria per memorizzare il nuovo valore 31,
 * e la variabile age viene aggiornata per puntare a questo nuovo indirizzo di memoria. Allo stesso tempo, la variabile oldAge mantiene ancora il suo
 * valore originale e il suo indirizzo di memoria, che non viene modificato.
 * Pertanto, quando si modifica il valore di age, oldAge non rifletterà questa modifica perché le due variabili puntano ora a indirizzi di memoria diversi.
 */
let oldAge = age;

/**
 * in questo caso viene assegnato un nuovo indirizzo ad age in maniera tale da salvaguardare oldAge
 */
age = 31;

console.log(age);
console.log(oldAge);

/**
 * in questo caso, con oggetti complessi ( non primitivi ) quello che viene salvato nella variabile (mirco) è ancora l'indirizzo di memoria che punta allo spazio
 * in cui è salvato l'oggetto.
 */
const mirco = {
  firstName: 'mirco',
  age: 30,
};

/**
 * in questo modo ancora una volta non creo una vera copia della variabile ma semplicemente avro una nuova variabile che punta allo stesso identico
 * indirizzo di memoria
 */
const savedMirco = mirco;

/**
 * a questo punto quando modifico mirco.age non succede piu come per i valori primitivi ( che verra creato un nuovo spazio di memoria ) ma verra modificato
 * esattamente lo spazio di memoria a cui la variabile puntava inizialmente, che è lo stesso a cui punta savedMirco, con la conseguenza
 * che verranno modificate entrambre
 */
mirco.age = 31;

console.log(mirco);
console.log(savedMirco);

/**
 * per assegnare un nuovo spazio di memoria : dobbiamo usare Object.assign(); che crea una copia superficiale dell'oggetto passato come argoomento:
 *
 * cos'è una copia superficiale ?
 * una copia suèerficiale significa che solo il primo livello dell'oggetto viene duplicato in un nuovo spazio di memoria, gli oggetti contenuti
 * al'interno dell'oggetto iniziale verranno passati alla copia sempre tramite indirizzo. questo significa che modificando un sotto-oggetto nella copia
 * verra modificato anche l'oggetto originale. ma modificando una variabile semplice nel primo livello dell'oggetto, la modifica non si propaghera alle copie. !
 */
mirco.age = 30;

const newSavedMirco = Object.assign({}, mirco);

/**
 * la tecnica per creare un nuovo oggetto totalemtne per ogni livello a partire dall'oggetto iniziale è detta deep cloning.
 * creare un deep clone non è scontato e javascript non ha dei metodi preconfezionati per farlo, ma dovremo farlo
 * con delle librerie esterne
 */
