"use strict"

function divisoresNumero(num){
    for(let i = 1; i <= num; i++){
        if (num % i == 0){
            console.log(i);
        }
    }
}

let numero;
numero=parseInt(prompt("Introduce un numero",""));

// Llamamos a la funcion creada anteriormente.
divisoresNumero(numero);