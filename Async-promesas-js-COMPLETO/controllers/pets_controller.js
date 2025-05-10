import { petService } from "../service/pets-service.js";

const form = document.querySelector("[data-formulario]");
const nombre = document.querySelector("[data-nombre]");
const especie = document.querySelector("[data-especie]");
const edad = document.querySelector("[data-edad]");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const resultado = await petService.crearPet(
      nombre.value.trim(),
      especie.value.trim(),
      parseInt(edad.value)
    );
    
    console.log('Mascota creada:', resultado); // Depuración
    
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