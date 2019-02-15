function mostrar()
{
var compra1 = document.getElementById("elNombre").value;
var compra1 = parseInt(compra1);

var compra2 = document.getElementById("laLocalidad").value;
var compra2 = parseInt(compra2);

var suma=compra1+compra2;
var conDescuento = Math.floor(suma*0.9);
var final = Math.floor(conDescuento*1.21);


alert("Tu compra es de "+suma+", tenes un descuento del 10%, por lo que queda en "+conDescuento+". Con el iva, el precio final es "+final+".");




    //    var nombre = document.getElementById("elNombre").value;
//    var localidad = document.getElementById("laLocalidad").value;
    
//   alert("Usted es "+nombre+" y vive en la localidad de "+localidad+".");  
}
