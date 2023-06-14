import categories from '../data/categories';
import { cards, getCardsByCategory, getCardsById } from '../data/cards';
import { mainContent, statStorage } from '../globals';

export default function loadPage(idCategory) {
  if (!Array.isArray(idCategory)) {
    mainContent.innerHTML = `<div class="name-category pb-4">${categories[idCategory].name}</div>`;
  }

  const row = document.createElement('div');
  row.className = 'row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4';
  mainContent.appendChild(row);

  function createCard(card) {
    const col = document.createElement('div');
    col.className = 'col mb-5 flip-container';
    col.appendChild(card.createNode(card.id));
    row.appendChild(col);
  }

  if (Array.isArray(idCategory)) {
    getCardsById(idCategory).forEach((card) => createCard(card));
  } else {
    getCardsByCategory(idCategory).forEach((card) => createCard(card));
  }

  document.querySelectorAll('.card-tile .rotate').forEach((card) => {
    card.addEventListener('click', (e) => {
      e.currentTarget.closest('.card-tile').classList.add('flipCard');
      e.stopPropagation();
    });
  });

  document.querySelectorAll('.card-tile').forEach((cardNode) => {
    cardNode.closest('.flip-container').addEventListener('mouseleave', () => {
      cardNode.classList.remove('flipCard');
    });
    cardNode.addEventListener('click', (e) => {
      if (cardNode.classList.contains('flipCard')) {
        e.stopPropagation();
      } else {
        const card = cards[e.currentTarget.dataset.id];
        statStorage.addClick(card.id);
        card.playAudio();
      }
    });
  });
}
