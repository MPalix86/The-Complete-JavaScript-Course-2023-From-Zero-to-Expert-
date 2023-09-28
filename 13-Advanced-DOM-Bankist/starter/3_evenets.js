'use strict';
/**
 * un evento è di base un segnale (rcordare i linux signals ( molto simile immagino))
 * che è generato da un nodo nel DOM
 */

const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   console.log('il mouse è entrato ');
// });

/**
 * un'latro modo di aggiungere eventi ad un elemento è quello di assegnare la funzione
 * a una delle proprieta cosi dette : onEvenetProperty e di qeueste ce ne sono diverse
 * ad esempio per il mouse enter c'è:
 * sostanzialmente esiste una proprietà per ogni evento. Potrebbe sembrare strano
 * ma questo modo di assegnare eventi è oldSchool, il modo moderno di assegnare eveneti
 * è quello di usare addEventListener.
 * ma perche ?
 */

// h1.onmouseenter = () => {
//   console.log('mouse entered');
// };

/**
 * in particolare addEvenetListener ci permentte di aggiungere n evenetListener
 * per lo stesso evento. usando le onEvenetProperty invece ne possiamo aggiungerne massimo
 * uno che verra poi rimpiazzato ogni volta che lo riassegniamo.
 *
 * Il secondo vantaggio è che possiamo rimuovere un eventHandler nel momento in cui
 * non ci serve piu. Per far si che la rimozione funzioni bisogna salvare
 * la callBack in una variabile
 */

const alertH1 = () => {
  console.log('mouse entered');
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

/**
 * esiste nache un tezo modo di gestire gli eventi che è quello di usare
 * un elemnto HTML( inserire ad esempio l'attributo onClick proprio dentro l'HTML) ma questo modo non dovrebbe mai essere usato.
 */

/**
 * gli eventi js hanno 3 fasi che sono importantissime
 * 1) capturing phase
 * 2) target phase
 * 3) bubbling phase
 *
 * in pratica quando noi clicchiamo su un determinato elemento l'evento viene triggerato
 * prima sul document che lo passa all'elemnto successivo del dom, e cosi via fino a
 * raggiungere l'elemento target e questa è la fase di capturing
 *
 * quando l'elento raggiunge il target inizia la "target phase", ovvero si avvia
 * la callback
 *
 * dopo la "target phase," l'evento viaggia di nuovo verso il document root
 * ripassando di nuovo da tutti i parent dell'elemento target, questa è detta "bubbling phase".
 *
 * qusto significa che se aggiungiamo un eventiListener oltre all'elemto target anche
 * ad uno de parent dell'elemento target, e clicchiamo l'elemento target, anche il parent a cui
 * abbiamo aggiunto il listener triggererà la callback !
 * questo ci permettera di implementare dei pattern molto potenti
 *
 * attenzione : l'evento viaggia 2 volte nei parent : una volta per arrivare al
 * target e una volta per tornare al document !
 * questo significa quindi che che se attacco un listener anche al parent e clicco il target
 * la callback del parent sara triggerata 2 volte ?
 * No infatti di default le callback dei listener nei parent vengono triggerate solo durante
 * la bubbling phase ovvero il ritorno.
 *
 * Tuttavia si puo anche settare js per triggerare gli eventi durante la fase di capturing
 *
 * Inoltre non tutti gli elementi hanno una fase di capturing e bubbling, alcuni eventi
 * vengono creati direttamente sul target senza fare tutto il giro che abbiamo detto prima
 * la maggior parte tuttavia si propagano come spiegato sopra
 *
 * facciamo una prova
 *
 */

const getRandomRGB = () => {
  const r = Math.trunc(Math.random() * 255);
  const g = Math.trunc(Math.random() * 255);
  const b = Math.trunc(Math.random() * 255);

  return [r, g, b];
};

const navLink = document.querySelector('.nav__link');
const nav = document.querySelector('.nav');
navLink.addEventListener('click', function (e) {
  e.preventDefault();
  const [r, g, b] = getRandomRGB();
  this.style.backgroundColor = `rgb(${r},${g},${b})`;
  console.dir(e);

  /**
   * un'altra cosa che possiamo fare è stoppare la propagazione dell'evento
   */

  // e.stopPropagation();
});

nav.addEventListener('click', function () {
  const [r, g, b] = getRandomRGB();
  this.style.backgroundColor = `rgb(${r},${g},${b})`;
});

/**
 * clicco navLink ma viene cambiato il colore anche su nav
 */

/**
 * se vogliamo catturare l'evento durante la prima fase (capturing) e non durante
 * l'ultima (bubbling) possiamo farlo impostando un terzo paramentro alla chiamata addEventListener
 * con questo parametro a true js metterà le'elemto in ascolto ma durante la fase di capturing
 */

nav.addEventListener(
  'click',
  function () {
    const [r, g, b] = getRandomRGB();
    this.style.backgroundColor = `rgb(${r},${g},${b})`;
  },
  true
);
