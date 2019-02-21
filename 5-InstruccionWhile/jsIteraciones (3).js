function mostrar()
{

    var clave = prompt("ingrese el número clave.");

 
    var contador=0;
    while(clave != "utn750"){
    alert("Clave incorrecta.");
    contador++;
    var clave = prompt("ingrese el número clave.");
    
    if(contador==2){
        alert("Se acabaron los intentos");
        break;
    }
 }


}//FIN DE LA FUNCIÓN
