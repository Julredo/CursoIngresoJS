function mostrar()
{
var precio = prompt("Ingrese precio");
precio = parseInt(precio);

var descuento = prompt("Ingrese descuento");
descuento = parseInt(descuento);

var resultado = precio - precio * (descuento/100) ;
//resultado = parseInt(resultado);


document.getElementById("elPrecioFinal").value = resultado;
}
