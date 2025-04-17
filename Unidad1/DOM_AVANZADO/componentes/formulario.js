const Form = (() => {

    //recuperando data de formulario
const form = document.querySelector('[data-form]'); //recupero el formulario
const inputTask = document.querySelector('[data-input-task]');
const inputDescription = document.querySelector('[data-input-descripcion]');  
const date = document.querySelector('[data-input-fecha]'); // Corregido: Quitar corchetes alrededor del selector
const inputPrioridad = document.querySelector('[data-input-prioridad]'); // Corregido: Quitar corchetes alrededor del selector

//guardo los datos como objeto
const datosForm=()=>{ 
    return{ //devuelvo un objeto
        task: inputTask.value.trim(), //trim elimina los espacios en blanco al principio y al final de un string
        description: inputDescription.value.trim(),
        date: date.value.trim(), 
        priority: inputPrioridad.value.trim(), 
    };
};
// borro los datos del formulario
const reset =()=>{ 
    inputTask.value=''; //value es el valor del input
    inputDescription.value=''; 
    date.value=''; 
    inputPrioridad.value=''; 
};
// devuelvo los datos del formulario
const setDatos =(callback)=>{
    form.addEventListener('submit',(evento)=>{
        evento.preventDefault();
        reset();
    });
};

return {setDatos}; 

}) ();

export default Form;