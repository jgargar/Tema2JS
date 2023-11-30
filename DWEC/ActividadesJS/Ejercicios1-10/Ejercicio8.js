"use strict"

function tablaMultiplicarNumero(num){
    for(let i = 1; i <= 10; i++){
        console.log(num + " * " + i + " = " + (num * i))
    }
}

let numero;
numero=parseInt(prompt("Introduce un numero",""));

// Llamamos a la funcion creada anteriormente.
tablaMultiplicarNumero(numero);