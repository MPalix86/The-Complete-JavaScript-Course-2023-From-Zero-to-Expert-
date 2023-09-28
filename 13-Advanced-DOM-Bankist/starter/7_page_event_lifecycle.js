'use strict';

/**
 * Il primo evento di cui dobbiamo parlare è il DOM content  loaded
 * che come dice la parola stessa triggerato da js quando tutti gli elementi
 * html sono stati completamente analizzati e trasformati in elementi del DOM
 * non solo ma anche tutti gli script sono stati scaricati ed eseguiti.
 *
 * tuttavia questo evento non aspetta che immagini e altre risorse esterne siano caricate,
 * ma solo html e javascript
 */

document.addEventListener('DOMContentLoaded', function () {
  console.log('HTML parsed eand DOM tree builded');
});

/**
 * ora potrebbe venirci il seguente dubbio:
 * perche non usiamo un evento del genere e emettiamo tutt il nosstro codice javascript
 * qui dentro ? Infatti il js dovrebbe essere eseguito solo dopo che il DOM è stato caricato !
 *
 * Non lo facciamo perche importiamo gli script nel documento HTML alla fine nello tag script e quindi
 * il browser di base trova tutti gli script solo dopo che l'HTML è gia stato caricato e parsato
 */

/**
 * un altro evento è il load che viene triggerato quando tutti gli elementi della pagina
 * compreso CSS e risorse esterne sono caricati, ovvero quando la pagina è completamente caricata !
 */

window.addEventListener('load', function () {
  console.log('LOAD event, page completely loaded');
});

/**
 * l'ultimo evento che utilizziamo è il beforeunload event, che viene triggerato quando.
 * questo evento viene richiamao quando l'utente cerca di chiudere la finestra
 * in molti browser è necessario mettere e.preventDefault() ma in chrome no
 */

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log('beforeunload', e);

  /**
   * questo bisogna farlo solo per ragioni storiche:
   * per avere un popup con la conefrma per lasciare la pagina bisogna fare la seguente cosa
   */

  e.returnValue = '';
});
