/**
 * le promise sono state introdotte da ES6 e sotanzialmente sono un contenitore per un valore che arrivera in futuro.
 * e serve proprio per gestire le chiamate asincrone !
 * Con le promise tuttavia si ricschia di incappare nello stesso errore visto con le callback ovvero di concatenarle
 * fino a rendere il codice illegibile. Questo è un errore che molti fanno spelcialmente all'inizio, per evitare cio
 * piuttosto che contanera le promise  basta ritornarle e gestirle man mnao come mostrato di seguito
 *
 * immaginiamo di voler prendere oltre alla nazione i suoi confinanti
 */
const getCountry = function (name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(function (response) {
      /**
       * come è possibile l'oggeto response contiene una serie di dati tra cui lo status code gli headers ecc,
       * ma contiene anche quello i dati che la chiamata ritorna e li contien dentro il body, che è di tipo ReadableStream
       * questo tipo non è direttamente accessibile, ma è accessibile chiamndo la funzione json().
       * json() è un metodo che è avviabile in tutte le risposte del metodo fetch.
       */
      console.log(response);

      /**
       * tuttavia anche il metodo json() è un metodo asincrono, questo vuol dire che ritorna a sua volta
       * una promise per questo dobbiamo ritornarlo e gestirlo
       */
      return response.json();
    })
    .then(function (jsonResponse) {
      console.log(jsonResponse);
    });
};

/**
 * proviamo ora a scrivere la stessa cosa che c'è sopra ma con una sintassi un po piu semplice
 * ma meno esplicita
 */

const getCountry1 = function (name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      console.log(jsonResponse);
    });
};

/**
 * ora vediamo, se ad esempio vogliamo prendere gli stati confinanti come concatenarli senza
 * fare quella struttura innestata di then uno dentro l'altro che rende il codice illegibile
 */

const getCountry2 = function (name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      /**
       * da notare che in questo caso non c'è bisogno di ritornare il response.json() esplicitamente
       * ma basta scrivere response.josn() che è implicito il return
       */
      return response.json();
    })
    .then(jsonResponse => {
      console.log(jsonResponse);
      const neighbour = jsonResponse[0].borders[0];
      console.log('birder = ', neighbour);
      if (!neighbour) return;
      /**
       * in questo modo la seconda fetch verra eseguitra solo dopo la prima ma per non avere la struttura
       * incasinata la ritorniamo e la gestiamo sucecssivamente
       */
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(neighbour => {
      neighbour.json();
    })
    .then(jsonNeighbour => {
      console.log(jsonNeighbour);
    });
};

getCountry2('portugal');

/**
 * se c'è qualche erroe durante l'esecuzione della fetch e ll promise ritorna erorre come facciamo agestirlo ?
 * ci sono 2 modi :
 * il primo è quello di passare una seconda callback alla then
 */
// prettier-ignore
const getCountry3 = function (name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {return response.json();})
    .then(jsonResponse => {
      console.log(jsonResponse);
      const neighbour = jsonResponse[0].borders[0];
      console.log('birder = ', neighbour);
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(neighbour => {neighbour.json();}, error => {console.log(error);})
    .then(jsonNeighbour => {console.log(jsonNeighbour);}, error => {console.log(error);});
};

/**
 * esiste un altro modo che ci permette di gestire gli errori globalmente e consiste nel
 * concatenare un cath alla fine di tutti i then in questo modo tutti gli errori verranno gestiti
 * in quel catch
 *
 * eiste poi un altro metodo che hanno le promise che è il finally che viene invocato sempre
 * indipendentemente dal fatto che la promise sia andata in errore o noe va messo alla fine
 */
// prettier-ignore
const getCountry4 = function (name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {return response.json();})
    .then(jsonResponse => {
      console.log(jsonResponse);
      const neighbour = jsonResponse[0].borders[0];
      console.log('birder = ', neighbour);
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(neighbour => {neighbour.json();})
    .then(jsonNeighbour => {console.log(jsonNeighbour);})
    .catch(err => console.log(err))
    .finally(()=>{console.log('finally')})
};

/**
 * ora immaginiamo che per motivi di connessione la fetch dia errore,
 * a questo punto
 */
