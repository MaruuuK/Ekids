class Category {
    constructor(name, id, image) {
        this.name = name;
        this.id = id;
        this.image = image;
    }

    createNode() {
        let card = document.createElement("div");
        card.className = "card rounded-4 mx-auto";
        card.setAttribute('data-id', `${this.id}`);
        card.innerHTML = `<img src="${this.image}" class="card-img-top p-2 rounded-4" alt="${this.name}">
                        <div class="card-body">
                            <h5 class="card-title text-center text-uppercase">${this.name}</h5>
                        </div>`;
        return card;
    }
}

class Cards {
    constructor(word, image) {
        this.word = word;
        this.image = image;
    }

    createNode() {
        let card = document.createElement("div");
        card.className = "card rounded-4 mx-auto";
        card.setAttribute('id', `${this.word}`);
        card.innerHTML = `<img src="${this.image}" class="card-img-top p-2 rounded-4" alt="${this.word}">`;
        return card;
    }
}

export { Category, Cards };
