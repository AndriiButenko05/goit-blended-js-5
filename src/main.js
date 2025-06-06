// Оголошення Змінних
const form = document.querySelector('.header-form');
const taskName = document.querySelector('[name="taskName"]');
const taskDescription = document.querySelector('[name="taskDescription"]');
const list = document.querySelector('#task-list');
const changeThemeBtn = document.querySelector('.theme-toggle-button');
const theme = localStorage.getItem('theme');
let cardId;
if (theme) {
  document.body.classList = theme;
}
const key = 'card';
let cardStorage = [];
const savedData = localStorage.getItem(key);
if (savedData) {
  cardStorage = JSON.parse(savedData);
  for (const element of cardStorage) {
    list.insertAdjacentHTML('beforeend', createMarkup(element));
  }
}

// Відправка форми
form.addEventListener('submit', event => {
  event.preventDefault();
  const task = {
    id: Date.now().toString(),
    name: taskName.value.trim(),
    description: taskDescription.value.trim(),
  };
  list.insertAdjacentHTML('beforeend', createMarkup(task));
  cardStorage.push(task);
  localStorage.setItem(key, JSON.stringify(cardStorage));
  form.reset();
});

// Створення Розмітки
function createMarkup(task) {
  return ` <li class="task-list-item" data-id="${task.id}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${task.name}</h3>
      <p>${task.description}</p>
  </li>`;
}

// Видалення Карток
list.addEventListener('click', deleteCard);
function deleteCard(event) {
  if (!event.target.classList.contains('task-list-item-btn')) {
    return;
  }
  const li = event.target.closest('li');
  const idToRemove = li.dataset.id;
  console.log(idToRemove);

  li.remove();
  const index = cardStorage.findIndex(task => task.id === idToRemove);
  if (index > -1) {
    cardStorage.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(cardStorage));
  }
}

// Змінна Теми
changeThemeBtn.addEventListener('click', () => {
  if (document.body.classList.contains('theme-dark')) {
    document.body.classList.replace('theme-dark', 'theme-light');
    localStorage.setItem('theme', 'theme-light');
  } else {
    document.body.classList.replace('theme-light', 'theme-dark');
    localStorage.setItem('theme', 'theme-dark');
  }
});
