function mostrar()
{
//tomo la edad  
var edad = document.getElementById("edad").value;
if(edad >=0 && edad <=12){
    alert("Usted es un niño.");
            }

            else if(edad>=13 && edad<=17){
                alert("Usted es un adolescente");
                   }
                   
                   else{
                    alert("Usted es un adulto.");    
                       }



}//FIN DE LA FUNCIÓN