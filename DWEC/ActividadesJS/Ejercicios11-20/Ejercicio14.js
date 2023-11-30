"use strict"
{
    /**
     * calculoDescuento
     * Funcion que recibe por parametros un numero y un descuento al que aplicar
     * @param {*} numero
     * @param {*} descuento 
     * @returns 
     */
    function calculoDescuento(numero, descuento){
        let des = numero * (descuento / 100);
        return numero - des;
    }

    let numero, descuento;
    numero=parseInt(prompt("Introduce un numero",""));
    descuento=parseInt(prompt("Introduce su descuento",""));

    // Llamamos a la funcion creada anteriormente.
    console.log(calculoDescuento(numero, descuento));

}