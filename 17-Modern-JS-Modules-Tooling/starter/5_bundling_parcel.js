/**
 * parcel è semplicemente un bundler come webpack. si scarica tramite npm.
 * tuttavia il comando che dobbiamo dare npm install parcell --save-dev
 *
 * le dipendenze installate con --save-dev non verranno incluse nel codice ma ono appunto
 * delle dipendenze che ci servono solo per sviluppare il progetto .
 *
 * per avviare parcel diamo il comando npx parcel fileName.html
 * npx è uno strumento versatile che fa parte npm, che semplifica
 * l'esecuzione di comandi occasionali, l'utilizzo di pacchetti senza installarli
 * permanentemente e l'esecuzione di comandi globali in un contesto isolato e temporaneo.
 * dopo aver finito la sua "magia" parcel , crea un server che ci permette di eseguire l'app.
 *
 * ma cosa ha fatto parcel ?
 *
 * parcel ha creato una cartella chiamata dist con dento il file index.html altri file js,
 * se vediamo nel dettaglio il file index notiamo che ha cambiato gli import, questo perche
 * riscrive il codice js per ottimizzarlo e fare altre robe.
 *
 * con parcel attivo, ogni volta che salviamo il file dopo averlo modificato parcel ricarica tutto autoamticamente
 * (sarebbe un live server come nodemon per node).
 * tuttavia succede la cosa noiosa che ogni volta che si ricarica se stiamo testando un app ad esempio
 * con il login, abbiamo bisogno di rifare il login !
 * In parcel possiamo attivare qualcosa che è molto piu efficiente del realod del live server ai cambiamenti,
 * questa funzionalita si chiama hot module replacement. questa funzionalita ci permette di
 * scrivere codice come segue:
 *
 */

if (module.hot) {
  module.hot.accept();
}

/**
 * questo codice lo capisce solo parcel e non sara incluso nel nostro bundle finale. tuttavia l'hot module reloading
 * ci permette di avere un live realod del server che inietta automaticamente solo le modifiche
 * nella nostra app senza dover rebuildare tutto ogni volta, ovvero mantiene lo stato della nostra app
 * e inietta solo le modifiche !
 *
 * ovviamente piuttosto che dare npx ogni volta , ci conviene scrivere tutto nello script start di
 * js, ovvero nelo script start del package.json scriviamo parcel index.html.
 *
 * abbiamo bisogno anche di un altro script, infatti come gia detto il processo di buildin ha bisogno
 * di ruomevere tutto il codice in eccesso e di ottimizzare la scrittura del nostro., quindi aggiungiamo un nuovo
 * script alla sezione script del package.json
 *
 * build : "parcel build index.html"
 *
 * se guardiamo ora alla cartella dist avremo tutti i file cminimizzati !
 */

/**
 * perche ci serve un server anche in locale ?
 * Quando apri una pagina web direttamente dal tuo computer locale utilizzando l'URL "file:///C:/...",
 * potresti incorrere in problemi noti come Same-Origin Policy,
 * una politica di sicurezza implementata dai browser per proteggere gli utenti da
 *  possibili minacce di sicurezza. Questa politica impedisce alle pagine web di effettuare
 * richieste a risorse su domini diversi da quello della pagina stessa.
 * Quindi, se il tuo progetto frontend fa richieste API a un server diverso o se utilizza
 * risorse provenienti da origini diverse, come immagini, stili o script,
 * potresti incorrere in errori di Cross-Origin. Un server locale, anche uno molto semplice,
 * può risolvere questo problema consentendo al tuo progetto di essere servito attraverso un
 * dominio locale, spesso "http://localhost", anziché direttamente dal sistema di file.
 *
 * In conclusione, l'utilizzo di un server locale non solo risolve le questioni legate a
 * Same-Origin Policy, ma crea anche un ambiente più realistico per lo sviluppo del tuo
 * progetto, simile a quello che avrai quando il tuo frontend sarà in produzione su un server
 *  web.
 */
