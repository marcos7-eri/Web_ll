const editIcon = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-edit', 'icon'); 
    i.addEventListener('click', editTask); 
    return i;
};

const editTask = (evento) => {
    const taskElement = evento.target.parentElement; // Obtener el elemento de la tarea
    const titleTask = taskElement.querySelector('.task'); // Seleccionar el texto de la tarea

    // Crear un input para editar el texto
    const inputEdit = document.createElement('input');
    inputEdit.type = 'text';
    inputEdit.classList.add('inputEdit');
    inputEdit.value = titleTask.innerText;

    taskElement.replaceChild(inputEdit, titleTask);
    inputEdit.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const newTaskValue = inputEdit.value.trim();
            if (newTaskValue !== '') {
                titleTask.innerText = newTaskValue;
                taskElement.replaceChild(titleTask, inputEdit);
            } 
        }
    });
};
export default editIcon;
