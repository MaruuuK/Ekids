import { cards } from '../../data/cards';
import categories from '../../data/categories';
import { words } from '../../globals';

export default class StatisticsTable {
  constructor() {
    this.node = document.createElement('table');
    this.node.id = 'statistics-table';
    this.node.className = 'table';
    this.node.innerHTML = `<thead>
    <tr>
      <th scope="col" class="sort" data-field="category">Category <i class="fa-solid fa-chevron-down"></i></th>
      <th scope="col" data-field="word">Word <i class="fa-solid fa-chevron-down"></i></th>
      <th scope="col" data-field="translation">Translation <i class="fa-solid fa-chevron-down"></i></th>
      <th scope="col" data-field="clicked"><i class="fa-solid fa-dumbbell fa-xl" style="color: #ffb84c;"></i></i> <i class="fa-solid fa-chevron-down"></i></th>
      <th scope="col" data-field="guessed"><i class="fa-solid fa-gamepad fa-xl" style="color: #ffb84c;"></i><i class="fa-solid fa-chevron-down"></i></th>
      <th scope="col" data-field="failed"><i class="fa-solid fa-circle-xmark fa-xl" style="color: #df1616;"></i><i class="fa-solid fa-chevron-down"></i></th>
      <th scope="col" data-field="percent"><i class="fa-solid fa-percent fa-xl" style="color: #ffb84c;"></i><i class="fa-solid fa-chevron-down"></i></th>
    </tr>
  </thead>`;
    this.body = document.createElement('tbody');
    this.node.appendChild(this.body);
  }

  loadBody(stat, sortField, desc) {
    const descOrder = this.sortHead(sortField, desc);

    this.body.innerHTML = '';

    this.collectRows(stat, sortField, descOrder).forEach((dataRow) => {
      const row = document.createElement('tr');

      row.innerHTML = `<td>${dataRow.category}</td>
      <td>${dataRow.word}</td>
      <td>${dataRow.translation}</td>
      <td>${dataRow.clicked}</td>
      <td>${dataRow.guessed}</td>
      <td>${dataRow.failed}</td>
      <td>${dataRow.percent}</td>`;

      this.body.appendChild(row);
    });
  }

  sortHead(sortField, desc) {
    let descOrder;

    const sortCol = this.node.querySelector(`th[data-field=${sortField}]`);
    if (sortCol.classList.contains('sort')) {
      if (desc === undefined) {
        descOrder = !sortCol.classList.contains('sort-desc');
      } else {
        descOrder = desc;
      }
      sortCol.classList.toggle('sort-desc', descOrder);
    } else {
      this.node.querySelectorAll('th').forEach((el2) => {
        el2.classList.remove('sort');
        el2.classList.remove('sort-desc');
      });
      sortCol.classList.add('sort');
    }

    return descOrder;
  }

  collectRows(stat, sortField, sortDesc) {
    const rows = [];

    Object.keys(categories).forEach((catId) => {
      const category = categories[catId];
      category.cards.forEach((cardId) => {
        const card = cards[cardId];
        const row = {
          category: category.name,
          word: card.word,
          translation: card.translation,
        };

        row.clicked = 0;
        row.guessed = 0;
        row.failed = 0;
        const wordStat = stat[cardId];
        if (wordStat !== undefined) {
          row.clicked = wordStat.clicked;
          row.guessed = wordStat.guessed;
          row.failed = wordStat.failed;
        }

        row.percent = row.guessed + row.failed > 0
          ? Math.round((row.guessed / (row.guessed + row.failed)) * 10000) / 100
          : 0;
        const { failed } = row;
        if (failed > 0) {
          words.push(cardId);
        }
        rows.push(row);
      });
    });

    rows.sort((a, b) => {
      if (a[sortField] > b[sortField]) {
        return sortDesc ? -1 : 1;
      }
      if (b[sortField] > a[sortField]) {
        return sortDesc ? 1 : -1;
      }
      return 0;
    });

    return rows;
  }
}
