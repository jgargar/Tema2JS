"use strict"
{
    let btnAbrirVentana = document.querySelector("#idAbrirVentana")
    let btnCerrarVentana = document.querySelector("#idCerrarVentana")
    let btnImprimirVentana = document.querySelector("#idImprimirVentana")
    let ventana
    btnAbrirVentana.addEventListener("click", (e) => ventana = window.open("https://meet.google.com/zyc-ekic-uwh"))
    btnCerrarVentana.addEventListener("click", (e) => ventana.close())
    btnImprimirVentana.addEventListener("click", (e) => window.print())

    window.addEventListener("resize", (e) =>{
        console.clear()
        console.log(window.innerHeight)
        console.log(window.innerWidth)
        console.log(window.outerHeight)
        console.log(window.outerWidth)
    })

    window.addEventListener("scroll", (e) =>{
        console.clear()
        console.log("Scroll")
        console.log(window.scrollX)
        console.log(window.scrollY)
    })

    window.addEventListener("load", (e) => {
        console.clear()
        console.log("Load")
        console.log(window.screenX)
        console.log(window.screenY)
    })

    window.addEventListener("DOMContentLoaded", (e) => {
        console.clear()
        console.log("DOMContentLoaded")
        console.log(window.screenX)
        console.log(window.screenY)
    })
}