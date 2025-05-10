const API_URL = 'http://localhost/api1/pets.php';

export const petService = {
  listaPets: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Error al obtener mascotas');
    return await response.json();
  },

  crearPet: async (nombre, especie, edad) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, especie, edad })
    });
    if (!response.ok) throw new Error('Error al crear mascota');
    return await response.json();
  },

  eliminarPet: async (id) => {
    const response = await fetch(`${API_URL}?id=${id}`, { 
      method: "DELETE" 
    });
    if (!response.ok) throw new Error('Error al eliminar mascota');
    return await response.json();
  },

  editarPet: async (id, nombre, especie, edad) => {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, nombre, especie, edad })
    });
    if (!response.ok) throw new Error('Error al editar mascota');
    return await response.json();
  },
};