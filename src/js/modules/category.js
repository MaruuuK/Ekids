import { main_container } from "./main_page";
import { categories, cards } from "./cards";

document.querySelectorAll('.category').forEach(category => category.addEventListener('click', loadCardsCategory));

function loadCardsCategory(e) {
    main_container.innerHTML = '';
    const idCategory = e.currentTarget.dataset.id;
    const category = categories[idCategory];
    for (let i = 0; i < category.cards.length; i++) {
        let col = document.createElement("div");
        col.className = "col mb-5";
        const cardId = category.cards[i];
        col.appendChild(cards[cardId].createNode(cardId));
        main_container.appendChild(col);
    }

    document.querySelectorAll('.card-tile .rotate').forEach(card => {
        card.addEventListener('click', function (e) {
            // doing
            console.log("rotate");
            e.stopPropagation();
        });
    });
    document.querySelectorAll('.card-tile').forEach(card => {
        card.addEventListener('click', function (e) {
            cards[e.currentTarget.dataset.id].playAudio();
        });
    });
}

export { main_container, categories, loadCardsCategory, };
