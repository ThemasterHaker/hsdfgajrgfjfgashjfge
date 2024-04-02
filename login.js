// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy login process for demonstration
    // In a real application, you would send this data to a server for authentication
    // If authentication is successful, redirect user to dashboard or homepage
    // If authentication fails, display error message
    const loginMessage = document.getElementById('loginMessage');
    loginMessage.textContent = `User ${username} logged in successfully!`;
});
