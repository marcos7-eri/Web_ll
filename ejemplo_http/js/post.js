const postData =()=>{
    const newPost={
        titulo:"Nuevo Post",
        descripcion:"nueva descripcion",
        fecha: new Date().toISOString()
    };

    fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify(newPost)
    })
    .then(Response=>{
        if(!Response.ok){
            throw new Error ('Error en la respuesta estado: ${response.status}')
        }
        return Response.json();
    }).then(data=>showResult(data))
    .catch(error=>showResult(error.message,true));
}