import { main_container } from "./main_page";
import cards from "./cards";

const categories = document.querySelectorAll('.category').forEach(category => category.addEventListener('click', loadCardsCategory));


function loadCardsCategory(e) {
    main_container.innerHTML = '';
    const idCategory = e.currentTarget.dataset.id;
    const category = cards[idCategory];
    for (let i = 0; i < category.cards.length; i++) {
        let col = document.createElement("div");
        col.className = "col mb-5";
        col.appendChild(category.cards[i].createNode());
        main_container.appendChild(col);
    }
}

export { main_container, categories, loadCardsCategory };
