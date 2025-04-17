import { cambiarEstilos, habilitarEdicion } from './funciones.js';

document.addEventListener('DOMContentLoaded', () => {
    // cambiar colores
    const botonColor = document.createElement('button');
    botonColor.textContent = 'Cambiar Tema';
    botonColor.id = 'boton-color';
    document.querySelector('.presentacion__contenido').appendChild(botonColor);
    
    // para ediatr el texto
    const textoEditable = document.querySelector('.presentacion__contenido__texto');
    if (textoEditable) {
        const botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar Texto';
        botonEditar.id = 'boton-editar';
        document.querySelector('.presentacion__contenido').appendChild(botonEditar);
        
        botonEditar.addEventListener('click', () => {
            habilitarEdicion('presentacion__contenido__texto');
        });
    }
    
    // cambair colores
    botonColor.addEventListener('click', cambiarEstilos);
    
    // tiutlo
    const titulo = document.querySelector('.presentacion__contenido__titulo');
    if (titulo) {
        titulo.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        titulo.style.fontWeight = 'bold';
        titulo.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
        titulo.style.letterSpacing = '1px';
    }
});