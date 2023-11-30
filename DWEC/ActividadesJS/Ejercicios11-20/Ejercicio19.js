"use strict"
{
    /**
     * devuelveCadenaArray
     * Funcion que recibe por parametros una cadena y un delimitador, devuelve un array
     * @param {*} cadena
     * @param {*} delimitador
     * @returns 
     */
    function devuelveCadenaArray(cadena, delimitador){
        return cadena.split(delimitador);
    }

    let cadena, delimitador;
    cadena = prompt("Introduce un cadena","");
    delimitador = prompt("Introduce un cadena","");
    
    // Llamamos a la funcion creada anteriormente.
    console.log(devuelveCadenaArray(cadena, delimitador));
}