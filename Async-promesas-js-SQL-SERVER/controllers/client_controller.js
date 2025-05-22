import { clientService } from "../service/client-service.js";

const crear_nueva_fila = (nombre, email, id) => {
  const fila = document.createElement('tr');
  const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a href="../screens/editar_cliente.html?id=${id}" class="simple-button simple-button--edit">Editar</a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">Eliminar</button>
        </li>
      </ul>
    </td>
  `;
  fila.innerHTML = contenido;

  const btn = fila.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    clientService.eliminarCliente(id)
      .then(() => {
        alert("Cliente eliminado");
        fila.remove(); // elimina la fila visualmente
      })
      .catch(error => alert("Error al eliminar cliente"));
  });

  return fila;
};

const table = document.querySelector("[data-table]");
clientService.listaclientes()
  .then(data => {
    data.forEach(({ nombre, email, id }) => {
      const nuevaLinea = crear_nueva_fila(nombre, email, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch(error => alert("Ocurrió un error al cargar los clientes"));
const filtroInput = document.querySelector("#buscarCliente");

filtroInput.addEventListener("input", () => {
  const termino = filtroInput.value.toLowerCase();

  clientService.listaclientes()
    .then(data => {
      table.innerHTML = ""; // limpiar tabla
      const filtrados = data.filter(cliente =>
        cliente.nombre.toLowerCase().includes(termino)
      );

      filtrados.forEach(({ nombre, email, id }) => {
        const nuevaLinea = crear_nueva_fila(nombre, email, id);
        table.appendChild(nuevaLinea);
      });
    })
    .catch(error => alert("Error al filtrar clientes"));
});