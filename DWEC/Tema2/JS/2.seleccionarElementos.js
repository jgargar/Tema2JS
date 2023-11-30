"use strict"
{
    console.log("Selecciono todas las listas no ordenadas con getElementByTagName(\"ul\")");
    let listas = document.getElementsByTagName("ul")
    console.log(listas)
    for(let elemento of listas){
        console.log(elemento)
        console.log(elemento.textContent)
    }
}