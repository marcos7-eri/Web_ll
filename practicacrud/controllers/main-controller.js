// controllers/main-controller.js
import { productoService } from "../service/producto-service.js";

const formulario = document.querySelector("[data-form]");
const nombre = document.querySelector("[data-nombre]");
const descripcion = document.querySelector("[data-descripcion]");
const precio = document.querySelector("[data-precio]");
const contenedor = document.querySelector("[data-productos]");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  await productoService.crear(nombre.value, descripcion.value, precio.value);
  formulario.reset();
  mostrarProductos();
});

async function mostrarProductos() {
  const productos = await productoService.obtenerTodos();
  contenedor.innerHTML = "";

  productos.forEach((prod) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <h3>${prod.nombre}</h3>
      <p>${prod.descripcion}</p>
      <p><strong>$${prod.precio}</strong></p>
      <button data-id="${prod.id}">Eliminar</button>
    `;

    div.querySelector("button").addEventListener("click", async () => {
      await productoService.eliminar(prod.id);
      mostrarProductos();
    });

    contenedor.appendChild(div);
  });
}

mostrarProductos();