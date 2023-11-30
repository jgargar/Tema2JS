"use strict"
{
    /**
     * Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras 
     * “a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.
     */

    function compruebaCadena(cadena){
        return (cadena.startsWith("m") || cadena.startsWith("d")) && (cadena.endsWith("a") || cadena.endsWith("o"));
    }

    function compruebaCadenaExpresionRegular(cadena){
        return /^(m|d)[\s\S]*(a|o)$/i.test(cadena);
    }

    console.log(compruebaCadena("manzana"))
    console.log(compruebaCadenaExpresionRegular("manzana"))


}