import { productService } from "../service/product-service.js";

const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  
  try {
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    
    const resultado = await productService.crearProducto(nombre, precio, descripcion);
    
    if (resultado && resultado.message) {
      alert("Producto creado con éxito");
      window.location.href = "./lista_productos.html";
    } else {
      throw new Error("No se recibió confirmación del servidor");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un error al crear el producto: " + error.message);
  }
});