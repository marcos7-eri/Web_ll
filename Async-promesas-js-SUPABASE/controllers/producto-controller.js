import { productService } from "../service/product-service.js";

const crearNuevaFilaProducto = (nombre, precio, descripcion, id) => {
  const fila = document.createElement('tr');

  fila.innerHTML = `
    <td class="td">${nombre}</td>
    <td>${parseFloat(precio).toFixed(2)}</td>
    <td>${descripcion}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a href="../screens/editar_producto.html?id=${id}" class="simple-button simple-button--edit">
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;

  const btn = fila.querySelector("button");
  btn.addEventListener("click", () => {
    productService.eliminarProducto(id)
      .then(() => {
        fila.remove();
        alert("Producto eliminado con éxito");
      })
      .catch(error => {
        console.error(error);
        alert("Error al eliminar producto");
      });
  });

  return fila;
};

const tabla = document.querySelector("[data-tabla-productos]");

productService.listaProductos()
  .then(productos => {
    productos.sort((a, b) => a.id - b.id);
    productos.forEach(({ nombre, precio, descripcion, id }) => {
      const nuevaFila = crearNuevaFilaProducto(nombre, precio, descripcion, id);
      tabla.appendChild(nuevaFila);
    });
  })
