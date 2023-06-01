import { sidebarMenu } from "../globals";

export class Category {
    constructor(name, id, image, cards) {
        this.name = name;
        this.id = id;
        this.image = image;
        this.cards = cards;
    }

    createNode() {
        let node = document.createElement("div");
        node.className = "card rounded-4 mx-auto";
        node.innerHTML = `<img src="${this.image}" class="card-img-top p-2 rounded-4" alt="${this.name}">
                        <div class="card-body">
                            <h5 class="card-title text-center text-uppercase">${this.name}</h5>
                        </div>`;
        const id = this.id;
        node.addEventListener('click', function () {
            sidebarMenu.querySelector(`.nav-link[data-id="${id}"]`).click();
        });
        return node;
    }
}
