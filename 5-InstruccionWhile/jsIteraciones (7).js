function mostrar()
{

	var contador=0;
	var acumulador=0;

	var numeros=prompt("Ingrese un numero.");
	numeros=parseInt(numeros);
	var respuesta=confirm("¿Desea agregar un nuevo numero?");
	
	while(respuesta=true){

	contador++
	acumulador=acumulador+numeros;

    }
	


document.getElementById('suma').value="La suma es "+acumulador;
document.getElementById('promedio').value="El promedio es "+acumulador/contador;

}//FIN DE LA FUNCIÓN