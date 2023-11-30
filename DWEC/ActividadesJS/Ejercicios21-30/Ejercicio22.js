"use strict"
{
    /**
     * Programa una función para contar el número de veces que se repite una palabra en un texto 
     * largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
     */

    function cuentaPalabraTexto(texto, palabra){
        let textoArray = texto.split(" ")
        let count = 0;
        for(let i = 0; i < textoArray.length; i++) {
            if(textoArray[i] == palabra){
                count++;
            }
        }
        return count;
    }


    function cuentaPalabraTexto2(texto, palabra){
        let textoArray = texto.split(" ")
        return textoArray.count(palabra)
    }

    console.log(cuentaPalabraTexto2("Hola mundo soy jesus del mundo mundo mundo", "mundo"))
}