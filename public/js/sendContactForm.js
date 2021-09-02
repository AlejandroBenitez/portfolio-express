const form = document.getElementById("contactForm"); // Obtenemos la referencia al formulario
const db = firebase.firestore();

if (form) {
  form.addEventListener("submit", contactForm);
}

function contactForm(event) {
  event.preventDefault();
  const nombre = document.getElementById("nameForm");
  const email = document.getElementById("emailForm");
  const phone = document.getElementById("phoneForm");
  const text = document.getElementById("textForm") || null;

  const data = {
    name: nombre.value,
    email: email.value,
    phone: phone.value,
    text: text.value,
  };
  saveContactForm(data);
}

function saveContactForm(data) {
  db.collection("contactos")
    .add(data)
    .then(() => {
      alert("The message was sent correctly");
      form.reset();
    })
    .catch((error) => {
      alert("The message was not sent correctly");
      console.error("Error: ", error);
    });
}
