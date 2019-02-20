function mostrar()
{
//tomo la edad  
var mesElegido = document.getElementById('mes').value;

switch(mesElegido){
case "Enero":
alert("Que comiences bien el año.");
break;
case "Marzo":
alert("A clases.");
break;case "Julio":
alert("Se acercan las vacaciones.");
break;
case "Diciembre":
alert("Felices fiestas.");
break;
default:
alert("No elegiste meses del ejercicio.")

}


}//FIN DE LA FUNCIÓN