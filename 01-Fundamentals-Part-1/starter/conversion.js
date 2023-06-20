// TYPE CONVERSION 
// è la conversione manuale dei dati javascript puo convertire valori solo in number string o boolean
// ovviamente non si puo convertire in undefined o null
const inputYear = '1995';
console.log(inputYear + 18); // vengono concatenate 2 stringhe
console.log(Number(inputYear) + 18); // vengono sommati 2 numeri

// se proviamo a convertire una stringa 
const string = `i'm a string`;
console.log(Number(string)); // otterro come valore NaN ( not a number )
console.log(typeof NaN); // NaN è effettivamente un numero (tipo number)

// si puo fare anche il contrario
console.log(String(23), 23)

// TYPE COERCION è la conversione automatica dei dati che js effettua per noi
console .log("i'm " + 23  + " years old") 
console.log('23' - '10' - 3)

// BOOLEAN
// per i boolean abbiamo bisogna 
// falsy values sono quei valori che convertiti in boolean ritornano falso e in javascript sono solo 5
// 0, '', undefined, null, NaN
// tutti gli altri valori sono truthy values ovvero convertititi in boolean saranno true
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))