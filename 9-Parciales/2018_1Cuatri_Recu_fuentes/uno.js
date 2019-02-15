
function mostrar()
{
    var mascota1= prompt("Ingrese el nombre de su primera mascota.");
    var kilo1=prompt("Ingrese cuanto pesa su primera mascota.");
    var kilo1 = parseInt(kilo1);

    var mascota2= prompt("Ingrese el nombre de su segunda mascota.");
    var kilo2=prompt("Ingrese cuanto pesa su segunda mascota.");
    var kilo2 = parseInt(kilo2);

    var resultado = kilo1+kilo2;
    alert("Tenes dos mascotas, "+mascota1+" y "+mascota2+", que pesan "+kilo1+" kilos y "+kilo2+" .La suma de los kilos es "+resultado+" .");

    //   var ancho = prompt("Ingrese ancho");
 //   ancho = parseInt(ancho);
 //   
 //   var largo = prompt("Ingrese largo")
//    largo = parseInt(largo);
 //   
 //   resultado = (ancho+largo) * 2;
 //   
 //   alert(resultado);

}
