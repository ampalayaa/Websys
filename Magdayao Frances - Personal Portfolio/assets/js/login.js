document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let storedUser = JSON.parse(localStorage.getItem("user"));
    let loginEmail = document.getElementById("login-email").value;
    let loginPassword = document.getElementById("login-password").value;
    let messageBox = document.getElementById("message-box");

    messageBox.innerHTML = ""; // Clear previous messages

    if (!storedUser) {
        messageBox.innerHTML = "No registered user found. Please sign up first.";
        return;
    }

    if (loginEmail === storedUser.email && loginPassword === storedUser.password) {
        messageBox.innerHTML = "Login successful! Redirecting to dashboard...";
        localStorage.setItem("loggedIn", "true");
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000); // Redirect after 2 seconds
    } else {
        messageBox.innerHTML = "Invalid email or password. Please try again.";
    }
});
