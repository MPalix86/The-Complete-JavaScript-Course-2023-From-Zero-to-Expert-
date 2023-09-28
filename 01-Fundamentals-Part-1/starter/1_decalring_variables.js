// con let può essere cambiato il valore in qualsiasi momento del programma
let js = 'bella';

// con const non può cambiare il valore durante l'esecuzione, ritorna errore se si prova a farlo
// quindi non è possibile nemmeno fare 
const somevar; 
/** 
 * infatti dichiarare una variabile senza assegnare nessun valore significa assegnare il valore undefined
 * e poiche è una const questo valore non potrebbe essere cambiato durante l'esecuzione
 */


// questo è il modo di dichiarare variabili prima del moderno javascript(prima ECMASCRIPT 6)
/** 
 * ES6 è uscito nel 2015 ed ha stravolto js, tutte le scose scritte prima di ES6 ci sono ancora nel moderno js, ma
 * dove possibile non adrebbero utilizzate, vengono mantenute per retrocompatibilità. Infatti js è retrocompatibile fino
 * alla sua prima versione. 
 * In particolare questo tipo di assegnazione andrebbe totalmente ignorato in favore di const e let introdotti
 * in ES6, ip perche verra spiegato in seguito
 */
var job = 'programmer';


// anche questo tipo di logica è prevista, ma in questo caso js non crea una variabile
// nello scope corrente ma crea una proprietà nel contesto globale (che in questo caso è windows)
//  anche questo andrebbe evitato
name = 'mirco'