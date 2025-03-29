document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  let termsChecked = document.getElementById("terms-and-condition").checked;
  let messageBox = document.getElementById("message-box");

  messageBox.innerHTML = ""; // Clear previous messages

  if (password !== confirmPassword) {
      messageBox.innerHTML = "Passwords do not match!";
      return;
  }

  if (!termsChecked) {
      messageBox.innerHTML = "You must agree to the terms and conditions.";
      return;
  }

  let user = { email, password };
  localStorage.setItem("user", JSON.stringify(user));
  messageBox.innerHTML = "Registration successful! Redirecting to login page...";
  setTimeout(() => {
    window.location.href = "../../login.html"; // Ensure this path is correct
  }, 1000); // Redirect after 1 second
});
