import { sidebarMenu } from "./globals";

class Category {
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

class Card {
    constructor(word, image, translation, audio) {
        this.word = word;
        this.image = image;
        this.translation = translation;
        this.audio = audio;
    }

    createNode(id) {
        let node = document.createElement("div");
        node.className = "card rounded-4 mx-auto card-tile";
        node.setAttribute('data-id', id);
        node.innerHTML = `<div class="front">
                             <img src="${this.image}" class="card-img-top p-2 rounded-4" alt="${this.word}">
                             <div class="card-body">
                               <div class="sound">
                                 <i class="fa-solid fa-music fa-xl" style="color: #ffffff;"></i>
                               </div>
                               <h5 class="card-title text-center text-uppercase">${this.word}</h5>
                               <div class="rotate">
                                 <i class="fa-solid fa-rotate fa-xl" style="color: #ffffff;"></i>
                               </div>
                             </div>
                          </div>
                          <div class="back card-body">
                               <h5 class="card-title text-center text-uppercase">${this.translation}</h5>
                          </div>`;
        return node;
    }

    createNodeForGame(id) {
        let node = document.createElement("div");
        node.className = "card rounded-4 mx-auto w-100";
        node.setAttribute('data-id', id);
        node.innerHTML = `<img src="${this.image}" class="card-img-top p-2 rounded-4" alt="${this.word}">`;
        return node;
    }

    playAudio() {
        (new Audio(this.audio)).play();
    }
}

export { Category, Card };
