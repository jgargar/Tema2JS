"use strict"
/**
 * 
 * @param {*} numero 
 * @returns 
 */
function esPrimo(numero) {
    var boolean = true;
    if (numero<=1){
        boolean = false;
    } 
    for (var i = 2; i <= numero-1; i++){
        if (numero % i == 0) {
            boolean = false;
        }
    }
        
    return boolean;
}

let numero;
numero=parseInt(prompt("Introduce un numero",""));

// Llamamos a la funcion creada anteriormente.
console.log(esPrimo(numero));