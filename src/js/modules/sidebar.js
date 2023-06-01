import { loadPage as loadCategoryPage } from "./pages/category";
import { loadPage as loadGamePage } from "./pages/game";
import { gameBar } from './globals';

//BODY OVERLAY

function closeOverlay() {
    document.body.classList.remove('overlay');
    document.body.classList.remove('burger-menu');
}

document.body.addEventListener('click', function (e) {
    if (e.target.nodeName === 'BODY' || e.target.className === "nav-item") {
        closeOverlay();
    }
});

window.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
        closeOverlay();
    }
});

// SIDEBAR MENU

document.querySelector('.burger-btn').addEventListener('click', function () {
    if (document.body.classList.contains('burger-menu')) {
        closeOverlay();
    } else {
        document.body.classList.add('burger-menu');
        document.body.classList.add('overlay');
    }
});

//LINKS TO CATEGORIES

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(item => item.addEventListener('click', function (e) {
    if (e.currentTarget.hasAttribute('data-id')) {
        const id = e.currentTarget.dataset.id;
        document.body.dataset["category_id"] = id;

        if (document.body.classList.contains("play")) {
            loadGamePage(id);
            gameBar.activate();
        } else {
            loadCategoryPage(id);
            gameBar.deactivate();
        }

        closeOverlay();
        [...navLinks].find(navLink => navLink.classList.contains('active')).classList.remove('active');
        e.currentTarget.classList.add('active');
    }
}));
