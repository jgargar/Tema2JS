"use strict"
{
    console.log("Ejemplo1")
    localStorage.setItem("nombre", "Jesus")
    console.log(localStorage.getItem("nombre"))

    console.log("Ejemplo1")
    localStorage.setItem("apellidos", "Garcia")
    console.log(localStorage.getItem("apellidos"))

    localStorage.removeItem("nombre")
    localStorage.clear()
}