const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const mail = form.elements.email.value;
  const password = form.elements.password.value;

  if (mail === "" || password === "") {
    return alert(`All form fields must be filled in`);
  } else {
    console.log(`Email: ${mail}, Password: ${password}`);
  }
  form.reset();
}
