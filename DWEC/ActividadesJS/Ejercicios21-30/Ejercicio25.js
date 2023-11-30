"use strict"
{
    /**
     * Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en 
     * un sentido que en otro), pe. miFuncion(2002) devolverá true.
     */

    function esCapicua(numero){
        let numeroAlreves = numero.toString().split("").reverse().join("")
        return numeroAlreves === numero.toString()
    }

    console.log(esCapicua(123))
    console.log(esCapicua(121))
}