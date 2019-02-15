function mostrar()
{
    var cantidadLibros = prompt("Ingrese cuantos libros compro.");
    var cantidadLibros = parseInt(cantidadLibros);

    var gasto = prompt("Ingrese cuanto gasto por la compra.");
    var gasto = parseInt(gasto);
    
    var gastoConDiez = gasto*0.9;
    var gastoConVeinticinco = gasto * 0.75;

    var tarjeta = confirm("¿Paga con tarjeta?");
   if(tarjeta==true){
        gasto=gasto*1.1;
   }


    

    resumen =("Usted compro "+cantidadLibros+ " libros y gasto "+Math.floor(gasto)+"$ en total.");

        if(cantidadLibros<=2){

            alert(resumen);  
            }
        
        else if(cantidadLibros>2){
          gasto = gastoConDiez;  
          if(tarjeta==true){
            gastoConDiez= gastoConDiez*1.1;
            
       }    
          alert(resumen +"Su total con descuento es de "+Math.floor(gastoConDiez));  
            }

            else if(cantidadLibros>2 && gasto>2000){
                gasto = gastoConVeinticinco;
                if(tarjeta==true){
                    gastoConVeinticinco= gastoConVeinticinco*1.1;
                    
               }
          alert(resumen+"Su total con dos descuentos es de "+Math.floor(gastoConVeinticinco));
            }
        }
