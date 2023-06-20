"use strict";

// esempio di uso della strict mode

let hasDriversLicense = false;
const passTest = true;

/**
 * adessoc scrivero hasDriversLicense ma senza la s di drivers in questo modo
 * sto dichiarando una nuova variabile
 */
if (passTest) hasDriverLicense = true;

/**
 * con la strict mode attiva mi viene restituito un errore riguardo al fatto che la
 * variabile senza la s non esiste.
 *
 * senza la strict mode invece quella verrebbe interpretata come un'assegnazione del
 * tutto lecita portando cosi ad un errore
 *
 * questo è solo uno dei tantissimi vantaggi dell'usare la strict mode
 */

if (hasDriversLicense) console.log("you can drive :D");
