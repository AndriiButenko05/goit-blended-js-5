import refs from "/js/refs.js"; 
import createMarkup from "/js/markup-tasks.js"; 
function createCard (event){
    event.preventDefault();
    if (!refs.taskName.value.trim() || !refs.taskDescription.value.trim()) {
      alert("Please fill in inputs")
      return;
    }
    const task = {
      id: Date.now().toString(),
      name: refs.taskName.value.trim(),
      description: refs.taskDescription.value.trim(),
    };
    refs.list.insertAdjacentHTML('beforeend', createMarkup(task));
    refs.cardStorage.push(task);
    localStorage.setItem(refs.key, JSON.stringify(refs.cardStorage));
    refs.form.reset();
}
export default createCard;