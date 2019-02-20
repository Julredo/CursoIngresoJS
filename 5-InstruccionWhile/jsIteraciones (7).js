function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(contador<5){
	var numeros=prompt("Ingrese un numero");
	numeros=parseInt(numeros);
	contador++
	acumulador=acumulador+numeros;
	}
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN