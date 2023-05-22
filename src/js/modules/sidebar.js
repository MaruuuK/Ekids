import { loadPage as loadCategoryPage } from "./pages/category";
import { loadPage as loadGamePage } from "./pages/game";
import { body } from "./globals";

//BODY OVERLAY

function closeOverlay() {
    body.classList.remove('overlay');
    body.classList.remove('burger-menu');
}

body.addEventListener('click', function (e) {
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
    if (body.classList.contains('burger-menu')) {
        closeOverlay();
    } else {
        body.classList.add('burger-menu');
        body.classList.add('overlay');
    }
});

//LINKS TO CATEGORIES

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(item => item.addEventListener('click', function (e) {
    if (e.currentTarget.hasAttribute('data-id')) {
        const id = e.currentTarget.dataset.id;
        body.dataset["category_id"] = id;

        if (body.classList.contains("play")) {
            loadGamePage(id);
        } else {
            loadCategoryPage(id);
        }

        closeOverlay();
        [...navLinks].find(navLink => navLink.classList.contains('active')).classList.remove('active');
        e.currentTarget.classList.add('active');
    }
}));
