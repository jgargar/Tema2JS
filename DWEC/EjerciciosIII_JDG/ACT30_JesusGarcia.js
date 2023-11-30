"use strict"
{
    function calcularEdad(fechaNacimiento) {
        let fechaActual = new Date();
        let anioActual = fechaActual.getFullYear();
        let mesActual = fechaActual.getMonth();
        let diaActual = fechaActual.getDate();
    
        let anioNacimiento = fechaNacimiento.getFullYear();
        let mesNacimiento = fechaNacimiento.getMonth();
        let diaNacimiento = fechaNacimiento.getDate();
    
        let edad = anioActual - aniooNacimiento;
    
        // Ajustar la edad si aún no ha pasado el cumpleaños de este año
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
            edad--;
        }
    
        return edad;
    }
}