// SELECT ELEMENTS
const elementBody = document.body;
const btnDarkMode = document.querySelector('#btn-dark-mode');
const mainHeader = document.querySelector('#main-header');
const search = document.querySelector('#search');

// FUNCTION TO CREATE-DARK-MODE-CARDS
function createDarkModeCards(){
  const card = document.querySelectorAll('#cardNations li');
  card.forEach(cards => {
    cards.classList.toggle('dark-mode-card');
  });
}

// BUTTON TO CREATE DARK-MODE
btnDarkMode.addEventListener('click', () => {
  elementBody.classList.toggle('dark-mode');
  mainHeader.classList.toggle('dark-mode-main-header');
  search.classList.toggle('dark-mode-search');
  createDarkModeCards();
});

