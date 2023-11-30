"use strict"
{
    /**
     * En un vector de cadenas, indicar:
        a. La cadena más corta.
        b. La cadena más larga.
        c. La cadena con más letras ‘a’.
        d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.
     */


        function funcionCadenas(aCadenas){
            //a. La cadena más corta.
            console.log(aCadenas.reduce((cadenaActual, cadenaSiguiente) => (cadenaSiguiente.length < cadenaActual.length ? cadenaSiguiente : cadenaActual)));
            
            //b. La cadena más larga.
            console.log(aCadenas.reduce((cadenaActual, cadenaSiguiente) => (cadenaSiguiente.length > cadenaActual.length ? cadenaSiguiente : cadenaActual)));
        
            //c. La cadena con más letras ‘a’.

            //d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.
            console.log(aCadenas.filter(cadena => cadena.includes("b")));
        }
}