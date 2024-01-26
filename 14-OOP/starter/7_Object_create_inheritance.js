'use strict';

const personProto = {
  calcAge: function () {
    return 2023 - this.birthDate;
  },

  init: function (firstName, birthDate) {
    this.firstName = firstName;
    this.birthDate = birthDate;
  },
};

/**
 * ricordiamo che :
 * Object.create crea un nuovo oggetto vuoto.
 * Imposta il __proto__  del nuovo oggetto all'oggetto passato come argomento . Ciò significa che il nuovo oggetto
 * erediterà tutte le proprietà e i metodi di oggettoPrototipo.
 */
const mirco = Object.create(personProto);

mirco.init('mirco', 1995);

console.log(mirco.__proto__ == personProto); // true

/**
 * a questo punto per implementare l'ereditarieta ( che in realta è una catena di delegation);
 * ricordando che Object.create crea un nuovo oggetto e imposta il __proto__ di questo nuovo oggetto all'oggetto
 * che passiamo come argomento, ci basta fare :
 */
const studentProto = Object.create(personProto);

/**
 * in questo modo studentProto è un nuovo oggetto con __proto__ = personProto.
 * Ovvero abbiamo inserito personProto nella catena di __proto__ di studentProto
 * implementando cosi l'ereditarieta
 */

studentProto.init = function (name, nascita, materia1, materia2) {
  personProto.init.call(this, name, nascita);
  this.materia1 = materia1;
  this.materia2 = materia2;
};

const student = Object.create(studentProto);

student.init('mirco', 1994, 'matematica', 'informatica');

console.log(student.calcAge());

/**
 * parere personale :
 * Questo metodo è il migliore in js per creare classi e implementare l'ereditarietà
 *
 * questo perche non nasconde i meccaniscmi che ci sono dietro la prototypal delegation,
 * che è fondamentale da capire se si vuoele usare l'oop in js, ma allo stesso tempo la semplifica molto.
 * soprattutto rispetto al metodo basato sulle funzioni ed il costruttore, infatti l'operatore new sparisce, il costruttore
 * sparisce, la proprieta prototype sparisce... .
 * Sono solo oggetti collegati ad altri oggetti e si riduce il concetto di OOP all'osso
 *
 * molto meglio che cercare di implementare i meccaniscmi dell'oop con il costruttore ecc ecc. C
 * he poi è quello che fanno anche java e altri linguaggi (nche le classi ES6 di js).
 *
 * in questo modo non stiamo creando nessun meccaniscmo astruso per cercare di implementare questa sorta di concetto di classe
 * ma semplicemente colleghiamo oggetti tra loro !
 *
 * quello delle classi ES6 ha il vantaggio che introduce una sintassi nota e stanota ma potrebbe essere
 * fuorviante perche ci impedisce di capire il reale funzionamento dell'oop in js con il concetto di prototype delegation
 */

/**
 * per quanto riguarda la protezione dei dati tramite il private nelle classi
 * nonc'è ancora un modo per farlo in js anche se è in lavorazione un modo per implementarli,
 * tuttavia c'è una convenzione generale : se un campo in una classe inizia con _ (underscore)
 * è da considerarsi privato e da manipolare solo tramite i metodi
 *
 * c'è in lavorazione l'aggiunta dei metodi e edelle proprita pubbliche e private nelle classi ES6
 * ma è ancora in lavorazione, anche se molti non sono d'accordo perche l'aggiunta di questo tipo di incapsulatori sonlo
 * nella classi ES6 snaturerebbe un js stesso.
 *
 * Tuttavia le proposte sono queste
 */

class test {
  /**
   * una variabile dichiarata cosi diventa pubblica e va a finire nell'istanza dell'oggetto (non nel prototype)
   * come quelle dichiarate con il this nel costruttore
   *
   * ovvero per dichiarare una variabile pubblica basta dichiararla all'inizio della classe senza niente
   */
  thisIsPublic;

  /**
   * una variabile dichiarata cosi diventa privata e va a finire nell'istanza dell'oggetto (non nel prototype)
   * come quelle dichiarate con il this nel costruttore
   *
   * ovvero per dichiarare una variabile privata basta dichiararla all'inizio della classe con il nome
   * della variabile che deve iniziare con #
   *
   * in questo modo se proviamo ad accedere dall'esterno l'interprete dara errore
   */

  #thiIsPrivate;

  /**
   * per quanto riguarda i metodi è la stessa identica cosa detta sopra
   * per rendere un metodo privato basta chiamarlo con #
   *
   * tuttavia ancora i per i metodi i browser non supportano queste feature quindi attenzione ad usarle
   * mentre per i campoi privati l'unico a supportarli per ora è chrome
   */
}

/**
 * due parole sull'oggetto navigator
 *
 * In JavaScript, navigator è un oggetto globale che fornisce informazioni sul browser web
 * in cui il tuo script JavaScript viene eseguito.
 * Questo oggetto contiene diverse proprietà e metodi che consentono di accedere a informazioni
 * sul browser, come il nome, la versione, il sistema operativo dell'utente e molto altro.
 * È particolarmente utile quando si desidera scrivere codice JavaScript che si comporta in
 * modo diverso in base al browser dell'utente o alle sue impostazioni.
 * Alcune delle proprietà e dei metodi più comuni di navigator includono:
 * navigator.userAgent: Restituisce una stringa che rappresenta l'agente utente del browser, che può essere utilizzata per identificare il browser.
 * avigator.appName e navigator.appVersion: Forniscono il nome e la versione del browser.
 * navigator.platform: Restituisce il sistema operativo dell'utente.
 * navigator.language: Restituisce la lingua preferita dell'utente nel browser.
 * navigator.cookieEnabled: Indica se i cookie sono abilitati nel browser dell'utente.
 * navigator.geolocation: Fornisce un oggetto per l'accesso alla posizione geografica dell'utente.
 * navigator.mediaDevices: Consente l'accesso ai dispositivi multimediali come la fotocamera e il microfono.
 * navigator.onLine: Indica se il browser è connesso a Internet.
 * navigator.plugins e navigator.mimeTypes: Forniscono informazioni sui plugin installati nel browser.
 * Puoi utilizzare queste proprietà e metodi per scrivere script JavaScript più sofisticati che si adattano alle condizioni del browser e alle preferenze dell'utente. Ad esempio, puoi verificare se il browser supporta una determinata funzionalità prima di utilizzarla o personalizzare l'esperienza utente in base alla lingua del browser.
 */
