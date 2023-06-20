'use strict';

/**
 * la closure non è un feature che usiamo in maniera esplicita... vediamo di cosa si tratta:
 *
 * ogni funzione ha uno scope che viene caricato nello stack al momento dell'esecuzione,
 * si inizia con lo scoope globale (che è l'unico sempre presente nello stack) e man mano che
 * aggiungiamo funzioni lo il loro scope si aggiunge allo stack
 *
 *              STACK
 *    |------------------------|
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    | GlOBAL SCOPE           |
 *    |------------------------|
 *
 * ricordiamo che lo stack viene popolato dal basso verso l'alto
 *
 */

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

/**
 * dopo ver dichiarato la funzione questa viene salvata nella variabile secureBooking che è nello scope globale
 *
 *              STACK
 *    |------------------------|
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |-GlOBAL SCOPE-----------|
 *    |   - secureBooking      |
 *    |------------------------|
 */

const booker = secureBooking(); // eseguiamo la funzione

/**
 * durante l'esecuzione della funzione, viene caricato un altro scope nello stack, e le variabili
 * del nuovo scope (quello della funzione secureBooking()) avranno accesso a quelle del global scope ma non viceversa.
 * lo stack sara quindi :
 *
 *              STACK
 *    |------------------------|
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |-SECURE BOOKING---------|
 *    |   - passengerCount     |
 *    |-GlOBAL SCOPE-----------|
 *    |   - secureBooking      |
 *    |------------------------|
 *
 *
 * una volta finita l'esecuzione della funzione lo scope di secure booking con relative variabili
 * verra eliminato dallo stack,che rilutera :
 *
 *
 *              STACK
 *    |------------------------|
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |                        |
 *    |-GlOBAL SCOPE-----------|
 *    |   - secureBooking      |
 *    |   - booker             |
 *    |------------------------|
 *
 * dove si è aggiunta la variabile booker al global scope che conterra la funzione ritornata da secureBooking()
 * ora analizziamo nel dettaglio la funzione booker() !
 *
 * booker() (che ora è nel globa scope) prende una variabile (passengerCount) presente nello scope della funzione secureBooking()
 * che pero è gia stata eseguita, e quindi il suo scope è gia stato eliminato, e la incrementa di 1 !
 * è impossibile !! se dovessimo provare ad eseguire il tutto sicuramente js ci dara qualche errore, vero ?
 *
 * ammettiamo pero che lo scope di secureBooking() sia ancora nello stack; ormai booker è nel
 * global scope e comunque non avrebbe accesso alla variabile (passengerCounter) che sarebbe nello scope
 * di securBooking(), perche ricordiamo secureBokking() puo accedere al global scope ma non viceversa !
 *
 * ESEGUIAMO e vedainmo che esce !
 */

booker(); // passngerCount = 1
booker(); // passngerCount = 2
booker(); // passngerCount = 3

/**
 * La funzione non solo viene eseguita e non ritorna errore, ma la variabile ( passengerCount ) viene anche incrementata.
 * qeusto significa che la funzione booker è in grado di accedere alla variabile (passengerCount) dentro la funzione secureBooking()
 * che pero non dovrebbe piu esistere !
 * com'è possibile ?
 * è quello che chiamiamo CLOSURE:
 *
 *
 * **************************************CLOSURE
 * tutte le fuznioni hanno sempre accesso alle variabili di ambiente del contesto di esecuzione (scope) nel quale sono
 * state creata
 * *********************************************
 *
 * nel caso di booker(), è stata creata nel contesto di secureBooking(), quindi riuscira ancora ad accedere alle varibili
 * di secureBooking anche se questa è gia stata eseguita ed eliminata dallo stack !
 *
 * in altre parole possiamo dire che grazie alla closure le funzioni non perdono mai la connessione con le variabili che esistevano
 * nello scope a cui avevano accesso nel momento in cui sono state dichiarate.
 *
 * vediamo ora piu nel dettaglio come funziona la closure !
 *  - booker prova ad incrementare la variabile passengerCount, tuttavia non la trova in quanto lo scope di secureBooking() è
 *    stato rimosso, dato che la funzione è gia stata eseguita !
 *  - a questo punto js guarda nella closure e trova la variabile che cercava. e fa questo ANCORA PRIMA DI GUARDARE NELLA CATENA
 *    DEGLI SCOPE, infatti nessuno vieta di dichiarare un'altra variabile con lo stesso nome (passengerCount) nello scope
 *    globale subito prima di chiamare booker().
 *    in questo modo anche se ci fosse un'altra variabile con lo stesso nome nello scope globale, js andrebbe
 *    a prendere prima sempre quella nella closure
 *
 *    A questo punto vediamo come si fa a vedere dentro una funzione proprio come se fosse un'oggetto !
 */

console.dir(booker);

/**
 * la fuinzione console.dir() stampa quello che è contenuto nella funzione ( le funzioni sono come variabili in js )
 * ed è possibile vedere che nell'aray chiamata scopes ci sono 3 elementi:
 *
 * - Closure
 * - Script
 * - Global
 *
 * In particolare se andiamo a vedere dentro closure c'è tutto quello che abbiamo detto sopra !
 */
