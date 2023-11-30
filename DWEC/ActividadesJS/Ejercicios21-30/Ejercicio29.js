"use strict"
{
    /**
     * Programa una función para convertir números de base binaria a decimal y viceversa, pe. 
     * miFuncion(100,2) devolverá 4 base 10
     */

    function conversorBinarioDecimal(numero, base){
        let nNumero
        if(base == 2){
            nNumero = parseInt(numero, 2);
        } else {
            nNumero = numero.toString(2);
        }
    }
}