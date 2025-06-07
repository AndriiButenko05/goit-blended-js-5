 const refs = {
    form : document.querySelector('.header-form'),
    taskName : document.querySelector('[name="taskName"]'),
    taskDescription : document.querySelector('[name="taskDescription"]'),
    list : document.querySelector('#task-list'),
    changeThemeBtn : document.querySelector('.theme-toggle-button'),
    theme : localStorage.getItem('theme'),
    cardId: 0,
    key : "card",
    cardStorage :[],
  };
export default refs;