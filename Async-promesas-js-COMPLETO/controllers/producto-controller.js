import { productService } from "../service/product-service.js";

const crearNuevaFilaProducto = (nombre, precio, descripcion, id) => {
  const fila = document.createElement('tr');
  
  const contenido = `
      <td class="td" data-td>${nombre}</td>
      <td>${parseFloat(precio).toFixed(2)}</td> <!-- Cambio aquí -->
      <td>${descripcion}</td>
      <td>
          <ul class="table__button-control">
              <li>
                  <a href="../screens/editar_producto.html?id=${id}" 
                     class="simple-button simple-button--edit">
                     Editar
                  </a>
              </li>
              <li>
                  <button class="simple-button simple-button--delete" 
                          type="button" id="${id}">
                          Eliminar
                  </button>
              </li>
          </ul>
      </td>
  `;
    
    fila.innerHTML = contenido;
    
    const btn = fila.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productService.eliminarProducto(id)
            .then(() => {
                fila.remove();
                alert("Producto eliminado con éxito");
            })
            .catch(error => {
                console.error(error);
                alert("Ocurrió un error al eliminar el producto");
            });
    });

    return fila;
};

const tabla = document.querySelector("[data-tabla-productos]");

productService.listaProductos()
    .then((data) => {
        data.forEach(({nombre, precio, descripcion, id}) => {
            const nuevaFila = crearNuevaFilaProducto(nombre, precio, descripcion, id);
            tabla.appendChild(nuevaFila);
        });
    })
    .catch((error) => {
        console.error(error);
        alert("Ocurrió un error al cargar los productos");
    });