"use strict"
{
    fetch("./recursos/texto.txt")
    .then(response => response.text())
    .then(console.log);

    fetch("./recursos/texto.txt")
    .then(function(respuesta){
        let texto = respuesta.text()
        return texto
    })
    .then(function(respuesta){
        console.log(respuesta)
    });

    fetch("https://randomuser.me/api/")
    .then(response => response.text())
    .then(function(respuesta){
        console.log(respuesta)
    });
}