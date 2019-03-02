function mostrar() {
    // Ultima clase:


    var superficie;
    var confirma;

    var paisCien = 0;
    var contador = 0;
    var paisImpar=0;
    var paisIgulaCien=0;
    var paisSuperaCien=0;


    while (confirma != false) {
        contador++;
        do {
            var pais = prompt("Ingrese un pais.");


        } while (!isNaN(pais));

        do {
            var superficie = prompt("Ingrese la superficie de ese pais en numeros.");
            superficie = parseInt(superficie);
        } while (isNaN(superficie))

        if (superficie < 100) {
        paisCien++;
        }

        if(superficie%2>0){
            paisImpar++
        }


        if(superficie==100){
            paisIgulaCien++
        }

        if(superficie)

        confirma = confirm("¿Desea agregar otro pais?")
    }



    alert("Los paises cuya superficie es menor a 100 son " + paisCien+". La cantidad de paises con superficie impar es "+paisImpar+ ". La cantidad de paises con superficie igual a 100 es "+paisIgulaCien);

}


