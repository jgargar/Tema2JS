"use strict"
/**
 * comparaNumeros
 * Descripcion: programa que al introducir dos numero por parametros te devuelve si es mayor, menor o igual.
 * @param {*} num1 
 * @param {*} num2 
 */
function comparaNumeros(num1, num2){
    let res = num1 + " < " + num2
    if (num1 == num2){
        res = num1 + " = " + num2
    }
    else if (num1 > num2){
        res = num1 + " > " + num2
    }
    console.log(res);
}

let numero1, numero2;
numero1=parseInt(prompt("Introduce un numero",""));
numero2=parseInt(prompt("Introduce otro numero",""));

// Llamamos a la funcion creada anteriormente.
comparaNumeros(numero1, numero2)