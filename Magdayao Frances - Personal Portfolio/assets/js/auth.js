// auth.js - User Registration

// Register a new user
function registerUser(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector("input[name='gender']:checked").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.email === email)) {
        alert("Email already registered!");
        return;
    }
    
    let newUser = { username, email, password, dob, gender };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    alert("Registration successful! Redirecting to login...");
    window.location.href = "login.html";
}

document.getElementById("register-form").addEventListener("submit", registerUser);
