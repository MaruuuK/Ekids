import { main_container } from "./main_page";
import { categories, cards } from "./cards";
import { navLinks } from "./sidebar";


const categoriesCards = document.querySelectorAll('.category');

categoriesCards.forEach(category => category.addEventListener('click', loadCardsCategory));
categoriesCards.forEach(category => category.addEventListener('click', handleCategoryMenu));

function loadCardsCategory(e) {
    main_container.innerHTML = '';
    const nameCategory = document.querySelector(".name-category");
    const idCategory = e.currentTarget.dataset.id;

    nameCategory.innerHTML = categories[idCategory].name;

    const category = categories[idCategory];
    for (let i = 0; i < category.cards.length; i++) {
        let col = document.createElement("div");
        col.className = "col mb-5 flip-container";
        const cardId = category.cards[i];
        col.appendChild(cards[cardId].createNode(cardId));
        main_container.appendChild(col);
    }

    document.querySelectorAll('.card-tile .rotate').forEach(card => {
        card.addEventListener('click', function (e) {
            e.currentTarget.closest('.card-tile').classList.add('flipCard');
            e.stopPropagation();
        });
    });

    document.querySelectorAll('.card-tile').forEach(card => {
        card.closest('.flip-container').addEventListener('mouseleave', function () {
            card.classList.remove('flipCard');
        })
        card.addEventListener('click', function (e) {
            if (card.classList.contains('flipCard')) {
                e.stopPropagation();
            } else {
                cards[e.currentTarget.dataset.id].playAudio();
            }
        });
    });
}

function handleCategoryMenu(e) {
    [...navLinks].find(navLink => navLink.classList.contains('active')).classList.remove('active');
    [...navLinks].find(navLink => navLink.dataset.id === e.currentTarget.dataset.id).classList.add('active');
}


export { main_container, loadCardsCategory, };
