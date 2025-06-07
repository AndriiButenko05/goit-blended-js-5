import refs from "/js/refs.js"; 
function deleteCard(event) {
    if (!event.target.classList.contains('task-list-item-btn')) {
      return;
    }
    const li = event.target.closest('li');
    const idToRemove = li.dataset.id;
    li.remove();
    const index = refs.cardStorage.findIndex(task => task.id === idToRemove);
    if (index > -1) {
      refs.cardStorage.splice(index, 1);
      localStorage.setItem(refs.key, JSON.stringify(refs.cardStorage));
    }
}
export default deleteCard;