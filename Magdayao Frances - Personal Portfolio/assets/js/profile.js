document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
        alert("No user found!");
        return;
    }
    document.getElementById("name").value = user.username;
    document.getElementById("email").value = user.email;
});

function saveProfile() {
    let newName = document.getElementById("name").value;
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    user.username = newName;
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Profile updated!");
}
