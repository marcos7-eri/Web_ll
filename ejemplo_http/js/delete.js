const deleteDate=()=>{
    fetch('$(API_URL)/1',{
        method:"DELETE",
        
    }).then(Response=>{
        if(!Response.ok){
            throw new Error ('Error en la respuesta estado: ${response.status}')
        }
        showResult({
            message:"el post con id 1 fue eliminado",
            Status: Response.status
        });

        
    }).catch(error=> showResult(error.message,true));
}