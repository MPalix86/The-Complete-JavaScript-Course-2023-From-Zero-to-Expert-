'use strict';

/**
 * questo pezzo di codice TUTTO QUANTO serve a far funzionare le slide, per far si che non
 * interferisca con altre parti di codice una buona pratica è quella di includerlo tutto quanto
 * dentro una funzione e poi di chiamare quella funzione
 */

const slideInit = function () {
  const slides = document.querySelectorAll('.slide');

  let selectedSlide = 0;
  const leftBtn = document.querySelector('.slider__btn--left');
  const rightBtn = document.querySelector('.slider__btn--right');
  /**
   * questo servira per far i puntini che segnano il numero totale di slide e quella
   * su cui siamo attualmente
   */
  const dotsDiv = document.querySelector('.dots');

  slides.forEach((s, i) => {
    s.style.transform = `translateX(${i * 100}%)`;
  });

  const highlightSelectedDot = function () {
    const dots = dotsDiv.querySelectorAll('.dots__dot');
    dots.forEach(d => {
      const slideNumber = Number(d.dataset.slide);
      if (slideNumber === selectedSlide) {
        d.classList.add('dots__dot--active');
      } else {
        d.classList.remove('dots__dot--active');
      }
    });
  };

  // prettier-ignore
  const moveSlides = function (slides) {
    if (selectedSlide > slides.length -1 || selectedSlide < 0 ) selectedSlide = 0
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - selectedSlide) * 100}%)`;
    });
    highlightSelectedDot()
    
  };

  /** implementiamo il movimento delle slide con il click sulle freccette*/
  const sliderTab = document.querySelector('.slider');
  sliderTab.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('slider__btn--left')) {
      selectedSlide--;
      moveSlides(slides);
    }
    if (target.classList.contains('slider__btn--right')) {
      selectedSlide++;
      moveSlides(slides);
    }
  });

  /**
   * poiche non sappiamo il numero di slide a priori creiamo i puntini al momento
   * usiamo una immediatly invoked function expression
   */
  (function () {
    /**
     *
     * _ (il trattino basso) significa che quella variabile verra totalmente ingorata infatti noi abbiamo
     * bisogno solo dell'indice
     */
    slides.forEach(function (_, i) {
      dotsDiv.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot " data-slide="${i}"> </button>`
      );
    });
  })();

  highlightSelectedDot();

  /**
   * facciamo funzionare il click sui puntini
   */
  dotsDiv.addEventListener('click', function (e) {
    const dot = e.target;
    if (dot.classList.contains('dots__dot')) {
      selectedSlide = dot.dataset.slide;
      moveSlides(slides);
    }
  });

  /**
   * aggiungiamo la possibilita di muovere le slides con le frecce
   */

  let sliderVisible = false;

  const sliderOpt = {
    root: null,
    threshold: 1,
  };

  const sliderIntersectionCallback = function (entries, obs) {
    entries.forEach(e => {
      if (e.isIntersecting) sliderVisible = true;
      else sliderVisible = false;
    });
  };

  // prettier-ignore
  const observer = new IntersectionObserver(sliderIntersectionCallback, sliderOpt);

  observer.observe(sliderTab);

  document.addEventListener('keydown', e => {
    if (sliderVisible) {
      if (e.code == 'ArrowRight') {
        selectedSlide++;
        moveSlides(slides, 1);
      } else if (e.code == 'ArrowLeft') {
        selectedSlide--;
        moveSlides(slides, +1);
      }
    }
  });
};

slideInit();
