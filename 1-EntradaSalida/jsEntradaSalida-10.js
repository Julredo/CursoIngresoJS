/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo = document.getElementById("importe").value;
    var sueldo = parseInt(sueldo);

    var resultado = sueldo*0.75;
    document.getElementById("resultado").value = resultado;	
}
