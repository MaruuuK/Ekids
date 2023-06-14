import categories from '../data/categories';
import { mainContent } from '../globals';

const row = document.createElement('div');
row.className = 'row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 mt-3';
mainContent.appendChild(row);

const keys = Object.keys(categories);
keys.forEach((key) => {
  const col = document.createElement('div');
  col.className = 'col mb-5';
  col.appendChild(categories[key].createNode());
  row.appendChild(col);
});
