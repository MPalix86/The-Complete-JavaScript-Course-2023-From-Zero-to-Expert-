/**
 * prima di tutto ovviamente non scriviamo piu' il codice javascript
 * in un singolo scrpt ma dividiamo i nostri script in moduli
 * questi moduli possonop anche includere moduli esterni chiamati packages
 * che si condividono sul repository di npm
 *
 * npm inizialmente è nato per node ma poi è stato adotatto per ospitare e gestire anche tutti i pacchetti javascript
 *
 * ora immaginiamo di aver finito  sviluppare il nostro software, la storia non finisce qui,
 * il nostro progetto ora avra bisogna di andare attraverso un build process dove un verra un javascript bundle
 * e sara questo il file finale che verra deploiato sul server in produzione.
 *
 *
 * STEP 1 : BUNDLE
 * la prima cosa sara  riunire tutti i moduli in un unico file, questo è un processo molto complesso che elimina
 * il codice non utilizzato e comprime il codice anche, questo è importante per 2 motivi:
 * 1) i vecchi browser non supportano i moduli
 * 2) questo migliora le performance e ci permette di inviare meno file al browser
 *
 * STEP 2 TRNASPILING and PROLYFILINNG:
 * questo processo consiste nel convertire tutto il codice js scritto in codice js ES%R in maniera
 * tale che sia eseguibile da ogni browser, di solito questo processo è fatto usando un tool chiamato babel
 *
 *
 * ovviamente per fare questi passaggi ci avvaliamo di software esterni
 * i piu comuni build tools che esistono sono webpack e parcel,
 *
 * WEBPACK
 * questi 2 sono dei javascript bundler, il piu famoso tra questo è sicuramente webpack, ma è molto complesso e confusionario da usare,
 * in particolare con webpack bisogna configurare un sacco di roba manualmente.
 *
 * PARCEL
 * parcel invece adotta la politica zero-configuration e semplimente funziona " out of the box"
 * questo significa che non dovremmo nessun codice di cnfigurazione!
 *
 * entrambi questi tool sono disponibili su aNPM
 *
 * questa è semplicemente una panoramica di alto livello di quello che è lo sviluppoo javascript oggi
 */
