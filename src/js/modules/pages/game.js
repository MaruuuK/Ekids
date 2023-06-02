import categories from '../data/categories';
import { mainContent, gameBar } from '../globals';
import { getCardsByCategory } from '../data/cards';

export default function loadPage(idCategory) {
  mainContent.innerHTML = '';
  const nameCategory = document.querySelector('.name-category');

  nameCategory.innerHTML = categories[idCategory].name;

  getCardsByCategory(idCategory).forEach((card) => {
    const col = document.createElement('div');
    col.className = 'col mb-5';
    const cardNode = card.createNodeForGame(card.id);
    col.appendChild(cardNode);
    mainContent.appendChild(col);

    cardNode.addEventListener('click', async () => {
      if (cardNode.classList.contains('played')) {
        return;
      }
      if (cardNode.classList.contains('playing')) {
        await gameBar.plusScore();
        cardNode.classList.remove('playing');
        cardNode.classList.add('played');
        gameBar.startBtn.click();
        return;
      }
      if (gameBar.startBtn.classList.contains('start')) {
        await gameBar.minusScore(gameBar.card);
      }
    });
  });
}
