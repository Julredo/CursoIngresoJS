function mostrar()
{
//tomo la edad  
var mesElegido = document.getElementById('mes').value;

    switch(mesElegido){
    case "Febrero":
    alert("Tiene 28 dias.")
    break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    break;
    alert("Tiene 30 dias.");
    default:
    alert("Tiene 31 dias.");    
    }	
        



}//FIN DE LA FUNCIÓN