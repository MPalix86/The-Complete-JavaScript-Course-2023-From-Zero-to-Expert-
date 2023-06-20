/**
 * codice di esempio sull'uso dei modal
 */

'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btns = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
let isModalOpen = false;

function showModal() {
  if (isModalOpen) return;
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  isModalOpen = !isModalOpen;
}
function closeModal() {
  if (!isModalOpen) return;
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  isModalOpen = !isModalOpen;
}

overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', showModal);
}
