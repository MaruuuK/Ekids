import { categories } from "../data/categories";
import { cards } from "../data/cards";
import { mainContent } from "../globals";
import { getCardsByCategory } from '../data/cards';

export function loadPage(idCategory) {
    mainContent.innerHTML = '';
    const nameCategory = document.querySelector(".name-category");

    nameCategory.innerHTML = categories[idCategory].name;

    getCardsByCategory(idCategory).forEach((card) => {
        let col = document.createElement("div");
        col.className = "col mb-5 flip-container";
        col.appendChild(card.createNode(card.id));
        mainContent.appendChild(col);
    });

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
