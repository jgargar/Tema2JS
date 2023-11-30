'use strict'
{
    let enlace1 = document.querySelector(".link-dom")
    enlace1.getAttribute("data-description")
    enlace1.setAttribute("data-description", "Modelo de Objeto de documento")
    console.log(enlace1.getAttribute("data-description"))

    //Acceso a las propiedades CCS de un elemento

    console.log(enlace1.style)
    console.log(enlace1.style.color)
    console.log(enlace1.style.backgroundColor)
    console.log(window.getComputedStyle(enlace1))

    enlace1.style.setProperty("text-decoration", "line-through")

    enlace1.style.setProperty("display", "block")
    enlace1.style.width = "55%%%"
}