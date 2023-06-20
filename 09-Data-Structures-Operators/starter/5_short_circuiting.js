'use strict';

// è possibile usare gli operatori booleani su qualsiasi dato
// ritorna il primo valore considerato vero (ricordare falsy e truthy values)
console.log('---OR---');
console.log('mirco' || 3);

// 0 è un falsy value
const testa_croce = 1;

// sfruttando le proprieta di or appena viste possiamo semplicemente scrivere
const scelta = testa_croce ? 0 : 1;
console.log(scelta);

// ovvero ritorna il primo valore vero !
// ma se guardiamo bene !testa_croce = false ma anche 0 uguale falso !
// in questo caso ritorna l'ultimo valore
const scelta1 = !testa_croce || 0;
console.log(scelta1);

const scelta2 = testa_croce || 0;
console.log(scelta2);

// quindi ad esempio se abbiamo un oggetto e non sappiamo se una certa proprieta è definita
const restaurant = {
  name: 'bello',
  via: 'oberdan',
};

const numOrdinazioni = restaurant.numOrdinazioni || 0;
console.log(numOrdinazioni);

// ovviamente and funziona esattamente all'opposto di OR,
// OR ritorna appena trova un valore vero
// AND ritorna appena trova un valore falso
console.log('---AND---');
console.log(0 && 'mirco');
