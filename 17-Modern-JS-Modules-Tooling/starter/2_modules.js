/**
 * i moduli sono sostanzialmente un modo di dividere il codice js, e di importarlo in altri file.
 *
 * bene qeusto suona come qualcosa di noto infatti includendo piu file js all'interno di un html sara possibile utilizzare
 * le varie funzioni dei file e di condividerle !
 *
 * tutto questo è vero ma ha degli svantaggi , tra cui il principale è che in questo modo
 * ogni script di importato avra accesso a tutti dati presenti negli altri script !
 * questo non solo puo portare ad errori e bug, ma non ci permette di riutilizzare magari nomi di variabili o funzioni !
 *
 * il modulo è pensato per essere un file standalone, che contiene del codice, e puo contener import
 * di altri moduli, tuttavia per ogni modulo quello esposto all'esterno sara soltanto quello specificato esplicitamente da noi
 * un po come in node ! In questo modo importando un modulo in un file js sara tutto "privato" e non accessibile al modulo che importa tranne le cose
 * che verranno esplicitamente esportate. Le variabili e funzioni esportate saranno le api pubbliche che andremo ad usare
 * vediamo unesempio :
 */

import { rand } from ' Math.js'; // quelle che importiamo sono le dipendenze
const diceP1 = (1, 6, 2);
const diceP2 = (1, 6, 2);
export const score = { diceP1, diceP2 };

/**
 * Prima di ES6 js non aveva un sistema di moduli built in, con ES6 sono arrivati i moduli,
 * ogni modulo è rappresentato da un file, ma allora quali sono le differenze con gli script ?
 * le differenze in generale sono quelle descritte sopra ma vediamole piu nel dettaglio:
 *
 * MODULE
 * -  tutte le variabili hanno lo scope valido solo all'interno del modulo,
 *    l'unico modo che un modulo esterno ha di accedere alle variabili all'interno
 *    del modulo è esportarle nel modulo di partenza
 * -  i moduli ES6 sono sempre eseguiti in strict mode
 * -  la variabile THIS è sempre undefined se dichiarata all'interno del file fuori da
 *    qualsiasi funzione o oggetto
 * -  è possibile importare ed esportare usando la sintassi import export di ES6
 * -  gli import in qualunque punto saranno fatti verranno sempre spostati prima dell'esecuzione
 *    dal motore js all'inizio del file,
 *    quindi importare valori è sempre la prima cosa che accade nei moduli.
 * -  per lincare un modulo ad un file html si fa tutto come per gli script, ma bisogna
 *    aggiugere l'attributo type="module",
 * -  il download dei moduli avviene sempre di default in modo asincrono. Questo è vero sia per i
 *    pi moduli che importiamo nei file html sia per i moduli che importiamo negli altri moduli
 *
 *
 *
 *
 *
 * SCRIPT
 * -  tutte le variabili sono globali e accessibili a tutti di default
 * -  gli script sono eseguiti in sloppy mode di default
 * -  la variabile THIS se dichiarata all'interno di un file fuori da qualsiasi oggetto o funzione
 *    punta all'oggetto window
 * - vengono scaricati di default in blocking synchronous way
 *
 * ora andiamo un po piu a fondo e vediamo come i moduli importando altri moduli:
 * prendendo in considerazione il codice sopra :
 *
 *    import { rand } from ' Math.js';
 *
 * in pratica il codice viene parsato, ovvero prima di eseguire il codice il motore js legge tutto il
 * codice che abbiamo scritto ed esegue alcune operazioni, in questo caso le operazioni sono proprio importare
 * i moduli richiesti in maniera sincrona , solo dopo che tutti i moduli sono stati scaricati ed eseguiti
 * il file che li sta importando verra eseguito. La domanda che sorge spontanea è: non sarebbe piu efficiente
 * importarli in maniera asincrona ? la risposta è si, ma è molto piu facile ottimizzare i processi di bundling e
 * transpiling e prolyfilling in quanto, spesso a noi interessa utilizzare solo piccole parti di un modulo
 * quindi tutto il resto va tolto !
 * dopo il parsing avviene il download vero e proprio dei moduli in maniera asincrona ( come detto sopra)
 * dopo che verranno scaricati i moduli verranno linkate le funzionalita richieste,
 * questo significa che nel nostro esempio la funzione rand presente nel modulo Math.js sara linkata,
 * alla nostra variabile rand ! questa connessione è referenziale, ovvero non verra fatta una copia della
 * funzione rand ma utilizzeremo prorpio quella presente nel modulo MAth.js come se fosse un puntatore.
 * questo significa che se un valore cambia nel modulo Math.js cambiera anche per noi !
 * Questo è molto importante da capire ed è una caratteristica propria dei moduli ES6, negli altri linguaggi
 * di solito viene fatta una copia !
 *
 *
 */
