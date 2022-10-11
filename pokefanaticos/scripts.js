const result = document.getElementById("result");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const send = document.getElementById("send");

send.addEventListener("click", function (e) {
  e.preventDefault();
  let errors = [];
  result.innerHTML = "";
  if (name.value === "" || name.value.length < 3) {
    errors.push("El nombre debe contener al menos tres caracteres");
  }
  if (email.value === "" || email.value.length < 5) {
    errors.push("El email debe contener al menos cinco caracteres");
  }
  if (subject.value === "" || subject.value.length < 10) {
    errors.push("El asunto debe contener al menos diez caracteres");
  }
  if (errors.length > 0) {
    errors.forEach((error) => {
      result.innerHTML += `❌ ${error}<br />`;
    });
  } else {
    result.innerHTML = "👩🏼‍💻 Revisando información...";
    send.innerText = "Enviando...";
    setTimeout(() => {
      result.innerHTML =
        "✔️ Su consulta ha sido enviada con éxito. Muchas gracias";
      send.innerText = "Enviar";
      name.value = "";
      email.value = "";
      subject.value = "";
    }, 2000);
  }
});
