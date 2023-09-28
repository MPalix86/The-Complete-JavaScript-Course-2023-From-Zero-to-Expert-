/**
 * usiamo il bubbling per implementare l'event delegation
 * lo useremo per implementare lo scrolling durante il clikc dei tasti sulla navabar
 */

/**
 * per vedere la differenza implementiamo prima tutto senza usare il bubbling.
 */

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     console.log('click');
//     e.preventDefault();
//     const id = el.getAttribute('href');
//     const targetEl = document
//       .querySelector(id)
//       .scrollIntoView({ behavior: 'smooth' });
//   });
// });

/**
 * qual'è il problema con il codice scritto sopra ?
 * Il problema è che non è per nulla efficiente, stiamo infatti aggiungendo una copia
 * della stessa funzione di callback per ogni elemento.
 * Ora in questo caso non ci sono problemi, ma se dovessimo fare questo per una
 * pagina che ha migliaia di elementi sarebbe un problema.
 *
 * per risparmiare risorse sfruttiamo il bubbling, ovvero mettiamo il listener ad
 * un parent comune a tutti nav__link e poi determiniamo di quale elemento si tratta
 *
 */

const navLinks = document.querySelector('.nav__links');

navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  const target = e.target; // il target è l'lemento effettivamente ciccato ! ovvero un link all'interno della nav_bar
  if (target.classList.contains('nav__link')) {
    id = target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// DOM TRAVERSING
const h1 = document.querySelector('h1');
console.log(h1);

/**
 * questo mi da una nodeList degli elemento con la classe specificata
 * dentro h1
 */
console.log(h1.querySelectorAll('.highlight'));

/**
 * childNodes mi da ivece sempre una NodeList di  tutti i nodi all'interno di h1
 * come possiamo vedere questo ritorna tutti gli elementi dentro h1, e alcuni sono text
 * altri sono tag altri comment, e questo perche come gia sappaimo i node possono essere
 * qualsiasi cosa.
 */

console.log(h1.childNodes);

/**
 * la proprità children ci restituisce una HTML collection dei children dell'elemento specificato, tuttavia nelle HTMLCollections
 * sono inclusi solo gli elemento HTML effettivi ( no testo commenti ecc )
 */

console.log(h1.children);
