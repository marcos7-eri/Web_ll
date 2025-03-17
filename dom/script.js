import checkComplete from "./componentes/checkComplete.js";
import deleteIcon from "./componentes/deleteIcon.js";
import editIcon from "./componentes/ediIcon.js";

(() => {
    const btn = document.querySelector('[data-form-btn]');
    const list = document.querySelector('[data-list]');

    const updatePendingTasksCount = () => {
        const pendingTasks = document.querySelectorAll('.card:not(.completed)'); 
        const pendingTasksCount = document.getElementById('pendingTasksCount');
        pendingTasksCount.textContent = pendingTasks.length; 
    };

    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value.trim();
    
        if (value === "") {
            alert("Por favor, ingresa una tarea válida.");
            return;
        }
    
        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';
    
        const contTask = document.createElement('div');
        contTask.appendChild(checkComplete());
    
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        contTask.appendChild(titleTask);
    
        // Añadir ícono de edición
        contTask.appendChild(editIcon());
    
        task.appendChild(contTask);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    
        updatePendingTasksCount(); // Actualiza el contador después de agregar una tarea
    };
    

    btn.addEventListener('click', createTask);

    list.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('icon')) {
            updatePendingTasksCount(); // Actualiza el contador
        }
    });

    // Evento para actualizar 
    list.addEventListener('click', (evento) => {
        if (evento.target.classList.contains('fa-trash-alt')) {
            setTimeout(updatePendingTasksCount, 0);
        }
    });

    // inicializar el contador al cargar la pagina
    updatePendingTasksCount();
    /* const checkComplete=()=>{
        const i =document.createElement('i')// creacion de un icono 
        i.classList.add("far","fa-check-square","icon")//dando estilos al icono
        i.addEventListener("click",color)
        return i;
    }
    
    const color =(evento)=>{
        const element= evento.target
        element.classList.add('fas');
        element.classList.add('completeIcon');
        element.classList.remove('far');
    }; */

   /* const deleteIcon=()=>{
        const i =document.createElement('i')// creacion de un icono 
        i.classList.add("fas","fa-trash-alt","icon")//dando estilos al icono
        i.addEventListener("click",eliminarTarea)
        return i;

    }
    const eliminarTarea=(evento)=>{
        const parent=evento.target.parentElement;
        parent.remove();
    } */
})();