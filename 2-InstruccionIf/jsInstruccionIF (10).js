function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var resultado = (Math.floor(Math.random() * 10) + 1);
	alert(resultado);
	
	if(resultado>=1 && resultado <=4)
	{
		alert("Vamos, la proxima se puede.");
	}	

		else if(resultado>4 && resultado <=8)
		{
			alert("Aprobo");
		}

			else if(resultado==9 || resultado ==10)
			{
				alert("Excelente.");
			}
}//FIN DE LA FUNCIÓN