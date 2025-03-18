


 export let weekDay:number = 5;

if(weekDay <= 0){
    throw new Error('Día de la semana no permitido');
}

 switch(weekDay){
    case 1:
        console.log('Es Lunes')
        break;
    case 2:
        console.log('El Martes');
        break;
    case 3:
        console.log('Es Miercoles');
        break;
    default:
        console.log('no es lunes, martes o miercoles');

 }