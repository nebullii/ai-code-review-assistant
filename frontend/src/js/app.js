// Simple Firebase config in frontend/src/js/app.js
const firebaseConfig = {
  // Your actual config values here
};

// Basic auth functions
function login() {
    console.log("Login clicked");
    // TODO: Add Firebase auth later
}

function register() {
    console.log("Register clicked"); 
    // TODO: Add Firebase auth later
}

function logout() {
    console.log("Logout clicked");
    // TODO: Add Firebase auth later
}

// Make functions global for HTML onclick
window.login = login;
window.register = register; 
window.logout = logout;