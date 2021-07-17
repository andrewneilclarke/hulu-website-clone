const openModal = () => (modal.style.display = 'block');
const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// functions

// function openModal() {
//   modal.style.display = 'block';
// }

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}
// const openModal = () => (modal.style.display = 'block');
// const closeModal = () => (modal.style.display = 'none');
