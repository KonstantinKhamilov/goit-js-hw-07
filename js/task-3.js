const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
  let inputText = event.currentTarget.value.trim();
  output.textContent = inputText ? inputText : "Anonymous";
});
