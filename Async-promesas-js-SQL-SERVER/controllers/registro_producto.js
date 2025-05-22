import { productService } from "../service/product-service.js";

const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  try {
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    await productService.crearProducto(nombre, precio, descripcion);
    alert("Producto creado con éxito");
    window.location.href = "./lista_productos.html";
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un error al crear el producto: " + error.message);
  }
});
