function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var resultado = alert(Math.floor(Math.random() * 10) + 1);
	
	
	if(resultado>=0 && resultado >=4){
		alert("Vamos, la proxima se puede.");
									}
	

		else if(resultado>4 && resultado >=8){
			alert("Aprobo");
									}

			else{
				alert("Excelente.");
									}
}//FIN DE LA FUNCIÓN