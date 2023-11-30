"use strict"
{
    /**
     * calculoFactorial
     * Funcion que recibe por parametros un numero del cual calcular su factorial
     * @param {*} numero 
     * @returns 
     */
    function calculoFactorial(numero){
        let res = 1;
        for(let i = 1; i <= numero; i ++){
            res = res * i;
        }
        return res;
    }

    let numero;
    numero=parseInt(prompt("Introduce un numero",""));

    // Llamamos a la funcion creada anteriormente.
    console.log(calculoFactorial(numero));

}


