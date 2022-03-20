let colors = [
  "Red",
  "Blue",
  "Green",
  "Gray",
  "Yellow",
  "Purple",
  "Black",
  "Aqua",
  "orange",
];
let body = document.querySelector("body");
let colorName = document.querySelector("span");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = `${colors[randomIndex]}`;
  colorName.textContent = `${colors[randomIndex]}`;
  colorName.style.cssText = `color: ${colors[randomIndex]}`;
  button.style.cssText = `background-color: ${colors[randomIndex]}`;
});
