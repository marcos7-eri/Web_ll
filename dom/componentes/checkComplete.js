const checkComplete = () => {
    const i = document.createElement('i'); // Crear un icono
    i.classList.add('far', 'fa-check-square', 'icon'); // Dar estilos al icono
    i.addEventListener('click', color);
    return i;
};

const color = (evento) => {
    const element = evento.target;
    element.classList.add('fas');
    element.classList.add('completeIcon');
    element.classList.remove('far');
};
export default checkComplete;