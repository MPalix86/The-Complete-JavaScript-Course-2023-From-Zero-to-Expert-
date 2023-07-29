'use strict';
/**
 * abbiamo visto un modo per iterare sugli array
 * ora vediamo come farlo (in maniera indiretta perche non sono iterable) sugli oggetti.
 * prima di tutto possiamo iterare :
 * 1) tra le proprietà di un ogetto
 * 2) tra i valori di un oggetto
 * 3) o tutto insieme !
 */

const settimana = {
  lun: {
    nome: 'lunedi',
    tempo: 'bello',
  },
  mar: {
    nome: 'martedi',
  },
  mer: {
    nome: 'mercoledi',
    tempo: 'bello',
  },
  gio: {
    nome: 'giovedi',
  },
};

/**
 * ITERAZIONE SUI NOMI DELLE PROPRIETA
 * il for-of serve per iterare lungo un array, quindi in qualche modo dobbiamo convertire
 * quello che ci serve iterare dell'oggetto in array (ecco perche gli  oggetti si iterano indirettamente)
 * per quanto riguarda le chiavi usiamo Object.keys().
 * Come possiamo vedere non fa altro che trasformare e mettere tutti i nomi di proprietà
 * dell'oggetto in un array
 */
console.log(Object.keys(settimana));

for (const el of Object.keys(settimana)) {
  console.log(el);
}

/**
 * ITERAZIONE SUI VALORI DELLE PROPRIETA
 * uguale a prima ma con Object.values()
 */
for (const el of Object.values(settimana)) console.log(el);

/**
 * ITERAZIONE CHIAVI + VALORI
 * uguale a prima ma con Object.entries()
 */
console.log(Object.entries(settimana));
for (const el of Object.entries(settimana)) console.log(el);

// usiamo la destrutturazione
for (const [key, { nome, tempo }] of Object.entries(settimana)) {
  console.log(`
    key : ${key} 
    value : {
      ${nome}
      ${tempo ?? 'tempo non definito'}
    }
    `);
}
