"use strict"
{
    /**
     *  Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee 
     *  igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true
     */

    function esPalindromo(palabra){
        let palabraAlreves = palabra.split("").reverse().join("")
        return palabraAlreves === palabra
    }

    console.log(esPalindromo("oso"))
    console.log(esPalindromo("cosa"))
}