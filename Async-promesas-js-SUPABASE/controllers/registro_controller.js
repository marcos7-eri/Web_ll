import { clientService } from "../service/client-service.js";

const form = document.querySelector("[data-form]");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;

  clientService.crearCliente(nombre, email)
    .then(() => window.location.href = "lista_cliente.html")
    .catch((error) => alert("Error al registrar cliente"));
});
