// functions
const openModal = () => (modal.style.display = 'block');
const closeModal = () => (modal.style.display = 'none');
const outsideClick = (e) => {
  if (e.target == modal) {
    closeModal();
  }
};

// DOM elements
const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

// event listeners
loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
