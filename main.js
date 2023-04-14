// Get elements
const emailEl = document.querySelector(".input__email");
const formEl = document.querySelector(".input__container");
const errorTextEl = document.querySelector(".error");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  // Email validation
  const value = emailEl.value.trim();
  const valid = validateEmail(value);

  if (valid) {
    emailEl.value = "";
    emailEl.classList.remove("invalid");
    errorTextEl.classList.add("hidden");
  } else {
    let msg = "";
    emailEl.classList.add("invalid");
    errorTextEl.classList.remove("hidden");
    value == ""
      ? (msg = "Whoops! It looks like you forgot to add your email")
      : (msg = "Please provide a valid email address");
    errorTextEl.textContent = msg;
    emailEl.value = value;
  }
});

function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return input.match(validRegex) && input != "";
}
