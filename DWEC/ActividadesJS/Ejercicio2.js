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
do{
    numero1=parseInt(prompt("Introduce un numero",""));
    numero2=parseInt(prompt("Introduce otro numero",""));
    if (!isNaN(numero1) && !isNaN(numero2)){
        if (numero1 <= 0 && numero2 <= 0){
            alert("Los numeros introducidos son menores de 0");
        } 
    } else {
        alert("Los numeros introducidos no son numeros");
    }
}while();