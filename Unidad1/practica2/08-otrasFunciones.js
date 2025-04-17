const ciudadesDisponibles = new Array("Santiago", "Bogota", "Lima", "Monde Video")

const paisesDisponibles = ["Colombia", "Chile", "Peru", "Panama"]
const cantidadCiudades = ciudadesDisponibles.length

console.log('La cantidad de ciudades es: ', cantidadCiudades)
console.log('La cantidad de paises es: ', paisesDisponibles.length)



ciudadesDisponibles.shift();
console.log(`En la lista existen: `, ciudadesDisponibles.length)
console.log(ciudadesDisponibles)

ciudadesDisponibles.pop
console.log(`En la lista existen: `, ciudadesDisponibles.length)
console.log(ciudadesDisponibles)

//ordenar
console.log(ciudadesDisponibles.sort())

//posicion de un elemento
console.log("En la lista existen: ",paisesDisponibles.indexOf("peru"))

// concatenar dos listas

const listaPaisesCiudades = paisesDisponibles.concat(ciudadesDisponibles)
console.log(listaPaisesCiudades)