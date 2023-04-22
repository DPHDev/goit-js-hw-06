const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
input.addEventListener('input', setName);

function setName() {
    input.value == "" ? output.textContent = "Anónimo" : output.textContent = input.value;
};