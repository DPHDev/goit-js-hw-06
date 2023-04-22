const input = document.getElementById("validation-input");
input.addEventListener('input', validate);

function validate() {
    input.value.length >= 6 ? input.className = "valid" : input.className = "invalid";
};