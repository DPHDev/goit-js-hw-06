function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", setColor);

function setColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}
