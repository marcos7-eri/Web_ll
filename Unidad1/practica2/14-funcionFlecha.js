const datos =[
    {
        'materia': 'Programacion web II',
        'calificacion': 70
    },
    {
        'materia': 'Base de datos II',
        'calificacion': 80
    },
    {
        'materia': 'Robotica',
        'calificacion': 56
    },
    {
        'materia': 'Ingles II',
        'calificacion': 77
    },
    {
        'materia': 'Programacion III',
        'calificacion': 87
    },
    {
        'materia': 'Base de datos II',
        'calificacion': 67
    },
    {
        'materia': 'Programacion I',
        'calificacion': 87
    },
    {
        'materia': 'Base de datos I',
        'calificacion': 90
    },
    {
        'materia': 'Animacion digital',
        'calificacion': 65
    },
    {
        'materia': 'Ingles I',
        'calificacion': 55
    }
]
const procesarDatos = datos => {
    return datos
    .filter(datos => datos.calificacion> 51)
    .map(datos => {
        const {materia} = materia;
        return materia.length > 5 ? materia.toUpperCase() : materia.toLowerCase();
    });
}
const resultado = procesarDatos(datos)
console.log(resultado)