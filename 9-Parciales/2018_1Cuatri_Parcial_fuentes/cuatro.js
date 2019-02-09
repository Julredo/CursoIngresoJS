function mostrar()
{
var num1 = prompt("Ingrese el primer numero");
var num2 = prompt("Ingrese el segundo numero");


if(num1 == num2){
resultado1 = num1+num2;
alert(resultado1)
                }
                

     else if(num1>num2){
     num1 = parseInt(num1);
     num2 = parseInt(num2);
     resultado2 = num1 - num2;
     alert(resultado2);
           }

           else if(num1<num2){
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            resultado3 = num1 + num2;
            alert(resultado3);
            if(resultado3 >10){
                alert("la suma es "+resultado3+", es mayor a 10");
                             }
                            }
                  

}
