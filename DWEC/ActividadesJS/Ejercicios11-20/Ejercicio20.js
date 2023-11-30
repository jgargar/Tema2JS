"use strict"
{
    /**
     * devuelveCadenaRepetida
     * Funcion que recibe por parametros una cadena y un numero de repeticiones de la misma
     * @param {*} cadena
     * @param {*} numero
     * @returns 
     */
    function devuelveCadenaRepetida(cadena, numero){
        let res;
        for(let i = 0; i < numero; i++){
            res += cadena + " ";
        }
        return res;
    }

    let cadena, numero;
    cadena = prompt("Introduce un cadena","");
    numero = parseInt(prompt("Introduce un numero",""));
    
    // Llamamos a la funcion creada anteriormente.
    console.log(devuelveCadenaRepetida(cadena, numero));

}