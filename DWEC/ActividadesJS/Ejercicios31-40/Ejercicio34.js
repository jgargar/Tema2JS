"use strict"
{
    /**
     * Programa una función que valide que un texto sea un email válido, p.e. miFuncion 
     * (“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos 
     * guión alto y bajo+@+caracteres, números+.+al menos dos caracteres.
     */

<<<<<<< HEAD
    console.log(Math.ceil(Math.random()*10))
    console.log(Math.round(Math.random()*10))
    console.log(Math.floor(Math.random()*11))
    console.log(Math.random()*40+20)
=======
    function validador(cadena){
        let r = /.[^0-9] | .[^!¿¡?]/ig
        return r.test(cadena)
    }

    console.log(validador("javier.ferrer@iesmartinezm.es"))
>>>>>>> 924e9da981d2cf5d61c765dcdc7df8dddafd1552
}