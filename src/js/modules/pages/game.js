import categories from '../data/categories';
import { mainContent, gameBar, statStorage } from '../globals';
import { getCardsByCategory } from '../data/cards';

export default function loadPage(idCategory) {
  mainContent.innerHTML = `<div class="name-category pb-4">${categories[idCategory].name}</div>`;

  const row = document.createElement('div');
  row.className = 'row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4';
  mainContent.appendChild(row);

  getCardsByCategory(idCategory).forEach((card) => {
    const col = document.createElement('div');
    col.className = 'col mb-5';
    const cardNode = card.createNodeForGame(card.id);
    col.appendChild(cardNode);
    row.appendChild(col);

    cardNode.addEventListener('click', async () => {
      if (cardNode.classList.contains('played')) {
        return;
      }
      if (cardNode.classList.contains('playing')) {
        statStorage.addGuess(gameBar.card.id);
        await gameBar.plusScore();
        cardNode.classList.remove('playing');
        cardNode.classList.add('played');
        gameBar.startBtn.click();
        return;
      }
      if (gameBar.startBtn.classList.contains('start')) {
        statStorage.addFail(gameBar.card.id);
        await gameBar.minusScore(gameBar.card);
      }
    });
  });
}
