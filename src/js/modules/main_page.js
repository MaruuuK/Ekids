import { Category } from "./classes";
import cards from "./cards";
import { appendChildren } from './functions';

let main_container = document.getElementById('category');

for (let key in cards) {
    let col = document.createElement("div");
    col.className = "col mb-5";
    col.appendChild((new Category(cards[key].category, key, cards[key].items[6].image)).createNode());
    main_container.appendChild(col);
}

export { main_container };
