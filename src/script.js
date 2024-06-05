const validateForm = () => {
  let errors = {};

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (name.value === "") {
    errors.name = "*O seu nome é obrigatório";
  }

  if (email.value === "") {
    errors.email = "*O seu email é obrigatório";
  }

  if (message.value === "" || message.length < 10) {
    errors.message = "*Sua mensagem deve ter pelo menos 10 caracteres";
  }

  if (!(errors.email || errors.name || errors.message)) {
    name.value = "";
    email.value = "";
    message.value = "";
  }

  console.log(errors);
  return errors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validateForm();

  let formState = document.getElementById("formState");
  let submitButton = document.getElementById("submitButton");

  if (Object.keys(errors).length > 0) {
    formState.classList.add("text-danger");
    formState.innerText = "Existem erros no formulário";

    submitButton.classList.add("btn-danger");
    submitButton.innerText = "X";
    setTimeout(() => {
      formState.innerHTML = "";
      formState.classList.remove("text-danger");
      submitButton.classList.remove("btn-danger");
      submitButton.innerText = "Enviar";
    }, 3000);
  } else {
    formState.classList.add("text-success");
    formState.innerText = "Formulário enviado com sucesso!";

    submitButton.classList.add("btn-success");
    submitButton.innerText = "✔";

    setTimeout(() => {
      formState.innerHTML = "";
      formState.classList.remove("text-success");

      submitButton.classList.remove("btn-success");
      submitButton.innerText = "Enviar";
    }, 3000);
  }

  document.getElementById("nameError").innerText = errors.name || "";
  document.getElementById("emailError").innerText = errors.email || "";
  document.getElementById("messageError").innerText = errors.message || "";
};
