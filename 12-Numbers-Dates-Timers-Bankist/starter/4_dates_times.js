/**
 * ci sono 4 modi per creare date in js , tutti e 4 con il costruttore newDate
 * ma con parametri diversi,
 * vediamoli :
 */

const now = new Date();
console.log(now);

console.log(new Date('Jul 27 2023 20:17:30'));
// oppure
console.log(new Date('December 23 ,2013')); // non è una buona idea usare questo modo di scrivere le date

console.log(new Date(2037, 10, 9, 15, 12, 34));

/**
 * possiamo anche passare la quantita di millisecondi trascorsi dal 1 gennaio 1970
 * ovvero la unix time
 */

const future = new Date(2037, 10, 9, 15, 12, 34);

/**
 * esiste anche il metodo getYear ma non vai mai usato (usare sempre getFullyear)
 */
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); // restituisce il giorno del mese (in questo caso 9)
console.log(future.getDay()); // restituisce il giorno della (settiamna in questo caso lunedi quindi 1)
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // è uno standard internazioanle per rappresentare le date
console.log(future.getTime()); // il numero di millisecondi dalla unixtime
console.log(+future); // ritorna la unix time

/**
 * esistono anche tutti i metodi set
 * qui sotto metto solo un esempio
 */
console.log(future.setFullYear(2040));
console.log(future);

/**
 * operazioni con le date
 */

const dayPassed = (unxiTimeStamp1, unixTimeStamp2) => {
  const res = unixTimeStamp2 - unxiTimeStamp1;
  const millisPerDay = 24 * 60 * 60 * 100;
  console.log(res / millisPerDay); // divido il per il numero di millisecondo presenti in un giorno per ottenere i giorni
  return res;
};

dayPassed(+now, +future);

/**
 * date e valute (euro dollari ecc)
 * sono rappresentate in maniera diversa in tutto il mondo, js ha delle nuove api
 * che ci permettono di gestire questa cosa
 */

const formattedFuture = Intl.DateTimeFormat('it-IT').format(future);
console.log(formattedFuture);

/**
 * lo stesso con i numeri e le unita di misura
 */
const num = 3884764.23;

const optionsCurrency = {
  style: 'currency',

  currency: 'EUR',
};

const optionsUnit = {
  style: 'unit',
  unit: 'celsius',
};

console.log(
  'US:      ',
  new Intl.NumberFormat('en-US', optionsCurrency).format(num)
);
console.log(
  'Germany: ',
  new Intl.NumberFormat('de-DE', optionsCurrency).format(num)
);
console.log(
  'Syria:   ',
  new Intl.NumberFormat('ar-SY', optionsCurrency).format(num)
);
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, optionsCurrency).format(num)
);

console.log(
  'US:      ',
  new Intl.NumberFormat('en-US', optionsUnit).format(num)
);
console.log(
  'Germany: ',
  new Intl.NumberFormat('de-DE', optionsUnit).format(num)
);
console.log(
  'Syria:   ',
  new Intl.NumberFormat('ar-SY', optionsUnit).format(num)
);
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, optiooptionsUnitns).format(num)
);
