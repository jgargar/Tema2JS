"use strict"
{
    /**
     * Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el 
     * primero almacena los números pares y en el segundo los impares, pe. 
     * miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
     */

    function arrayParImpar(array){
        let pares = []
        let impares = []
        array.forEach(element => {
            if (element % 2 === 0) {
                pares.push(element);
            } else {
                impares.push(element);
            }
        })
        return "Pares: " + pares + ", Impares: " + impares
    }

    console.log(arrayParImpar([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))
}