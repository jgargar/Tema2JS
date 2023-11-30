"use strict"
{
    /**
     * dibujaPatron
     * Funcion que recibe por parametros un caracter y lo respite n veces en piramide
     * @param {*} caracter 
     * @param {*} numero 
     * @returns 
     */
    function dibujaPatron(caracter, numero){
        let res;
        for(let i = numero; 0 < i; i--){
            for(let j = 0; j < i; j++){
                res += caracter;
            }
            console.log(caracter);
            caracter = "";
            console.log();
        }
    }

    let numero, caracter;
    caracter = prompt("Introduce un caracter","");
    numero = parseInt(prompt("Introduce un caracter",""));
    

    // Llamamos a la funcion creada anteriormente.
    dibujaPatron(caracter, numero);

}