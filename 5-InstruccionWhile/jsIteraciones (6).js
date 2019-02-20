function mostrar()
{

	var contador=0;
	var acumulador=0;
//	var numeros=prompt("Ingrese un numero");

	while(contador<5){
	var numeros=prompt("Ingrese un numero");
	numeros=parseInt(numeros);
	contador++
	acumulador=acumulador+numeros;
	}



document.getElementById('suma').value="La suma es "+acumulador;
document.getElementById('promedio').value="El promedio es "+acumulador/5;

}//FIN DE LA FUNCIÓN