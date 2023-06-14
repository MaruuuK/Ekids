import { sidebarMenu, gameBar } from './globals';
import { getCardsByCategory } from './data/cards';

const checkbox = document.getElementById('play-mode-checkbox');

checkbox.addEventListener('change', (e) => {
  document.body.classList.toggle('play', !e.currentTarget.checked);

  if (document.body.dataset.category_id !== undefined) {
    const id = document.body.dataset.category_id;
    sidebarMenu.querySelector(`.nav-link[data-id="${id}"]`).click();

    gameBar.resetGame();
  }
});

gameBar.startBtn.addEventListener('click', async () => {
  const cards = getCardsByCategory(document.body.dataset.category_id).filter((card) => !card.getNode().classList.contains('played'));
  gameBar.startBtn.classList.add('start');
  if (cards.length === 0) {
    await gameBar.endGame();

    getCardsByCategory(document.body.dataset.category_id).forEach((card) => {
      card.getNode().classList.remove('played');
    });
    return;
  }
  if (document.body.classList.contains('play')) {
    const randIndex = Math.floor(Math.random() * cards.length);
    gameBar.playCard(cards[randIndex]);
  }
});

document.getElementById('repeat-game-btn').addEventListener('click', () => {
  gameBar.card.playAudio();
});
