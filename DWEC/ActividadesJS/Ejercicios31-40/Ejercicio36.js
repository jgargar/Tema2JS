"use strict"
{
    /**
     * Programa una función que dado un array devuelva el número más alto y el más bajo de dicho
     * array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60]
     */

    function devuelveAltoBajo(array){
        return "Alto: " + Math.max(...array) + ", Bajo: " + Math.min(...array)
    }

    console.log(devuelveAltoBajo([1,5,34,99,-2]))
}