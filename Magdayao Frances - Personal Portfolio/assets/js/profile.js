document.addEventListener("DOMContentLoaded", function() {
    // Load saved data from LocalStorage
    document.getElementById("name").value = localStorage.getItem("userName") || "";
    document.getElementById("email").value = localStorage.getItem("userEmail") || "";
});

function saveProfile() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    alert("Profile updated successfully!");
}
