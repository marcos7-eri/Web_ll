export function cambiarEstilos() {
    const body = document.body;
    const boton = document.getElementById('boton-color');
    
    if (body.style.backgroundColor === 'rgb(44, 62, 80)') {
        body.style.backgroundColor = '#1a1a2e';
        body.style.color = '#e94560';
        boton.style.backgroundColor = '#e94560';
        boton.style.color = 'white';
    } else if (body.style.backgroundColor === 'rgb(26, 26, 46)') {
        body.style.backgroundColor = '#16213e';
        body.style.color = '#0f3460';
        boton.style.backgroundColor = '#0f3460';
        boton.style.color = 'white';
    } else {
        body.style.backgroundColor = '#2c3e50';
        body.style.color = '#ffffff';
        boton.style.backgroundColor = '#34495e';
        boton.style.color = 'white';
    }
}

export function habilitarEdicion(elementoId) {
    const elemento = document.querySelector(`.${elementoId}`);
    const contenidoOriginal = elemento.textContent;
    
    elemento.contentEditable = true;
    elemento.focus();
    
    elemento.addEventListener('blur', () => {
        elemento.contentEditable = false;
        if (elemento.textContent.trim() === '') {
            elemento.textContent = contenidoOriginal;
        }
    });
    
    elemento.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            elemento.blur();
        }
    });
}