function togglePassword() {
  let password = document.getElementById("password");
  let eye = document.getElementById("toggle-eye-login");

  if (password.type === "password") {
    password.type = "text";
    eye.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    eye.classList.remove("fa-eye-slash");
  }
}
