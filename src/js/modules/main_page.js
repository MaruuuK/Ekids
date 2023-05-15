import { Category } from "./classes";
import cards from "./cards";
import { appendChildren } from './functions';

let main_container = document.getElementById('category');

let categories = [];
for (let key in cards) {
    categories.push(
        (new Category(cards[key].category, key, cards[key].items[6].image)).createNode()
    );
}

appendChildren(main_container, ...categories);

export { main_container };
