'use strict';

//  in questo caso age e oldAge avranno 2 valori diversi
//  perche quando si dichiara una variabile primitiva e la si inizializza il compilatore assegna al posto del nome della
//  variabile un indirizzo di memoria ! in questo caso quindi l'indirizzo di memoria age conterra  il valore 30!
//  da javascript è il valore che noi diamo effettivamente.
let age = 30;

// facendo questo sto dicendo al compilatore di che l'indirizzo di memoria dentro oldAge deve essere uguale a quello di age
//  entrambi quindi varranno 30
let oldAge = age;

// ora sto assegnando nuovamente un valore ad age e ogni volta che assegno un valore ad un tipo primitivo
// il compilatore assegna un nuovo indirizzo alla variabile e ci copia quel valore dentro
age = 31;

console.log(age);
console.log(oldAge);

// in questo caso con oggetti complessi ( non primitivi ) quello che viene salvato nella variabile non è il valore
// direttamente ma un puntatore allo spazio di memoria che contiene quel valore (ovvero l'indirizzo )
const mirco = {
  firstName: 'mirco',
  age: 30,
};

// facendo questo sto semplicemente dicendo di copiare l'indirizzo di memoria contenuto dentro mirco
// dentro savedMirco, ma quell'indirizzo puntera esattamente alla stessa area di memoria
const savedMirco = mirco;

// andando a modificare mirco.age non sto modificando direttamente l'indirizzo di memoria salvato nella variabile mirco, ma sto modificando
// il pezzo di memoria a cui quell'indirizzo punta !
// questo tipo di variabile si chiama reference variabile a differenza delle primitive variable
mirco.age = 31;

console.log(mirco);
console.log(savedMirco);

mirco.age = 30;
// quello che possiamo fare è :
// questa funzione copia l'oggetto in un nuovo spazio di memoria e assegna l'indirizzo del nuovo spazio di memoria
// alla variabile specificiata
// tuttavia c'è un problema questa funzione se ci sono piu livelli di oggetti innestati non duplica la memoria per tutti
// i livelli ma solo per il primo. quindi tutti i sotto-oggetti continueranno a puntare al loro spazio di memoria oroginale
// ovvero Object.assign() crea solo una copia superficiale  e non un deep clone
const newSavedMirco = Object.assign({}, mirco);

// creare un deep clone non è scontato e javascript non ha dei metodi preconfezionati per farlo, ma dovremo farlo
// con delle librerie esterne
