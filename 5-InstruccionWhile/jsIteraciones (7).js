function mostrar()
{

// Nota validacion al final.

	var contador=0;
	var acumulador=0;



	while(respuesta!=false){
  var numeros=prompt("Ingrese un numero.");
  numeros=parseInt(numeros);

  if(isNaN(numeros)){
    alert("Ese no es un numero.");

    }

  contador++
	acumulador=acumulador+numeros;
	var respuesta=confirm("¿Desea agregar un nuevo numero?");
    }



document.getElementById('suma').value="La suma es "+acumulador;
document.getElementById('promedio').value="El promedio es "+acumulador/contador;

}//FIN DE LA FUNCIÓN

//Nota para validar:
// Al usar el do while, siempre se ejecuta al principio una vez al menos.
