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

function strongPasswordValidate(password) {
  let strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return strongRegex.test(password);
}

function testPassword(passwordID) {
  let password = document.getElementById(passwordID).value;
  let strongPassword = strongPasswordValidate(password);
  let passwordError = document.getElementById(`${passwordID}-error`);
  if (strongPassword) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }
}
