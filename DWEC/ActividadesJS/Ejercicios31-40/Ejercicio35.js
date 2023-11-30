"use strict"
{
    /**
     * Programa una función que dado un array numérico devuelve otro array con los números 
     * elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]
     */

    function elevadoCuadrado(array){
        let arrayCuadrado = [];
        array.forEach((element) => 
            arrayCuadrado.push(Math.pow(element, 2))
        );
        return arrayCuadrado
    }

    console.log(elevadoCuadrado([1, 4, 5]))
}