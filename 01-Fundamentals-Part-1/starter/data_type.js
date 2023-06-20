

let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof true);
console.log(typeof 'bella');
console.log(typeof 23);
console.log(typeof jsIsFun);


// vediamo se una variabile non è definita 
let year;
console.log(year) // questo stampa il valore della variabile (undefined)
console.log(typeof year) // questo stampa il tipo della variabile (undefined)
// ovvero la variabile year è di tipo undefined con valore undefined

// questo è un bug di javascript, infatti il tipo di null è semplicemente null
// ma js ritorna come tipo object! questo bug non puo essere corretto per questioni di legacy
console.log(typeof null) // questo è un bug di javascript 
