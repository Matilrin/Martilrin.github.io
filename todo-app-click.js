const toDoAppButton = document.querySelector('.todo-app-button');
const toDoContainer = document.querySelector('.todo-container');

function handleButtonClick () {
  // style을 바꿔야 돼. todo-container 안에 스타일을 visible로
  toDoContainer.style.visibility = 'visible';
}

toDoAppButton.addEventListener('dblclick', handleButtonClick);