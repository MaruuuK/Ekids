import cards from "./cards";

let main_container = document.getElementById('category');

for (let key in cards) {
    let col = document.createElement("div");
    col.className = "col mb-5";
    col.appendChild(cards[key].createNode());
    main_container.appendChild(col);
}

export { main_container };
