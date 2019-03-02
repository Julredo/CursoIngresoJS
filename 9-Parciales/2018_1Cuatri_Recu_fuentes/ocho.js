function mostrar() {
    // Ultima clase:


    var superficie;
    var confirma;

    //while(confirma!=false){
    do {
        var pais = prompt("Ingrese un pais.");


    } while (confirma != false);

    do {
        var superficie = prompt("Ingrese la superficie de ese pais en numeros.");
        superficie = parseInt(superficie);
    } while (isNaN(superficie))


    confirma = confirm("¿Desea agregar otro pais?")
}

