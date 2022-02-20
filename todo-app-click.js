const toDoAppButton = document.querySelector('.todo-app-button');
const toDoContainer = document.querySelector('.todo-container');
const toDoAppCloseButton = document.querySelector('.todo-close-button');

function handleButtonClick() {
  toDoContainer.style.display = 'block';
}

function handleCloseButtonClick() {
  toDoContainer.style.display = 'none';
}


toDoAppButton.addEventListener('dblclick', handleButtonClick);
toDoAppCloseButton.addEventListener('click', handleCloseButtonClick);
