function mostrar()
{
//tomo la edad  
var mesElegido = document.getElementById('mes').value;

    switch(mesElegido){
    case "Junio":
    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio.");
    break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    alert("Ya pasamos el frio, ahora calor.");
    break;
    default:
    alert("Falta para invierno.");
    
}



}//FIN DE LA FUNCIÓN