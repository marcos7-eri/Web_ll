const datos =[
    {
        'materia': 'Programacion web I',
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
        'calificacion': 97
    },
    {
        'materia': 'sociales',
        'calificacion': 17
    },
    {
        'materia': 'Programacion I',
        'calificacion': 47
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
i = 0
 const NotaAprobacion = 51;
 let materiaSeleccionada = '';
 do{
    if(datos[i].calificacion>= NotaAprobacion){
        materiaSeleccionada = datos [i].materia
        break;
    }
    i++;
 }while(i<datos.length && materiaSeleccionada =='')
 if(materiaSeleccionada == '')
    console.log('No aprobaste las materias')
  else
    console.log('La materia aprobada es: '+ materiaSeleccionada)