import { Cards } from "./classes";
import { main_container, categories } from "./main_page";
import { appendChildren } from "./functions";
import cards from "./cards";

const card = document.querySelectorAll('.card').forEach(card => card.addEventListener('click', loadCardsCategory));


function loadCardsCategory(e) {
    main_container.innerHTML = '';
    const idCategory = e.currentTarget.dataset.id;
    const category = cards[idCategory].items;
    for (let i = 0; i < category.length; i++) {
        let col = document.createElement("div");
        col.className = "col mb-5";
        col.appendChild((new Cards(category[i].word, category[i].image)).createNode());
        main_container.appendChild(col);
    }
}

export { main_container, card, loadCardsCategory }
