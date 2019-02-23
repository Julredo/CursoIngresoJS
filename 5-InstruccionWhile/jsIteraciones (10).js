function mostrar()
{
  var contadorUnico=0;
  var contador=0;
  var acumulador=0;
  var positivo=0;
  var negativo=0;
  var sumaPos=0;
  var sumaNega=0;
  var pares=0;
  var promedioPos=0;
  var promedioNega=0;
  var diferenciaPosNega=positivo-negativo;
  var cantidadCeros=0;



	while(respuesta!=false){
  var numeros=prompt("Ingrese un numero.");
  numeros=parseInt(numeros);

  if(isNaN(numeros)){
    alert("Ese no es un numero.");

    }

  contadorUnico==contadorUnico++
	acumulador=acumulador+numeros;
	var respuesta=confirm("¿Desea agregar un nuevo numero?");
}

    // Cantidad de ceros:

  if(numeros==0){
    contador=contador++;
    cantidadCeros=cantidadCeros+contador;
    }

    // Cantidad de positivos:
    if(numeros>0){
      contador=contador++;
      positivo=positivo+contador;
      }

      alert("La cantidad de positivos es "+positivo+" cero es "+cantidadCeros);
}//FIN DE LA FUNCIÓN
