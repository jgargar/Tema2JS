"use strict"

function numerosImparesEntreNumero(num1, num2){
    for (let index = num1; index <= num2; index++) {
        if (index / 2 != 0){
            console.log(index);
        }
    }
}

let numero1, numero2;
numero1=parseInt(prompt("Introduce un numero",""));
numero2=parseInt(prompt("Introduce otro numero",""));

// Llamamos a la funcion creada anteriormente.
numerosImparesEntreNumero(numero1, numero2);