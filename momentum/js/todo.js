const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos'

let toDos = [];

function saveToDos () {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo (event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  saveToDos();
}

function paintToDo (newTodo) {
  const liEl = document.createElement('li');
  liEl.id = newTodo.id;
  const spanEl = document.createElement('span');
  spanEl.innerText = newTodo.text;
  const buttonEl = document.createElement('button');
  buttonEl.innerText = '❌';
  buttonEl.addEventListener('click', deleteToDo);
  liEl.appendChild(spanEl);
  liEl.appendChild(buttonEl);
  toDoList.appendChild(liEl);
}

function handleToDoSubmit (event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  };
  toDos.push(newToDoObj); 
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}