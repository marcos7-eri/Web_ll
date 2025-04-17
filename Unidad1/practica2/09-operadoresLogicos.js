let edadPersona = 17
let conAcompanante = true
const precioPasaje = 1000
const ciudadDestino = "Sucre"
const ciudadesDisponibles = new Array("Santiago", "Bogota", "Lima", "Monde Video")

if (precioPasaje === 1000){
    console.log("El pasaje cuesta 1000")
}
console.log("Verificando pasaje para: ", ciudadDestino)
if((ciudadesDisponibles.indexOf(ciudadDestino) >-1) && 
(edadPersona >=10) || conAcompanante){
    console.log("Pasaje disponible")
} else {
    console.log("Pasaje no disponible")
}