"use strict"
{
    /**
     * Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
     * el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma 
     * descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }
     */
    function ordenarAscDesc(array){
        console.log("asc: " + array.sort((a, b) => a - b) + ", desc: " + (array.sort((a, b) => b - a)))
    }

    ordenarAscDesc([1,2,3,4,444,5,5,6,6,4,43,34,5,6,7,7,65,5,4,67,546,7,54,7,6,54,567,65])
}