document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
        alert("No user found!");
        return;
    }

    document.getElementById("name").textContent = user.username;
    document.getElementById("email").textContent = user.email;
    document.getElementById("dob").textContent = user.dob;
    document.getElementById("address").textContent = user.address || '';
    document.getElementById("name-input").value = user.username;
    document.getElementById("address-input").value = user.address || '';
    document.getElementById("dob-input").value = user.dob;

    if (!user.avatar) {
        user.avatar = user.gender === "male"
            ? "https://bootdey.com/img/Content/avatar/avatar1.png"
            : "https://bootdey.com/img/Content/avatar/avatar2.png";
        localStorage.setItem("loggedInUser", JSON.stringify(user));
    }
    document.getElementById("avatar").src = user.avatar;

    // Highlight selected avatar
    document.querySelectorAll(".avatar-option").forEach(img => {
        if (img.src === user.avatar) {
            img.classList.add("selected");
        }
    });
});

function updateProfilePreview() {
    document.getElementById("name").textContent = document.getElementById("name-input").value;
    document.getElementById("address").textContent = document.getElementById("address-input").value;
    document.getElementById("dob").textContent = document.getElementById("dob-input").value;
}

function selectAvatar(img) {
    document.querySelectorAll(".avatar-option").forEach(el => el.classList.remove("selected"));

    img.classList.add("selected");
    document.getElementById("avatar").src = img.src;

    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    user.avatar = img.src;
    localStorage.setItem("loggedInUser", JSON.stringify(user));
}

function saveProfile() {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    let oldPassword = document.getElementById("old-password").value;
    let newPassword = document.getElementById("new-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;


    if (oldPassword !== user.password) {
        alert("Old password is incorrect!");
        return;
    }
    if (newPassword && newPassword === confirmPassword) {
        user.password = newPassword;
    } else {
        alert("New passwords do not match!");
        return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Profile updated successfully!");
}
document.addEventListener("DOMContentLoaded", function () {
    const quizzes = ["database", "html", "javascript"];

    quizzes.forEach(quiz => {
        let progress = localStorage.getItem(quiz + "_progress");

        if (progress !== null) {
            let progressBar = document.getElementById(`${quiz}-progress`);
            if (progressBar) {
                progressBar.style.width = progress + "%";
                progressBar.setAttribute("aria-valuenow", progress);
                progressBar.innerText = progress + "%";
            }
        }
    });
});