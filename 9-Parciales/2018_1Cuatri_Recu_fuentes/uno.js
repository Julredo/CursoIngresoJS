
function mostrar() {
    //Trabajo:

    // var mascota1= prompt("Ingrese el nombre de su primera mascota.");
    // var kilo1=prompt("Ingrese cuanto pesa su primera mascota.");
    // var kilo1 = parseInt(kilo1);

    // var mascota2= prompt("Ingrese el nombre de su segunda mascota.");
    // var kilo2=prompt("Ingrese cuanto pesa su segunda mascota.");
    // var kilo2 = parseInt(kilo2);

    // var resultado = kilo1+kilo2;
    // alert("Tenes dos mascotas, "+mascota1+" y "+mascota2+", que pesan "+kilo1+" kilos y "+kilo2+" .La suma de los kilos es "+resultado+" .");

    // original:

    //   var ancho = prompt("Ingrese ancho");
    //   ancho = parseInt(ancho);
    //   
    //   var largo = prompt("Ingrese largo")
    //    largo = parseInt(largo);
    //   
    //   resultado = (ancho+largo) * 2;
    //   
    //   alert(resultado);


    //Ultima clase:

//     var contador = 0;
//     var velocidades;
//     var combustible;
//     var acumulador = 0;
//     var velBaja = Infinity;
//     var combustibleMin;
//     var combustibleLetra;
//     var liquido100 = 0;
//     var solidoMax = 0;
   


//     while (contador < 5) {
//         contador == contador++;
//         velocidades = prompt("Ingrese la velocidad en kilometros (entre 0 y 250)");
//         velocidades = parseInt(velocidades);





//         while (velocidades < 0 || velocidades > 250 || isNaN(velocidades)) {
//             alert("No, la velocidad debe ser entre 0 y 250");
     

//         }
//         acumulador = acumulador + velocidades;

//         if (velocidades < velBaja) {
//             velBaja = velocidades;
//         }

//         combustible = prompt("Ingrese el tipo de combustible ('s' para solido o 'l' para liquido.)");


//         while (combustible != "s" && combustible != "l" && combustible != "S" && combustible != "L") {
//             alert("¡Le dijimos que debe ser 's' o 'l'!");

//         }

//         if (velBaja <= velocidades) {
//             combustibleMin = combustible;
//         }

//         if (velocidades > 100 && combustible == "l") {
//             liquido100 == liquido100++;

//         }

//         if (combustible == "l" && velocidades > solidoMax) {

//             solidoMax = velocidades;
//         }

//  //       contador == contador++;


//         if (combustibleMin == "l" || combustibleMin == "L") {
//             combustibleLetra = "liquido";
//         }
//         else if (combustibleMin == "s" || combustibleMin == "S") {
//             combustibleLetra = "solido";
//         }



//     }

//     alert("El promedio de velocidad es " + acumulador / 5 + " KM. La velocidad mas baja fue de " + velBaja + " KM, la cual uso combustible " + combustibleLetra + ". Ademas, la cantidad de vehiculos con combustibles liquidos que superan los 100 KM son " + liquido100 + ". Por ultimo, la velocidad mas alta de los vehiculos con combustibles solidos es de " + solidoMax + " KM.");
// }


//Correccion:

var cont=0;
var velocidad;
var combustible;
var acumulador=0;
var velMin=0;
var tipoCombustible;
var cantidadCombuLiquido;


while(cont<5){
    cont++

do{
    velocidad=prompt("velocidad");
    velocidad=parseInt(velocidad);
}while(velocidad>0 || velocidad>250 || isNaN(velocidad));

do{
combustible=prompt("combustible")

}while(combustible!="s" || combustible !="l");
acumulador=acumulador+velocidad;

if(cont==1){
    velMin=velocidad;
    tipoCombustible=combustible;
}
else{
    if(velocidad<velMin){
        velMin=velocidad;
        tipoCombustible=combustible
    }
}

if (combustible=="l" && velocidad>100){
    cantidadCombuLiquido++;
}

