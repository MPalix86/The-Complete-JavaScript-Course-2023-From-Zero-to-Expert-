'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/**
 * sostanzialmente è come gli array
 */

currencies.forEach(function (value, key, map) {
  console.log(` value: ${value}     key: ${key} `);
});

const curUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
curUnique.forEach(function (value, key, map) {
  console.log(`value: ${value}          key: ${key}`);
  ù;
});

/**
 * il risultato sara
 *
 *  key USD value: USD
 *  key GBP value: GBP
 *  ...
 *  ...
 *
 * questo significa che nei sets la chiave è uguale al valore, ma come mai ? i sets non dovrebbero avere ne chiavi ne indici  vero ?
 * in realtà è esattamente cosi, il foreach per i sets è statosviluppato cosi solo per avere uniformita con gli altri foreach e non far confondere gli sviluppatori!
 * quindi in sotanza possiamo riscriverlo così
 */

curUnique.forEach(function (value, _, set) {
  /**
   * ...
   * ...
   * ...
   * ...
   */
});

/**
 * dove il trattino in js significa variabile da buttare, ovvero una variabile completamente non necessaria
 */
