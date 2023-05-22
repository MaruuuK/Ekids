import { categories, cards } from "../cards";
import { mainContent } from "../globals";

export function loadPage(idCategory) {
    mainContent.innerHTML = '';
    const nameCategory = document.querySelector(".name-category");

    nameCategory.innerHTML = categories[idCategory].name;

    const category = categories[idCategory];
    for (let i = 0; i < category.cards.length; i++) {
        let col = document.createElement("div");
        col.className = "col mb-5";
        const cardId = category.cards[i];
        col.appendChild(cards[cardId].createNodeForGame(cardId));
        mainContent.appendChild(col);
    }
}
