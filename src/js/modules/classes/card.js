export default class Card {
  constructor(id, word, image, translation, audio) {
    this.id = id;
    this.word = word;
    this.image = image;
    this.translation = translation;
    this.audio = audio;
  }

  createNode() {
    const node = document.createElement('div');
    node.className = 'card rounded-4 mx-auto card-tile';
    node.setAttribute('data-id', this.id);
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

  createNodeForGame() {
    const node = document.createElement('div');
    node.className = 'card rounded-4 mx-auto';
    node.setAttribute('data-id', this.id);
    node.innerHTML = `<img src="${this.image}" class="card-img-top p-2 rounded-4" alt="${this.word}">`;
    return node;
  }

  async playAudio() {
    await (new Audio(this.audio)).play();
  }

  getNode() {
    return document.querySelector(`[data-id=${this.id}]`);
  }
}
