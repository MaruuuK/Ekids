import loadCategoryPage from './pages/category';
import loadGamePage from './pages/game';
import loadStatisticsPage from './pages/statistics';
import { gameBar } from './globals';

// BODY OVERLAY

function closeOverlay() {
  document.body.classList.remove('overlay');
  document.body.classList.remove('burger-menu');
}

document.body.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BODY' || e.target.className === 'nav-item') {
    closeOverlay();
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    closeOverlay();
  }
});

// SIDEBAR MENU

document.querySelector('.burger-btn').addEventListener('click', () => {
  if (document.body.classList.contains('burger-menu')) {
    closeOverlay();
  } else {
    document.body.classList.add('burger-menu');
    document.body.classList.add('overlay');
  }
});

// LINKS TO CATEGORIES

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((item) => item.addEventListener('click', (e) => {
  if (e.currentTarget.hasAttribute('data-id')) {
    const { id } = e.currentTarget.dataset;
    document.body.dataset.category_id = id;

    if (document.body.classList.contains('play')) {
      loadGamePage(id);
      gameBar.activate();
    } else {
      loadCategoryPage(id);
      gameBar.deactivate();
    }
  } else {
    loadStatisticsPage();
    gameBar.deactivate();
  }

  closeOverlay();
  [...navLinks].find((navLink) => navLink.classList.contains('active')).classList.remove('active');
  e.currentTarget.classList.add('active');
}));
