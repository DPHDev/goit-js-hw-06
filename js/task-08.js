const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.elements.email.value && form.elements.password.value) {
    console.log(
      "Email: " +
        form.elements.email.value +
        "\nPassword: " +
        form.elements.password.value
    );
    form.reset();
  } else {
    alert("Por favor llena todos los campos!");
  }
});
