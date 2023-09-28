'use strict';

/**
 * fino ad ora abbiamo utilizzato il modo classico (REGULAR) di caricare gli script nella pagina
 * ovvero: alal fine del documento mettiamo :
 *  <script src="script.js"></script>
 *
 * tuttavia è possibile aggiungere l'attributo async
 *  <script async src="script.js"></script>
 *
 * oppure l'attributo defer
 *   <scripts defer src="script.js"></scripts>
 *
 * questi attributi influenzeranno il modo in cui gli script js sarano fetched (ovvero scaricati ed eseguiti )
 *
 * inoltre possiamo scrivere questi tag (gli script) nell'HEAD del documento oppure alla fine del body
 * si prefigura cosi una tablla :
 *
 * assumiamo il tempo che scorre da sinistra verso destra nella tabella
 * Quando inizia il TIME il browser inizia a parsare L'HTML (ovvero a costruire il DOM tree)
 *
 * _____________________________________________________________________________
 *
 *                      HEAD                    BODY END
 * --------|--------------------------|--------------------------|
 *         |                          |                          |
 * REGULAR |             A            |            D             |
 *         |                          |                          |
 * --------|--------------------------|--------------------------|
 *         |                          |                          |
 * ASYNC   |             B            |            X             |
 *         |                          |                          |
 * --------|--------------------------|--------------------------|
 *         |                          |                          |
 * DEFER   |             C            |            X             |
 *         |                          |                          |
 * --------|--------------------------|--------------------------|
 *
 * TIME ------------------>
 * ______________________________________________________________________________
 *
 * consideriamo i casi singolarmente
 *
 * A) in questo caso il browser inizia a caricare il DOM tree, poi trova i nostri script
 *    interrompe il caricamento del DOM tree e prova ad eseguire gli script, che presumibilmente
 *    non verranno eseguiti correttamente, a causa del mancato caricamento del DOM , successivamente
 *    continuera la costruzione del DOM tree.
 *    Ma non solo questo potrebbe incidere negativamente sulle performance di caricamento della pagina
 *    in quanto durante l'esecuzione degli script come detto sopra il caricamento della pagina viene
 *    totalmente bloccato.
 *    Da notare che in questo caso sia il caricamento degli script che l'esecuzione bloccano la costruzione del DOM
 *
 * B) è molto simile al caso precedente , ma l'unico momento in cui si blocca la costruzione del DOM
 *    è durante l'esecuzione degli script e non il caricamento , ovvero gli script vengono caricati in maniera
 *    asincrona ma eseguiti in maniera sincrona ! Le conclusioni, tuttavia, sono le stesse di prima. mai usarlo !
 *
 * c) Con defer succede che lo script viene caricato sempre in maniera asincrona, ma l'esecuzione viene posticipata fino a q
 *    quando tutto l'HTML non è stato parsato
 *
 * D) avviene tutto in maniera sincrona ma gli script vengono caricati ed eseguiti solo dopo che l'HTML è stato caricato
 *    ed il DOM tree creato . (Questo è il metodo che conviene usare)
 *
 * I 2 casi restanti non ha senso analizzarli perche gia al body end il DOM tree è stato creato quindi non ci sarebbe nessun
 * effetto visibile
 *
 * Ovviamente se ci sono tutte queste strategia di loading ci sono dei casi d'uso in cui conviene usarle,
 * tutte tranne la A che è totalmente inutile.
 * quel'è il caso d'uso ?
 * se abbiamo uno script molto grande che ci impega molto a caricare potremmo voler usare il defere all'inizio (HEAD), questo perche
 * inizia il caricamento dello script in parallelo insieme al caricamento del DOM TREE risparminado tempo !
 *
 * un'altra cosa importante è che gli script importati con async non è garantito che vengano eseguiti con lo stesso ordine in
 * cui vengono importati. Con defer no invece, l'ordine viene rispettato !
 *
 * ad esempio pero se l'ordine non è importante (come ad esempio per gli script di google analytics) andrebbe usato async! Infatti
 * con defer posticipiamo l'esecuzione . In generale per qualsiasi codice con il quale il nostro codice non dovrà interagire
 * async va piu che bene !
 *
 * async e defer sono supportati solo nei browser moderni ( infatti asyn e defer non è una feature di js ma di HTML5)
 *
 *
 * facciamo una prova pratica...
 *
 * carichiamo una pagina che ha uno script molto grande e lo carichiamo con il metodo tradizionale:
 * ovvero lo script alla fine del body.
 *
 * il tempo di caricamento di tutta la pagina è (facciamo finta) di 2s
 * se andiamo nel tab network e analizziamo il tempo di caricamento solo dello script vediamo
 * che per 1,9s è stato in attesa (ovvero il tempo di caricamento del dom) e solo dopo è iniziato
 * il caricamento effettivo dello script e quindi la sua esecuzione !
 *
 * se lo mettiamo nell'head con defer invece il tempo di caricamento della pagina sara di 1,7 secondi ( è un esempio )
 * questo perche durante il caricamento del dom in parallelo viene anche scaricato lo script ma viene
 * eseguito solo dopo che il DOM è stato formato !
 *
 * da ora in poi questo sara il metodo di caricamento che useremo !
 */
