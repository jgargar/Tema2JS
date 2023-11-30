"use strict"

var suma = 0, media = 0, producto = 1, numero, contador = 0;

function calculo(){
    suma += numero;
    producto *= numero;
    media = suma / contador;
}

do{
    numero = parseInt(prompt("Introduce un numero",""));
    if(numero > 0){
        contador++;
        calculo();
    }
}while(numero > 0);

alert("Suma = " + suma + ", Producto = " + producto + ", Media = " + media);