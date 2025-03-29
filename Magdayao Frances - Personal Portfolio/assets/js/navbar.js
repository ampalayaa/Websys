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

