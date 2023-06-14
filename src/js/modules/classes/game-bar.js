import { Modal } from 'bootstrap';

const winNode = document.createElement('i');
winNode.className = 'fa-solid fa-star fa-2xl';
const missNode = document.createElement('i');
missNode.className = 'fa-regular fa-star fa-2xl';

export default class GameBar {
  constructor() {
    this.node = document.getElementById('game-bar');
    this.startBtn = document.getElementById('start-game-btn');
    this.winBlock = this.node.querySelector('.win');
    this.missBlock = this.node.querySelector('.miss');
    this.card = undefined;
    this.scoreModalNode = document.getElementById('score-modal');
    this.scoreModal = new Modal(this.scoreModalNode);
    this.wrongScore = this.scoreModalNode.querySelector('.wrong-score');
    this.wrongAnswers = {};
  }

  activate() {
    this.node.classList.add('active');
  }

  deactivate() {
    this.node.classList.remove('active');
  }

  playCard(card) {
    this.node.classList.add('repeat');
    this.card = card;
    this.card.getNode().classList.add('playing');
    setTimeout(() => {
      this.card.playAudio();
    }, 1000);
  }

  async plusScore() {
    this.winBlock.appendChild(winNode);
    await (new Audio('../assets/play/audio/plus.mp3')).play();
  }

  async minusScore(card) {
    if (this.wrongAnswers[card.word] === undefined) {
      this.wrongAnswers[card.word] = 0;
    }
    this.wrongAnswers[card.word] += 1;
    this.missBlock.appendChild(missNode);
    await (new Audio('../assets/play/audio/minus.mp3')).play();
  }

  async endGame() {
    this.scoreModal.show();
    if (Object.keys(this.wrongAnswers).length > 0) {
      this.wrongScore.innerHTML = '';
      const keys = Object.keys(this.wrongAnswers);
      keys.forEach((key) => {
        const li = document.createElement('li');
        li.innerHTML = `${key}: ${this.wrongAnswers[key]}`;
        this.wrongScore.appendChild(li);
      });
      await (new Audio('../assets/play/audio/fail.mp3')).play();
      this.scoreModalNode.classList.remove('won');
    } else {
      await (new Audio('../assets/play/audio/win.mp3')).play();
      this.scoreModalNode.classList.add('won');
    }

    this.resetGame();

    setTimeout(() => {
      window.location.href = '/';
    }, 5000);
  }

  resetGame() {
    this.node.classList.remove('repeat');
    this.card = undefined;
    this.wrongAnswers = {};
    this.winBlock.innerHTML = '';
    this.missBlock.innerHTML = '';
  }
}
