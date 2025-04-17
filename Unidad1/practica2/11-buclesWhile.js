const ciudadesDisponibles = new Array("Santiago", "Bogota", "Lima", "Monde Video")
const precioPasaje = new Array(200, 300, 100, 500)
const precioDisponible = 210
let i = 0
while( precioPasaje [i] > precioDisponible && ciudadesDisponibles.length){
    i++
}
if (i == ciudadesDisponibles.length){
    console.log('No existen pasajes')
} else{
    console.log("Se puede comprar pasaje para: ", ciudadesDisponibles[i])
}

