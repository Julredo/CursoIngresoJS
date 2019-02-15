function mostrar()
{
    var gastos = prompt("Ingrese cuanto gasto en total.");
    var gastos = parseInt(gastos);
    
    var amigos = prompt("Ingrese cuantas personas hay en su grupo.");
    var amigos = parseInt(amigos);
    
    var sinPropina = Math.floor(gastos/amigos);
    var conIVA = Math.floor(gastos*1.21);
    var resultado = Math.floor(conIVA/amigos)*1.1;

    alert("Hay "+amigos+" personas en su grupo y gastaron "+gastos+"$ en total. Contando el IVA, el precio final es de "+conIVA+". Cada uno debe pagar "+resultado+"$, teniendo en cuenta la propina del 10%.")
    

   //  document.getElementById("elPrecioFinal").value = resultado;
    //   var precio = prompt("Ingrese precio");
 //   precio = parseInt(precio);
    
 //   var descuento = prompt("Ingrese descuento");
 //   descuento = parseInt(descuento);
    
 //   var resultado = precio - precio * (descuento/100) ;
    //resultado = parseInt(resultado);
    
    
 //   document.getElementById("elPrecioFinal").value = resultado
}
