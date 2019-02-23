function mostrar()
{


  var max=-Infinity;
  var min=Infinity;



	while(respuesta!=false){
    var numeros=prompt("Ingrese un numero.");
    numeros=parseInt(numeros);

                if(isNaN(numeros)){
                alert("Ese no es un numero.");

                }

    var respuesta=confirm("¿Desea agregar un nuevo numero?");


    if(numeros>max){
      max=numeros;
    }

    if(numeros<min){
      min=numeros;
    }



    document.getElementById('maximo').value="El mayor numero es "+max;
    document.getElementById('minimo').value="El menor numero es "+min;
            }

}//FIN DE LA FUNCIÓN
