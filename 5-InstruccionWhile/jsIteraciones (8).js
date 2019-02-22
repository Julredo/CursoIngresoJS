function mostrar()
{

//	var contador=0;
	var positivo=0;
	var negativo=1;

	while(respuesta!=false){
    var numeros=prompt("Ingrese un numero.");
    numeros=parseInt(numeros);

                if(isNaN(numeros)){
                alert("Ese no es un numero.");

                }

    var respuesta=confirm("¿Desea agregar un nuevo numero?");


    if(numeros>0){

      positivo=positivo+numeros;
    }

    if(numeros<0){
     negativo=numeros*numeros;

    }



  }
document.getElementById('suma').value="La suma de los positivos es "+positivo;
document.getElementById('producto').value="El producto de los negativos es "+negativo;

}//FIN DE LA FUNCIÓN
