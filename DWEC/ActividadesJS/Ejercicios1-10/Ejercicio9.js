"use strict"

let numero1, numero2, caracter, boolean = true;
/**
 * Bloque do... while que comprueba si los numeros son numeros, y si son numeros mayor que 0
 */
do{
    numero1=parseInt(prompt("Introduce un numero",""));
    numero2=parseInt(prompt("Introduce otro numero",""));
    caracter = prompt("Introduce un caracter aritmetico","")
    if (!isNaN(numero1) && !isNaN(numero2)){
        switch(caracter){
            case "+": 
                console.log(numero1 + numero2);
                boolean = false;
                break;
            case "-":
                console.log(numero1 - numero2);
                boolean = false;
                break;
            case "*":
                console.log(numero1 * numero2);
                boolean = false;
                break;
            case "/":
                console.log(numero1 / numero2);
                boolean = false;
                break;
            default:
                alert("El caracter introducido no es valido");
        }
    } else {
        alert("Los numeros introducidos no son numeros");
    }
}while(boolean);