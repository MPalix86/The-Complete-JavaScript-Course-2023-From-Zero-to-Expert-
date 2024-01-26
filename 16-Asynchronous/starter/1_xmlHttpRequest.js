'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/**
 *
 * Ajax è un acronimo che sta per "Asynchronous JavaScript and XML."
 * Si tratta di una tecnica di programmazione informatica che consente di creare
 * applicazioni web interattive e dinamiche. Ajax consente al browser di comunicare
 * con il server web in background, scambiando dati senza dover ricaricare
 * completamente la pagina web. Questo permette agli utenti di interagire con le
 * pagine web in modo più fluido ed efficiente, poiché le modifiche o gli
 * aggiornamenti possono essere apportati senza dover attendere il ricaricamento
 * dell'intera pagina.Le principali componenti di Ajax includono:
 *
 * JavaScript: È il linguaggio di programmazione principale utilizzato per gestire
 * le richieste e le risposte tra il client (il browser) e il server.
 *
 * XMLHttpRequest: È un oggetto JavaScript che consente al browser di inviare
 * richieste HTTP asincrone al server e ricevere risposte senza dover ricaricare
 * la pagina.
 * XMLHttpRequest è il metodo old school per fare chiamate asincrone a server in javascript
 * ma vediamo ugualmente
 */

const request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000');
request.send();
console.log('sono qui');

/**
 * a questo punto potremmo pensare che basti fare una cosa del genere
 *
 * const res = request.send();
 *
 * questa cosa tuttavia non va bene in quanto la richiesta è asincrona e non
 * bloccherà l'esecuzione del codice, ma verra eseguita in background e js continuera
 * e quindi res sara undefined se usato nella riga successiva.
 * questo perche presumibilmente il server ci impieghiera di piu a rispondere rispetto
 * a js che va ad eseguire la prossima linea di codice, causando errori e bug.
 *
 * quello che dobbiamo p registrare una callback per l'evento load sull'oggetto request
 */

request.addEventListener('load', function (e) {
  /**
   * ricordiamo che this dentro questa funzione fa riferimento a request
   */
  console.log('finito', this);
  console.log(this.response);
  console.log(JSON.parse(this.response));
});

/**
 * poiche queste funzioni sono asincrone se voglio concatenare in qualche modo queste chiamate
 * dovrò creare una nuova richiesta all'interno della callback e se volgio concatenare altre chiamate
 * dovro procedere sempre nel medesimo modo cosi da creare una catena di callback una dentro l'altra !
 * questo si risolve con le promise !
 */
