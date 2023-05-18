import { main_container } from "./main_page";
import { categories, cards } from "./cards";

document.querySelectorAll('.category').forEach(category => category.addEventListener('click', loadCardsCategory));

function loadCardsCategory(e) {
    main_container.innerHTML = '';
    const idCategory = e.currentTarget.dataset.id;
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

export { main_container, loadCardsCategory, };
