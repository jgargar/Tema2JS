"use strict"
{
    /**
     * conversorTemperaturas
     * Programa que convierta de grados a Fahrenheit y viceversa
     * @param {Int} medida 
     * @param {Char} tipo 
     */
    function conversorTemperaturas(medida, tipo){
        let res = 0;
        switch (tipo){
            case "f":
                res = (medida - 32) * 5 / 9
                break;
            case "c":
                res = (medida * 9 / 5) + 32;
                break;
        }
        return res;
    }

    let grado, tipo;
    grado = parseInt(prompt("Introduce un grado",""));
    tipo = prompt("Introduce un tipo","");

    
    // Llamamos a la funcion creada anteriormente.
    console.log(conversorTemperaturas(numero, tipo));
}