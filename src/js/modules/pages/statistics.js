import { mainContent, statStorage, words } from '../globals';
import StatisticsTable from '../classes/stat/table';
import loadRepeat from './category';

export default function loadPage() {
  const table = new StatisticsTable();

  const containerOverflow = document.createElement('div');
  containerOverflow.className = 'overflow-auto';
  table.loadBody(statStorage.getStat(), 'category', false);
  containerOverflow.appendChild(table.node);

  mainContent.innerHTML = `<div class="mb-3">
  <button type="button" class="btn btn-light" id="repeat-words-btn">Repeat difficult words</button>
  <button type="button" class="btn btn-light" id="reset-stat-btn">Reset</button>
  </div>`;
  mainContent.append(containerOverflow);

  table.node.querySelectorAll('th').forEach((el) => el.addEventListener('click', (e) => {
    table.loadBody(statStorage.getStat(), e.currentTarget.dataset.field);
  }));

  document.getElementById('reset-stat-btn').addEventListener('click', () => {
    statStorage.clear();
    table.loadBody(statStorage.getStat(), 'category', false);
    words.length = 0;
  });

  document.getElementById('repeat-words-btn').addEventListener('click', () => {
    mainContent.innerHTML = '';
    const repeatWords = words.sort((a, b) => b - a).slice(0, 8);
    loadRepeat(repeatWords);
    words.length = 0;
  });
}
