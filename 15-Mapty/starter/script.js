'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map, mapEvent;

/**
 * Vediamo come funziona la geo location API del browser
 */

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      const coords = [latitude, longitude];
      map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();

      /**
       * questo oggetto map è ritornato dalla libreria e questo evento non è gestito direttamente da javascript
       * ma dalla libreria
       */
      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },

    function () {
      alert('could not get your position');
    }
  );
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // clear inputFields
  inputDistance.value = '';
  inputDuration.value = '';
  inputCadence.value = '';
  inputElevation.value = '';

  // display markers
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});


/** 
 * esiste un evento che viene triggerarto quando si seleziona qualcosa da un dropdown
 */

inputType.addEventListener("change", function(){
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
  inputCadence.closest(".form__row").classList.toggle("form__row--hidden")
  
})
