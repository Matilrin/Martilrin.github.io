const loginContainer = document.querySelector('.login-container');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const USERNAME_KEY = 'username';
const HIDDEN_CLASSNAME = 'hidden';

function handleSubmit (event) {
  event.preventDefault();
  loginContainer.style.display = 'none';
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
  loginContainer.style.display = 'flex';
  loginForm.addEventListener('submit', handleSubmit);
} else {
  paintGreeting(savedUsername);
  loginContainer.style.display = 'none';
}