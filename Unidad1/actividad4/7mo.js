function sumarPropiedad(array, propiedad) {
    return array.reduce((suma, objeto) => suma + (objeto[propiedad] || 0), 0);
}

const objetos = [
    { valor: 10 },
    { valor: 20 },
    { valor: 30 },
    { otro: 40 }
];

console.log(sumarPropiedad(objetos, 'valor'));