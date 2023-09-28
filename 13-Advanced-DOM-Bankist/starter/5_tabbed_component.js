'use strict';
const tabContainer = document.querySelector('.operations__tab-container');
const tabButtons = document.querySelectorAll('.operations__tab');

tabContainer.addEventListener('click', function (e) {
  /**
   * perche stiamo usando il closest ?
   * dentro il button abbiamo uno span
   * <button> <span> 01 </span> Instant Transfer <button>
   *
   * in questo caso se usassimo e.target e l'utente clicca sullo 01 ovvero lo <span>
   * l'elemento target sarebbe appunto lo <span> e non il <button> e la callback non funzionerebbe
   */
  const clicked = e.target.closest('.operations__tab');

  // close guard
  if (!clicked) return;

  tabButtons.forEach(el => {
    el.classList.remove('operations__tab--active');
  });

  clicked.classList.add('operations__tab--active');
  const targetDiv = clicked.dataset.tab;
  const targetClass = '.operations__content--' + targetDiv;

  document.querySelectorAll('.operations__content').forEach(el => {
    console.log(el);
    el.classList.remove('operations__content--active');
  });

  // prettier-ignore
  document.querySelector(targetClass).classList.add('operations__content--active');
});

// MENU FADE ANIMATION

const nav = document.querySelector('.nav');

/**
 * abbiamo gia visto una proprietà molto simile prima che è
 * mouseenter, mouseenter tuttavia non sfrutta il bubbling, per questo usiamo mouseover
 * che fa la stessa cosa ma sfrutta il bubbling!
 */
// nav.addEventListener('mouseover', function (e) {
//   /**
//    * in questo caso non usiamo closest() perche dentro il tag che andiamo a
//    * considerare non ci sono altri tag innestati e quindi e.target restituira
//    * sempre l'elemnto che ci serve effettivamente.
//    */
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const links = nav.querySelectorAll('.nav__link');
//     console.log(links);

//     links.forEach(l => {
//       console.log(l);
//       if (l != link) {
//         l.style.opacity = 0.5;
//       }
//     });

//     logo = nav.querySelector('img');
//     logo.style.opacity = 0.5;
//   }
// });
//
// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const links = nav.querySelectorAll('.nav__link');
//     console.log(links);

//     links.forEach(l => {
//       console.log(l);
//       l.style.opacity = 1;
//     });

//     logo = nav.querySelector('img');
//     logo.style.opacity = 1;
//   }
// });

/**
 * in questo modo quando passiamo il mouse sui link nella navbar tutti i link
 * diventano semitrasparenti tranne quello su cui è il focus effettivamente.
 * ma in questi 2 handlerer c'è lo stesso identico codice una volta con un paramentro diverso che non è esattamente ottimale a livello di manutenzione
 * per risolvere questo possiamo rifattorizzare e scrivere tutto in una funzione che passiamo
 * agli handler! tuttavia questa funzione avra bisogno di argomenti, quindi vediamo cme si passano
 * argomenti alla callback dagli handler !
 */

let handleNavHover = function (e, opacity) {
  const link = e.target;
  const links = nav.querySelectorAll('.nav__link');
  console.log(links);

  links.forEach(l => {
    if (l != link) {
      l.style.opacity = opacity;
    }
  });

  logo = nav.querySelector('img');
  logo.style.opacity = opacity;
};

/**
 * una strategia è la seguente
 */
// nav.addEventListener('mouseover', function (e) {
//   handleNavHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleNavHover(e, 1);
// });

/**
 * ma possiamo fare molto di meglio
 * possiamo infatti usare il metodo bind che ci consete di settare il this della funzione
 * a quale valore noi vogliamo
 */

handleNavHover = function (e) {
  const link = e.target;
  const links = nav.querySelectorAll('.nav__link');
  // console.log(links);

  links.forEach(l => {
    // console.log(l);
    if (l != link) {
      l.style.opacity = this;
    }
  });

  logo = nav.querySelector('img');
  logo.style.opacity = this;
};

/**
 * stiamo usando di fatto il this come un paramentro custom! e stiamo sfruttando il bind
 * per aggirare il fatto che le funzioni di callback per gli eventi possono avere un solo
 * parametro !
 *
 * secondo chi fa il corso questo metodo dovrebbe essere migliore ma lo è suul serio ?
 * Sinceramente trovo molto piu leggibile il metodo sopra!
 * scrivi una riga di codice in piu ma almeno non salvi un parametro a caso dentro this, che
 * dovrebbe essere tutt'altro inoltre quando si legge il codice this non è affatto chiaro cosa cosa sia.
 */
nav.addEventListener('mouseover', handleNavHover.bind(0.5));
nav.addEventListener('mouseout', handleNavHover.bind(1));

// sticky navigation

// document.addEventListener('scroll', function (e) {
//   if (window.scrollY > nav.clientHeight) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

const headerTitle = document.querySelector('.header__title');

