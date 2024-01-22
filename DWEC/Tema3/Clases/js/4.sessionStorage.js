"use strict"
{
    sessionStorage.setItem("nombre", "Jacitan")
    console.log(sessionStorage.getItem("nombre"))
    sessionStorage.removeItem("nombre")
    sessionStorage.clear()
}