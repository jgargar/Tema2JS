"use strict"
{
    /**
     * Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier 
     * Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como 
     * ¡ o ¿
     */
    function validador(cadena){
        let r = /.[^0-9] | .[^!¿¡?]/ig
        return r.test(cadena)
    }

    console.log(validador("Jesus9 Garcia"))

}



