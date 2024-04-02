// registration.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Dummy registration process for demonstration
    // In a real application, you would send this data to a server for processing
    const user = {
        username: username,
        email: email,
        password: password
    };

    // Dummy message for demonstration
    const registrationMessage = document.getElementById('registrationMessage');
    registrationMessage.textContent = `User ${user.username} registered successfully!`;
});
