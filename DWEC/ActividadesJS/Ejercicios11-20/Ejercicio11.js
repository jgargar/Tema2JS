"use strict"
{
    /**
     * esParImpar()
     * Programa que define si un numero introducido por parametro es par o impar
     * @param {Int} numero 
     * @returns par/impar
     */
    function esParImpar(numero) {    
        return (numero % 2 == 0) ? "par" : "impar";
    }
    
    let numero;
    numero=parseInt(prompt("Introduce un numero",""));
    
    // Llamamos a la funcion creada anteriormente.
    console.log(esParImpar(numero));
}