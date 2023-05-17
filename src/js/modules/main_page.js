import { categories } from "./cards";

let main_container = document.getElementById('category');

for (let key in categories) {
    let col = document.createElement("div");
    col.className = "col mb-5";
    col.appendChild(categories[key].createNode());
    main_container.appendChild(col);
}

export { main_container };
