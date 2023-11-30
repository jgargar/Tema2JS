"use strict"
{
    /**
     * cuentaCaracteres
     * Funcion que recibe por parametros una cadena y devuelve su longitud
     * @param {*} cadena
     * @returns 
     */
    function cuentaCaracteres(cadena){
        return cadena.length;
    }

    let cadena;
    cadena = prompt("Introduce un cadena","");
    
    // Llamamos a la funcion creada anteriormente.
    console.log(cuentaCaracteres(cadena));

}