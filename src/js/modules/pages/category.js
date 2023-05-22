import { categories, cards } from "../cards";
import { mainContent } from "../globals";

export function loadPage(idCategory) {
    mainContent.innerHTML = '';
    const nameCategory = document.querySelector(".name-category");

    nameCategory.innerHTML = categories[idCategory].name;

    const category = categories[idCategory];
    for (let i = 0; i < category.cards.length; i++) {
        let col = document.createElement("div");
        col.className = "col mb-5 flip-container";
        const cardId = category.cards[i];
        col.appendChild(cards[cardId].createNode(cardId));
        mainContent.appendChild(col);
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
