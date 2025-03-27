const putData=()=>{
    const update={
        titulo:"Actualizado",
        descripcion:"actualizado",
        fecha: new Date().toISOString()
    };
    fetch ('${API_URL}/1', {
        method:"PUT",
        headers:{
            "Content-Type": "aplication/json",
            "Accept": "aplication/json"
        },
        body:JSON.stringify(update)
    })
    .then(Response=>{
        if(!Response.ok){
            throw new Error ('Error en la respuesta estado: ${response.status}')
        }
        return Response.json();
    }).then(data=>showResult(data))
    .catch(error=>showResult(error.message,true));
};