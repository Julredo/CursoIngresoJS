function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

  if(numero<0 || numero>9){
    alert("Ingrese SOLO entre 0 y 9.")
      }

      if(isNaN(numero)){
        alert("Ingrese numeros, no letras.")
          }

          if(numero==""){
            alert("Ingrese algo al menos.")
              }


  while(numero >=0 && numero<=9){
	document.getElementById("Numero").value = numero;
  break;

	}

}//FIN DE LA FUNCIÓN
