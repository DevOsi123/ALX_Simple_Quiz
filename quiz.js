document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Retrieve and trim input values
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        // Initialize validation
        let isValid = true;
        const messages = [];

        // Username validation
        if (usernameValue.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters.");
        }

        // Email validation
        if (!(emailValue.includes('@') && emailValue.includes('.'))) {
            isValid = false;
            messages.push("Invalid email address.");
        }

        // Password validation
        if (passwordValue.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters.");
        }

        // Display feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
