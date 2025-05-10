const API_URL = 'http://localhost/api1/productos.php';

export const productService = {
  listaProductos: () =>
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error('Error al obtener productos');
        return res.json();
      }),

  crearProducto: (nombre, precio, descripcion) =>
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        nombre, 
        precio, 
        descripcion
      })
    }).then(res => {
      if (!res.ok) throw new Error('Error al crear producto');
      return res.json();
    }),

  eliminarProducto: (id) =>
    fetch(`${API_URL}?id=${id}`, {
      method: "DELETE"
    }).then(res => {
      if (!res.ok) throw new Error('Error al eliminar producto');
      return res.json();
    }),

  editarProducto: (id, nombre, precio, descripcion) =>
    fetch(API_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, nombre, precio, descripcion })
    }).then(res => {
      if (!res.ok) throw new Error('Error al editar producto');
      return res.json();
    }),
};