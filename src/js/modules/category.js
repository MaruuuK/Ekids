import { Cards } from "./classes";
import { main_container, categories } from "./main_page";
import { appendChildren } from "./functions";
import cards from "./cards";

const card = document.querySelectorAll('.card').forEach(card => card.addEventListener('click', loadCardsCategory));


function loadCardsCategory(e) {
    main_container.innerHTML = '';
    const idCategory = e.currentTarget.dataset.id;
    const category = cards[idCategory].items;
    let cardsCategory = [];
    for (let i = 0; i < category.length; i++) {
        cardsCategory.push(
            (new Cards(category[i].word, category[i].image)).createNode()
        );
    }
    appendChildren(main_container, ...cardsCategory);
}

export { main_container, card, loadCardsCategory }