/**
 * questo numero gigantesco è difficilmente comprensibile letto cosi
 */
let earth_diameter = 287460000000;

/**
 * con i numeric separator possiamo seprata con un _ per renderlo piu leggibile
 * questa feature è stata introdotta in ES2021
 */
earth_diameter = 287_460_000000;

/**
 * possiamo usare il separatore per dare significato diverso ai numeri
 */

const price = 15_00; // 15 euro e 00
const price2 = 1_500; // 1 e 50
/**
 * ovviamente è solo una nostra interpretazione il numero rimane esattametne 15000
 */

console.log(price);
console.log(price2);

//  BIG INT

/**
 * big int è stato introdotto in es 2020
 * sappiamo che i numeri in js sono rappresentati in 64 bit
 * di questi 64 bit solo 53 vengono utilizzatu per memorizzare le cifre, il resto è utilizzato
 * per memorizzare la posizione del punto decimale e il segno
 * questo significa che il numero piu grande che possiamo usare è :
 */

console.log(2 ** 53 - 1); // -1 perche parte da 0

/**
 * questo numero è cosi importante che è memorizzato anche nella costante
 */
console.log(Number.MAX_SAFE_INTEGER);

/**
 * questo numero js non è in grado di rappresentarlo
 */
console.log(2 ** 53 + 10); // infatti il risultato è sbagliato

/**
 * per risolvere questo problema e lavorare (ad esempio con id di database enormi)
 * è stato introdotto BigInt
 * con bigInt si possono memorizzare numeri arbitrariamente grandi
 * e lo si fa aggiungendo una n alla fine del nuemro, oppure si puo usare
 * la funzione BigInt()
 */

console.log(634762357842964983276949236428734268743n);
console.log(BigInt(634762357842964));
