import refs from "/js/refs.js"; 
import createMarkup from "/js/markup-tasks.js"; 
export const savedData = localStorage.getItem(refs.key);
export function localCardsRender(data) {
    if (data) {
  refs.cardStorage = JSON.parse(data);
  for (const element of  refs.cardStorage) {
    refs.list.insertAdjacentHTML('beforeend', createMarkup(element));
  }
    }
};