function mostrar()
{
//tomo la edad  
var edad = document.getElementById("edad").value;
var estado = document.getElementById("estadoCivil").value;

if(edad <=17 && estado !="Soltero"){
    alert("Es muy pequeño para NO ser soltero.");
            }	


}//FIN DE LA FUNCIÓN