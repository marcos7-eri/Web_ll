/*const crear_nueva_fila=(nombre,email)=>{// recepciono datos 
    const fila = document.createElement('tr');// creo una nueva filla en la tabla
    //guardo html en una variable y tambien llamo a mis datos de entrada
    const contenido = `
            <td class="td" data-td>
            ${nombre}
            </td>
            <td>${email}</td>
            <td>
            <ul class="table__button-control">
                <li>
                    <a
                    href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                    class="simple-button simple-button--delete"
                    type="button"
                    >
                    Eliminar
                    </button>
                </li>
                </ul>
            </td>
            `;
        fila.innerHTML=contenido;
        return fila; 
};x


const table = document.querySelector("[data-table]");
*/

/*const lista_clientes=()=>{ metodo antiguo
    const promesa= new Promise((resolve,reject)=>{
        const http = new XMLHttpRequest();//variable con request http y xml
        http.open("GET","http://localhost:3000/perfil");
        http.send();
        http.onload=()=>{
            const response = JSON.parse(http.response);//convierto que mi respuesta hhtp sea json
            if(http.response>=400){
                reject(response)
            } else{
                resolve(response)
            }
        };
    });
    return promesa;
}*/



/*
lista_clientes()
    .then((data)=>{
        data.forEach((perfil)=>{
            const nuevafila= crear_nueva_fila(perfil.nombre,perfil.email);
            table.appendChild(nuevafila)
        });
    })
    .catch((error)=> alert("No existe conexión"));

*/

//---------optimizado---------
/*
const listaclientes=()=> fetch("http://localhost:3000/perfil").then((respuesta)=>respuesta.json());
const crearCliente=(nombre,email)=>{
    return fetch ("http://localhost:3000/perfil",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({nombre,email, id: uuid.v4()})
    });

};
const eliminarCliente=(id)=>{
    console.log("elii",id)
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method:"DELETE"
    });

;}
// referencia a un cliente del json a travez de id
const clientes=(id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta)=>respuesta.json())}

const actualizarCliente=(nombre,email,id)=>{ // ojoooo solo actualizo nombre y email NO ID
    return fetch(`http://localhost:3000/perfil/${id}`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({nombre,email})

        }).then(respuesta=>console.log(respuesta)).catch((err)=>console.log(err));
};



export const clientService={
    listaclientes,
    crearCliente,
    eliminarCliente,
    clientes,
    actualizarCliente
};
*/

const API_BASE_URL = "http://localhost:3000/api1/conexion.php";

// Función para listar clientes
const lista_clientes = () => {
  return fetch(API_BASE_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error al listar clientes:", error);
    });
};

// Función para crear un cliente
const crearCliente = (nombre, email) => {
  return fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Corregido el typo en "Content-Type"
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error al crear cliente:", error);
    });
};

const eliminarCliente = (id) => {
  return fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error al eliminar cliente:", error);
    });
}
// Función para obtener un cliente por ID
const clientes = (id) => {
  return fetch(`${API_BASE_URL}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error al obtener cliente:", error);
    });
};
const actualizarCliente = (nombre, email, id) => {
  return fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email,id }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error al actualizar cliente:", error);
    });
}
export const clientService={
    listaclientes,
    crearCliente,
    eliminarCliente,
    clientes,
    actualizarCliente
};