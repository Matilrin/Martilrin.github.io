const loginContainer = document.querySelector('.login-container');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const USERNAME_KEY = 'username';
const HIDDEN_CLASSNAME = 'hidden';

function handleSubmit (event) {
  event.preventDefault();
  loginContainer.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginContainer.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', handleSubmit);
} else {
  paintGreeting(savedUsername);
  loginContainer.classList.add(HIDDEN_CLASSNAME);
}