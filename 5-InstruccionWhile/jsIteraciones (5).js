function mostrar()
{

    var sexo = prompt("ingrese f ó m .");
    
    while(sexo=="f" || sexo=="F" || sexo== "m" || sexo=="M"){
        
    document.getElementById('Sexo').value=sexo.toLowerCase();
    break;
}

}//FIN DE LA FUNCIÓN