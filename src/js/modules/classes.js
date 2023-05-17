class Category {
    constructor(name, id, image, cards) {
        this.name = name;
        this.id = id;
        this.image = image;
        this.cards = cards;
    }

    createNode() {
        let card = document.createElement("div");
        card.className = "card rounded-4 mx-auto category";
        card.setAttribute('data-id', `${this.id}`);
        card.innerHTML = `<img src="${this.image}" class="card-img-top p-2 rounded-4" alt="${this.name}">
                        <div class="card-body">
                            <h5 class="card-title text-center text-uppercase">${this.name}</h5>
                        </div>`;
        return card;
    }
}

class Card {
    constructor(word, image, translation, audio) {
        this.word = word;
        this.image = image;
        this.translation = translation;
        this.audio = audio;
    }

    createNode() {
        let card = document.createElement("div");
        card.className = "card rounded-4 mx-auto";
        card.setAttribute('data-id', `${this.word}`);
        card.innerHTML = `<img src="${this.image}" class="card-img-top p-2 rounded-4" alt="${this.word}">
                        <div class="card-body">
                            <div class="sound">
                                <i class="fa-solid fa-music fa-xl" style="color: #ffffff;"></i>
                            </div>
                            <h5 class="card-title text-center text-uppercase">${this.word}</h5>
                            <div class="rotate">
                            <i class="fa-solid fa-rotate fa-xl" style="color: #ffffff;"></i>
                            </div>
                        </div>`;
        return card;
    }
}

export { Category, Card };
