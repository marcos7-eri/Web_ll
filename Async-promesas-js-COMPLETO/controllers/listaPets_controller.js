import { petService } from "../service/pets-service.js";

const crearNuevaFila = (nombre, especie, edad, id) => {
    const fila = document.createElement('tr');
    
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${especie}</td>
        <td>${edad}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_pet.html?id=${id}" 
                       class="simple-button simple-button--edit">
                       Editar
                    </a>
                </li>
                <li>
                    <button class="simple-button simple-button--delete" 
                            type="button" id="${id}">
                            Eliminar
                    </button>
                </li>
            </ul>
        </td>
    `;
    
    fila.innerHTML = contenido;
    
    const btn = fila.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        petService.eliminarPet(id)
            .then(() => {
                fila.remove();
                alert("Mascota eliminada con éxito");
            })
            .catch(error => {
                console.error(error);
                alert("Ocurrió un error al eliminar la mascota");
            });
    });

    return fila;
};

const tabla = document.querySelector("[data-tabla-pets]");

petService.listaPets()
    .then((data) => {
        data.forEach(({nombre, especie, edad, id}) => {
            const nuevaFila = crearNuevaFila(nombre, especie, edad, id);
            tabla.appendChild(nuevaFila);
        });
    })
    .catch((error) => {
        console.error(error);
        alert("Ocurrió un error al cargar las mascotas");
    });