"use strict"
{
    /**
     * Programa una función que dada una cadena de texto cuente el número de vocales y 
     * consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5
     */

    function cuentaVocalesConsonates(cadena){
        let consonantes = 0, vocales = 0
        let r = /[aeiou]/i;
        cadena.split("").forEach(c => {
            if(!(c == " ")){
                r.test(c) ? vocales++ : consonantes++
            }
        });
        console.log("Consonantes: %s, Vocales: %s", consonantes, vocales)
    }

    cuentaVocalesConsonates("Hola Mundo")

}