/**
 * abbiamo implementato questo usando lo scroll event !
 * tuttavia a livello di performance è una bad practice perche ogni volta che
 * facciamo uno scroll della pagina viene triggerato un evento, quindi in questo modo
 * ascoltiamo decine e decine di eventi !
 *
 * vediamo come farlo usando un altro metodo molto piu indicato per questo
 * tipo di utilizzi ovvero;
 *
 * L'itersection observer API, ma cos'è e come funziona ?
 *
 * L'intersection observer API ci permette di guardare al modo in cui un certo elemento
 * si interseca con un altro elemento, o il modo in cui questo elemento interseca il viewport.
 *
 * come fuzniona L'intersection Observer API ?
 * per spiegarlo iniziamo con qualcosa di piu semplice della sticky navigation.
 * l'oggetto IntersectionObserver prende come parametri una callback e un oggetto contente le
 * opzioni
 */

const observerOptions = {
  root: null, // l'elemento che vogliamo che il target intersechi (se metto null significa l'intero viewport)
  threshold: 0.1, // soglia in percentuale (con 0.1 si intende il 10% )
  /**
   * è importante notare che questa funzione verra chiamata 2 volte ! 1 volta quando si interseca
   * l'oggetto in entrata (in questo caso del 10 percento) e un altra volta quando si esce dall'oggetto (sempre con soglia del 10%)
   */
};

/**
 * questa funzione verra chiamata dall'oggetto observer passando 2 parametri :
 *  - entries : che è un array di treshold
 *  - observer : che è l'observer stesso
 *
 * notiamo che quando effettuiamo lo scroll c'è una proprieta interessante presente nell'oggetto
 * che viene ritornato quando l'evento è triggerato:
 * la proprieta isIntersecting
 * che quando scrolliamo verso il basso è true
 * e quando saliamo verso l'altro è false
 *
 * infatti quando saliamo verso l'alto ( in base alla soglia impostata ) l'oggettto non viene piu intersecato
 *
 * con questa soluzione c'è un problema...
 * infatti prima abbiamo detto che questa soglia viene triggerata sia in entrata che in uscita dall'oggetto
 * questo fa si che la nav-bar venga tolta una volta che si esce fuori da section1 perche viene triggerato
 * nuovamente levento con isIntersecting= false
 * per risolverlo possiamo usare la proprieta intersectionRatio
 */
// prettier-ignore
const observerCallback = function (entries, observer) {
  entries.forEach(e => {
    if (!e.isIntersecting) {
      nav.classList.add('sticky');
    } else  nav.classList.remove('sticky')
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

/**
 * ora possiamo usare l'observer per osservare l'elemento
 * questa funzione viene chiamata ogni volta che il target element interseca il root element alla
 * treshold che abbiamo definito non importa che lo scroll sia verso sopra o verso sotto
 *

 */
observer.observe(headerTitle);

/**
 * è possibile usare lo stesso IntersectionObserver per osservare piu elementi !
 * per farlo basta chahiamare observer.Observe(elemento) piu volte per quanti elementi vogliamo osservare
 */

/**
 * LAZY LOADING
 * La strategia è quella di caricare prima un'immagine a risoluzione veramente bassa
 * che quindi pesa molto poco e man mano che si scorre caricare l'immagine che
 * il viewport sta visualizzando in quel momento
 *
 * Non vogliamo caricare tutte le immagini in questo modo, ma solo quelle che
 * contengono l'attributo data-src (in quell'attributo è presente il link con l'immagine
 * a risoluzione completa).
 *
 */

const imgTargets = document.querySelectorAll('img[data-src]');

const obsOptions = {
  root: null,
  threshold: 0,
};

const imageObsCallback = function (entries, obs) {
  const [entry] = entries; // destructuring: è come scrivere const entry = entries[0]

  const targetImg = entry.target;
  if (!entry.isIntersecting) return;

  targetImg.src = targetImg.dataset.src;

  /**
   * a questo punto l'immagine viene caricata correttamente ma viene ancora visualizzata
   * sfocata, questo perche c'è ancora la classe che applica il filtro blur.
   * ora noi vogliamo togliere questa classe e mostrare l'immagine caricata completamente solo dopo
   * che l'immagine è stata effettivamente caricata.
   * è possibile fare questo infatti javascript quando cambiamo il link all'imamgine
   * carica la nuova immagine e genera un'evento di loading che puo essere ascoltato !
   *e che chiama la callback quando il loading è finito
   */

  entry.target.addEventListener('load', function (e) {
    targetImg.classList.remove('lazy-img');
    /**
     * inoltre una volta che sono state caricate le immagini complete non c'è piu bisogno di acoltare
     * quindi possiamo smettere di osservare
     */

    obs.unobserve(targetImg);
  });
};

const obs = new IntersectionObserver(imageObsCallback, obsOptions);

imgTargets.forEach(t => {
  obs.observe(t);
});
