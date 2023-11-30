"use strict"
{
    /**
     * Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola 
     * Mundo") devolverá "odnuM aloH"
     */

    function invertirCadena(cadena){
        let cadena2;
        for(let i = cadena.length() - 1; i > 0; i--){
            cadena += cadena[i]
        }
        return cadena2;
    }

    console.log(invertirCadena("Hola Mundo"))
}