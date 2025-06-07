import refs from "./js/refs.js"; 
import { changeTheme,checkThemeLocal } from "./js/theme-switcher.js"; 
import deleteCard from "./js/render-tasks.js"; 
import createCard from "./js/local-storage-api.js"; 
import {savedData,localCardsRender} from"./js/tasks.js"

// Перевірка теми в стореджі
checkThemeLocal(refs.theme)

// Відмалювання карток зі стореджу
localCardsRender(savedData);

// Відправка форми
refs.form.addEventListener('submit',createCard);

// Видалення Карток
refs.list.addEventListener('click', deleteCard);

// Змінна Теми
refs.changeThemeBtn.addEventListener('click', changeTheme);
