const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const registerForm = document.querySelector('.form-box.register form');
const loginForm = document.querySelector('.form-box.login form');

// Toggle between login and register forms
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Show popup when login button is clicked
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    // Reset to login form when opening popup
    wrapper.classList.remove('active');
});

// Close popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Register form submission
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    
    // Basic validation
    if (!username || !email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Password validation (at least 6 characters)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Store user data (in a real app, you would hash the password)
    localStorage.setItem('userName', username);
    localStorage.setItem('userEmail', email);
    
    // Redirect to welcome page
    window.location.href = 'welcome.html';
});

// Login form submission
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const emailOrUsername = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  
  // Basic validation
  if (!emailOrUsername || !password) {
      alert('Please fill in all fields');
      return;
  }
  
  // Accept either "Chems" or "Chems@gmail.com"
  const isUsernameValid = emailOrUsername.toLowerCase() === 'chems' || 
                        emailOrUsername.toLowerCase() === 'chems@gmail.com';
  
  if (isUsernameValid && password === 'chems321') {
      localStorage.setItem('userName', 'Chems');
      window.location.href = 'welcome.html';
  } else {
      alert('Invalid username/email or password');
  }
});

// Helper function to validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
