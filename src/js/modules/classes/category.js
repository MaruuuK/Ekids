import { sidebarMenu } from '../globals';

export default class Category {
  constructor(name, id, image, cards) {
    this.name = name;
    this.id = id;
    this.image = image;
    this.cards = cards;
  }

  createNode() {
    const node = document.createElement('div');
    node.className = 'card rounded-4 mx-auto';
    node.innerHTML = `<img src="${this.image}" class="card-img-top p-2 rounded-4" alt="${this.name}">
                        <div class="card-body">
                            <h5 class="card-title text-center text-uppercase">${this.name}</h5>
                        </div>`;
    node.addEventListener('click', () => {
      sidebarMenu.querySelector(`.nav-link[data-id="${this.id}"]`).click();
    });
    return node;
  }
}
