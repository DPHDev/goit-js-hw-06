const value = document.getElementById("value");
const btnIncrement = document.querySelector('[data-action = "increment"]');
const btnDecrement = document.querySelector('[data-action = "decrement"]');
let count = 0;

btnIncrement.addEventListener("click", suma);
btnDecrement.addEventListener("click", resta);

function suma() {
  count++;
  value.textContent = count;    
}

function resta() {
  count--;
  value.textContent = count;
}

