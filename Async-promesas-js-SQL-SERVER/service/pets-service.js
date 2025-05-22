const SUPABASE_URL = 'https://qapoyrtojhptxjkwnxdv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhcG95cnRvamhwdHhqa3dueGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NzY5MjMsImV4cCI6MjA2MjQ1MjkyM30.JURMUvKGxkGu7PQpl-s44VBzEwCcZRQku7Zu_Y46LVs';

const table = 'mascotas';
const API_URL = `${SUPABASE_URL}/rest/v1/${table}`;
const HEADERS = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
};

const listaPets = () => {
  return fetch(`${API_URL}?select=*,cliente_id(id,nombre)`, { headers: HEADERS })
    .then(res => {
      if (!res.ok) throw new Error('Error al obtener mascotas');
      return res.json();
    });
};

const crearPet = (nombre, especie, edad, sexo, cliente_id) => {
  const pet = {
    nombre,
    especie,
    edad,
    sexo,
    cliente_id
  };
  return fetch(API_URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(pet),
  }).then(async res => {
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || 'Error al crear mascota');
    }
    return { success: true, message: 'Mascota creada con éxito' };
  });
};

const eliminarPet = id => {
  return fetch(`${API_URL}?id=eq.${id}`, {
    method: 'DELETE',
    headers: HEADERS,
  }).then(res => {
    if (!res.ok) throw new Error('Error al eliminar mascota');
    return res.text();
  });
};

const detallePet = id => {
  return fetch(`${API_URL}?id=eq.${id}`, { headers: HEADERS })
    .then(res => {
      if (!res.ok) throw new Error('Error al obtener mascota');
      return res.json();
    })
    .then(data => data[0]);
};

const actualizarPet = (id, nombre, especie, edad, sexo, cliente_id) => {
  return fetch(`${API_URL}?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      ...HEADERS,
      'Prefer': 'return=representation',
    },
    body: JSON.stringify({ nombre, especie, edad, sexo, cliente_id }),
  }).then(res => {
    if (!res.ok) throw new Error('Error al actualizar mascota');
    return res.json();
  });
};

export const petService = {
  listaPets,
  crearPet,
  eliminarPet,
  detallePet,
  actualizarPet,
};
