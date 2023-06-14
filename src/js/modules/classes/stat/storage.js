export default class StatisticsStorage {
  constructor() {
    if (localStorage.getItem('stat') === null) {
      localStorage.setItem('stat', JSON.stringify({}));
    }
  }

  addClick(key) {
    const item = this.get(key);
    item.clicked += 1;
    this.set(key, item);
  }

  addGuess(key) {
    const item = this.get(key);
    item.guessed += 1;
    this.set(key, item);
  }

  addFail(key) {
    const item = this.get(key);
    item.failed += 1;
    this.set(key, item);
  }

  get(key) {
    const data = this.getStat();
    if (data[key] === undefined) {
      data[key] = {
        clicked: 0,
        guessed: 0,
        failed: 0,
      };
    }
    return data[key];
  }

  set(key, item) {
    const data = this.getStat();
    data[key] = item;
    localStorage.setItem('stat', JSON.stringify(data));
  }

  clear() {
    localStorage.setItem('stat', JSON.stringify({}));
  }

  getStat() {
    return JSON.parse(localStorage.getItem('stat'));
  }
}
