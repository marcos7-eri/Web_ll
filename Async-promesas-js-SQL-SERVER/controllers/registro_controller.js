import { clientService } from "../service/client-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;

  try {
    await clientService.crearCliente(nombre, email);
    window.location.href = "lista_cliente.html";
  } catch (error) {
    alert("Error al registrar cliente");
    console.error(error);
  }
});
