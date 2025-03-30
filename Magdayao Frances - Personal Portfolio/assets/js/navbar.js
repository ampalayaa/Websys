document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const navbar = document.querySelector(".navbar");

  menuBtn.addEventListener("click", function() {
    navbar.classList.add("active");
  });

  cancelBtn.addEventListener("click", function() {
    navbar.classList.remove("active");
  });
});

function logoutUser(event) {
  event.preventDefault(); // Stop the default link behavior

  // Clear login status
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");

  alert("Logged out successfully!");
  window.location.href = "../../index.html"; // Redirect after logout
}
