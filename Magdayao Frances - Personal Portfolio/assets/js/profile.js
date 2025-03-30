document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
        alert("No user found!");
        return;
    }
    document.getElementById("name").value = user.username;
    document.getElementById("email").value = user.email;
    document.getElementById("dob").value = user.dob;
    document.getElementById("address").value = user.address || ''; // Default to empty string if address is not set
});

function saveProfile() {
    let newName = document.getElementById("name").value;
    let newDob = document.getElementById("dob").value;
    let newAddress = document.getElementById("address").value;
    let newPassword = document.getElementById("new-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    user.username = newName;
    user.dob = newDob;
    user.address = newAddress;
    
    if (newPassword) {
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        user.password = newPassword;
    }
    
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let updatedUsers = users.map(u => u.email === user.email ? user : u);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    
    alert("Profile updated!");
}
