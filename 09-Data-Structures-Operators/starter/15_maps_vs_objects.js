'use strict';
/**
 * le strutture in js sono 4
 * quando usare mappe o oggetti ?
 * 1) abbiamo bisogno di una semplice lista di valori => array o sets
 *  - array : abbiamo bisogno di duplicati e di mantenere un ordine garantito e
 *            inoltre manipolare i dati con gli array è piu semplice
 *  - sets : abbiamo bisogno di alte prestazioni e i duplicati non ci interessano
 *           cercare valori o eliminare elementi in un set puo essere fini a 10 volte
 *           piu veloce rispetto ad un array
 *
 * 2) abbiamo bisogno di coppie chiave valore => oggetti o mappe
 *  - oggetti : l'unico vantaggio che hanno rispetto alle mappe è che sono piu facili e veloci da scrivere
 *
 *  - mappe : fanno tutto quello che fanno gli oggetti (e in piu sono anche iterable) e lo fanno piu velocemente
 */
