// questo comando attiva la modalita di js striict mode, va inserito
// allìiniziop di un blocco, di solito si inserisce sempre allìinizio del  file
// la strict mode non ci consente di fare alcune cose che potrebbero causare errori
// costringe javascript a loggarci come errori alcune cose
"use strict";

// esempio di uso della strict mode

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true; // ho scritto driver senza la s
// con la strict mode avrei un errore
// senza la strict mode verrebbe creata una nuova variabile sull'oggetto globale
if (hasDriversLicense) console.log("you can drive :D");
