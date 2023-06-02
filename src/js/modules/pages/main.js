import categories from '../data/categories';
import { mainContent } from '../globals';

const keys = Object.keys(categories);
keys.forEach((key) => {
  const col = document.createElement('div');
  col.className = 'col mb-5';
  col.appendChild(categories[key].createNode());
  mainContent.appendChild(col);
});
