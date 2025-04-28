const url = "http://localhost:3000/productos";

const fetchJSON = async (endpoint = "", options = {}) => {
  const res = await fetch(`${url}${endpoint}`, options);
  if (!res.ok) throw new Error("Error en la operación");
  return res.json?.() ?? null;
};

export const productService = {
  listaProductos: () => fetchJSON(),
  crearProducto: (nombre, precio, descripcion) =>
    fetchJSON("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, precio: parseFloat(precio), descripcion }),
    }),
  eliminarProducto: (id) =>
    fetchJSON(`/${id}`, { method: "DELETE" }),
  editarProducto: (id, nombre, precio, descripcion) =>
    fetchJSON(`/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, precio: parseFloat(precio), descripcion }),
    }),
};
