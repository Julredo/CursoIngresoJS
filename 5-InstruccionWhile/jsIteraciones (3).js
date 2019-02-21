function mostrar()
{

    var clave = prompt("ingrese el número clave.");

 
    var contador=0;
    while(clave != "utn750"){
    alert("Clave incorrecta.");
    contador++;
    var clave = prompt("ingrese el número clave.");
    

    
    if(contador<4){
    alert("ha intentado 3 veces.");

    }
    break;
    
 }


}//FIN DE LA FUNCIÓN
