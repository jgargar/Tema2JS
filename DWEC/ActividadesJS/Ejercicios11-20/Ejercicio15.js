"use strict"
{
    /**
     * validarNif
     * Funcion que recibe por parametros un nif y dice si es valido o no
     * @param {*} numero 
     * @returns 
     */
    function validarNif(numero){
        let expresion_regular = /^\d{8}[a-zA-Z]$/;
        return (expresion_regular.test(numero) == true) ? "Valido" : "No Valido";
    }

    let numero;
    numero=prompt("Introduce un nif","");
    

    // Llamamos a la funcion creada anteriormente.
    console.log(validarNif(numero));

}