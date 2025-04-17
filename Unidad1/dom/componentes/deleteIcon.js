const deleteIcon = () => {
    const i = document.createElement('i'); // Creación del ícono
    i.classList.add("fas", "fa-trash-alt", "icon"); // Estilos para el ícono
    i.addEventListener("click", eliminarTarea); // Evento de clic
    return i;
};

const eliminarTarea = (evento) => {
    const parent = evento.target.parentElement;

    // Reproducir el sonido
    const audio = new Audio('./assets/editar.mp3'); // Ruta del archivo de sonido
    audio.play();

    parent.remove(); // Eliminar el elemento
};

export default deleteIcon;
