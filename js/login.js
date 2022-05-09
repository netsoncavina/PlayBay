function togglePassword(passwordID, eyeID) {
  let password = document.getElementById(passwordID);
  let eye = document.getElementById(eyeID);

  if (password.type === "password") {
    password.type = "text";
    eye.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    eye.classList.remove("fa-eye-slash");
  }
}
