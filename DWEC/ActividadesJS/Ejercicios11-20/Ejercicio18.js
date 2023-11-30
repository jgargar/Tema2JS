"use strict"
{
    /**
     * devuelveCadenaCortada
     * Funcion que recibe por parametros una cadena y una longitud de caracteres de corte
     * @param {*} cadena
     * @param {*} numero
     * @returns 
     */
    function devuelveCadenaCortada(cadena, numero){
        let res;
        for(let i = 0; i < numero; i++){
            res += cadena[i];
        }
        return res;
    }

    let cadena, numero;
    cadena = prompt("Introduce un cadena","");
    numero = parseInt(prompt("Introduce un numero",""));
    
    // Llamamos a la funcion creada anteriormente.
    console.log(devuelveCadenaCortada(cadena, numero));

}