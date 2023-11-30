"use strict"
/**
 * 
 * @param {*} hora 
 * @param {*} min 
 * @param {*} seg 
 */
function unSegundoDespues(hora, min, seg){
    seg++;
    if(seg == 60){
        seg = 0;
        min++;
        if (min == 60){
            min = 0;
            hora++;
        } if(hora == 24){
            hora = 0;
        }
    }
    alert(hora + " : " + min + " : " + seg)
}

let horas, minutos, segundos;
horas=parseInt(prompt("Introduce una hora",""));
minutos=parseInt(prompt("Introduce un minuto",""));
segundos=parseInt(prompt("Introduce un segundo",""));

// Llamamos a la funcion creada anteriormente.
unSegundoDespues(horas, minutos, segundos);