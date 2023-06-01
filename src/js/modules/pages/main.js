import { categories } from "../data/categories";
import { mainContent } from "../globals";

for (let key in categories) {
    let col = document.createElement("div");
    col.className = "col mb-5";
    col.appendChild(categories[key].createNode());
    mainContent.appendChild(col);
}
