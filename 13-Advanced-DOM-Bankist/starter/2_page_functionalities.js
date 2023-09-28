'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  const fn = () => {
    /**  prendo il rettangolo che descrive questo elemento*/
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    /**
     * possiamo ottenere le cordinate attuali come segue:
     */
    console.log('curren scroll X/Y', window.scrollX, window.scrollY);

    /**
     * possiamo inoltre ottenere info anche sul viewPort (ovvero la porzione di pagina attualemtne in uso e visibile)
     */
    console.log(
      'viewport',
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );

    /**
     * scrolliamo la pagina fino alle coordinate desiderate:
     * la seguente opzione è sbagliata e successivamente si spiega perche
     */

    // window.scrollTo(s1coords.left, s1coords.top);

    /**
     *
     * pagina
     * ---------------------------
     * |            |    |       |
     * |            |    |       |
     * |            |    |       |
     * |            |    |       |
     * |            |C   |       |
     * |            |    | B     |
     * |            |    |       |
     * |viewport    |    |       |
     * |-----------------|-------|
     * |        |        |       |
     * |        | A      |       |
     * |        |        |       |
     * | ---elementoDiInteresse  |
     * |                         |
     * |                         |
     * |                         |
     * |-------------------------|
     * |                         |
     * |                         |
     * |                         |
     * |                         |
     * ---------------------------
     *
     * notiamo che la prima volta che usiamo il pulsante funziona, ma la seconda volta ammeno che non tornaimo su
     * completamente, il pulsante non funziona. Questo accade perche s1coords.top è riferito alla distanza dell'elemento dal viewport
     * (ovvero la distanza dall'inizio di quello che stai visualizzando e l'inizio dell'elemento s1coords.top, indicata con A)
     *
     * scrollTo invece è riferito all'inizio della pagina. Questo significa che a scrollTo, se voglio dire
     * correttamente di andare all'elemento (elementoDiInteresse), devo dare la distanza B e non A !
     *
     * Se faccio ScrollTo(s1coords.top) succede che il viewport,PARTENDO DALL'INIZIO DELLA PAGINA
     * percorre una distanza di A;che è sbagliato !
     * ovvero il comando passato cosi, fuinziona solo se il viewport coincide con l'inizio della pagina, ed ecco spiegato perche la prima volta che clicchiamo
     * senza toccare nulla funziona
     *
     * la distanza B non ce l'ho direttamente ma ho la distanza del vieport dal top C (window.scrollY)
     *
     * per fixare sta cosa basta passare la distanza del viewport dal top (C) + s1coords.top (A)
     *
     */

    window.scrollTo({
      left: s1coords.left + window.scrollX,
      top: s1coords.top /** A */ + window.scrollY /** C */,
      behavior: 'smooth',
    });
  };

  /**
   * tutto questo che abbiamo desctritto è il vecchio metododo per che si usava per scorrere la pagina! ora con js moderno
   * c'è un modo piu veloce! e soprattutto fa tutto solo
   */

  /**
   * tuttavia questo metodo è supportato solo dai browser moderni !
   * se la tua ap deve girare su pc del 15-18 no va bene
   */
  section1.scrollIntoView({ behavior: 'smooth' });
});
