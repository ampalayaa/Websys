document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let loginEmail = document.getElementById("login-email").value;
    let loginPassword = document.getElementById("login-password").value;
    let messageBox = document.getElementById("message-box");

    messageBox.innerHTML = ""; // Clear previous messages

    let user = users.find(user => user.email === loginEmail && user.password === loginPassword);
    
    if (user) {
        messageBox.innerHTML = "Login successful! Redirecting to dashboard...";
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        messageBox.innerHTML = "Invalid email or password. Please try again.";
    }
});
