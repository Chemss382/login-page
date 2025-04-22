const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnPopup= document.querySelector('.btnLogin-popup')
const iconClose= document.querySelector('.icon-close')
const registerForm = document.querySelector('.form-box.register form');
const loginForm = document.querySelector('.form-box.login form');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});

registerForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload
  const username = document.getElementById('registerUsername').value;
  localStorage.setItem('userName', username); // Save username
  window.location.href = 'welcome.html'; // Redirect
});

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const username = email.split('@')[0]; // Just for display
  localStorage.setItem('userName', username);
  window.location.href = 'welcome.html';
});