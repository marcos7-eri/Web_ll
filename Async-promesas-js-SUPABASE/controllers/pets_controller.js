import { petService } from "../service/pets-service.js";
import { clientService } from "../service/client-service.js";

const form = document.querySelector("[data-formulario]");
const nombre = document.querySelector("[data-nombre]");
const especie = document.querySelector("[data-especie]");
const edad = document.querySelector("[data-edad]");
const sexo = document.querySelector("[data-sexo]");
const duenioSelect = document.querySelector("[data-duenio]");

clientService.listaclientes()
  .then(clientes => {
    clientes.forEach(cliente => {
      const option = document.createElement("option");
      option.value = cliente.id;
      option.textContent = cliente.nombre;
      duenioSelect.appendChild(option);
    });
  })
  .catch(error => {
    console.error("Error al cargar dueños:", error);
    alert("No se pudo cargar la lista de dueños.");
  });
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    if (!duenioSelect.value) {
      alert("Debes seleccionar un dueño");
      return;
    }

    const resultado = await petService.crearPet(
      nombre.value.trim(),
      especie.value.trim(),
      parseInt(edad.value),
      sexo.value,
      duenioSelect.value
    );

    if (resultado && resultado.success) {
      form.reset();
      window.location.href = "./lista_pets.html";
    } else {
      alert(resultado.message || 'Error al registrar mascota');
    }
  } catch (error) {
    alert(error.message);
    console.error('Error detallado:', error);
  }
});
