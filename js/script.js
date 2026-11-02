const helloButton = document.querySelector("#hello-button");
const helloMessage = document.querySelector("#hello-message");

helloButton.addEventListener("click", () => {
  helloMessage.textContent = "Hello! Thanks for visiting my Day 01 project.";
});
