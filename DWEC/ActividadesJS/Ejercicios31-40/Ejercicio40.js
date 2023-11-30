"use strict"
{
    /**
     * Programa una función para devolver la edad de una persona dada su fecha de nacimiento en 
     * este formato dd/mm/aaa.
     */

    function calculaEdad(dateString){
        let hoy = new Date()
        let fechaNacimiento = new Date(dateString)
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
        if ( diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) 
        {
            edad--
        }
        return edad
    }

    let edad = calculaEdad("11/01/2002")

    console.log(edad)
}