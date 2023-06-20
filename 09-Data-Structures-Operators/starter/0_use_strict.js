'use strict';
/**
  'use strict' è una direttiva introdotta in ECMAScript 5 (ES5) per abilitare una modalità di "strict mode" (modalità rigorosa) all'interno di un intero file di codice JavaScript o di una singola funzione. Quando viene utilizzata, 'use strict' applica un set di regole più rigorose per l'interpretazione e l'esecuzione del codice, migliorando la sicurezza, la leggibilità e l'affidabilità del programma.
  Ecco alcune delle caratteristiche principali di 'use strict':
   -  'uso di variabili non dichiarate: In modalità rigorosa, è obbligatorio dichiarare le variabili prima di 
      utilizzarle. L'omissione della dichiarazione di variabili genera un errore.
   -  Impedisce la ridefinizione di parole chiave: In modalità rigorosa, non è possibile ridefinire o sovrascrivere 
      parole chiave riservate, come let, class o function. Ciò previene comportamenti imprevisti o ambiguità nel codice.
   -  Blocca la riassegnazione di parametri: In modalità rigorosa, non è possibile riassegnare valori ai parametri 
      delle funzioni. Ciò aiuta a evitare errori e confusione quando si utilizzano parametri come variabili locali.
   -  Disabilita l'implicazione di this globale: In modalità rigorosa, this in una funzione senza un contesto specifico
     (come in una funzione chiamata senza un oggetto di riferimento) sarà undefined, anziché fare riferimento all'oggetto globale (window nell'ambiente del browser o global in Node.js).
   - Impedisce l'eliminazione di variabili, funzioni o oggetti: In modalità rigorosa, l'operatore delete non può essere
     utilizzato per eliminare variabili, funzioni o oggetti. Ciò previene la cancellazione accidentale di elementi importanti.

  È importante notare che la modalità rigorosa potrebbe non essere compatibile con alcune versioni più vecchie di JavaScript
  o con codice scritto precedentemente. Pertanto, è necessario fare attenzione quando si applica 'use strict' e assicurarsi
  che il codice sia compatibile con questa modalità o aggiornarlo di conseguenza.
 */
