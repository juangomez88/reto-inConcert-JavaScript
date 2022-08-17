//Crear una función que reciba dos parámetros: una fecha con componente de hora y un número con el ID del horario. La función deberá validar si dicha fecha está
//dentro de un horario establecido dentro de la función. 
//Horario ID 1: Lunes a Viernes de 08:00 a 13:00 y 15:00 a 18:00. 
//Horario ID 2: Lunes a Jueves 09:00 a 15:00 y Sábado de 08:00 a 12:00.
//Retorna 1 si está en horario y 0 si no lo está.

let fecha = new Date(2022,(8-1),17,12,30,00);
let Id = 2;

function comparar(Id, fecha ) {
    let horario;
    let dia = fecha.getDay();
    let hora = fecha.getHours();
    switch(Id){
        case 1:
            if((dia >=1 && dia <=5 ) && (hora <=13 && hora >= 8) || (hora <18 && hora >=15) ){
                console.log(1);
            }else{
                console.log(0);
            }
            break;
        case 2:
            if(((dia >=1 && dia <= 4) && ( hora <15 && hora >= 9)) || (dia == 6 && (hora < 12 && hora >=8))){
                console.log(1);
            }else{
                console.log(0);
            }
            break;
        default: console.log('Error en el día ingresado');
    }

}

comparar(Id, fecha);
