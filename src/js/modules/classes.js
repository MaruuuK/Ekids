class Category {
    constructor(name, id, image) {
        this.name = name;
        this.id = id;
        this.image = image;
    }

    createNode() {
        let card = document.createElement("div");
        card.className = "card";
        card.style.width = "15rem";
        card.setAttribute('data-id', `${this.id}`);
        card.innerHTML = `<img src="${this.image}" class="card-img-top" alt="${this.name}">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
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
        card.className = "card";
        card.style.width = "15rem";
        card.setAttribute('id', `${this.word}`);
        card.innerHTML = `<img src="${this.image}" class="card-img-top" alt="${this.word}">
                        <div class="card-body">
                            <h5 class="card-title">${this.word}</h5>
                        </div>`;
        return card;
    }
}

export { Category, Cards };