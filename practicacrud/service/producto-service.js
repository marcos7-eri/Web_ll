// service/producto-service.js
const url = "http://localhost:3000/productos";

const obtenerTodos = async () => {
  const respuesta = await fetch(url);
  return await respuesta.json();
};

const crear = async (nombre, descripcion, precio) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, descripcion, precio: parseFloat(precio) }),
  });
};

const eliminar = async (id) => {
  return fetch(`${url}/${id}`, {
    method: "DELETE",
  });
};

export const productoService = {
  obtenerTodos,
  crear,
  eliminar
};