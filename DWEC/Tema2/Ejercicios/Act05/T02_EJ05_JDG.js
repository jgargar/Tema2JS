"use sctrict"
{
    /**
     * Realiza un programa que mediante eventos y el uso del objeto event, te muestre en todo 
     * momento la posición actual del ratón en pantalla. 
     * Para mostrarlo modificaremos de forma dinámica un elemento HTML (Ejemplo, un <p>) que 
     * nos muestre la posición actual del ratón.
     */

    let x = document.createElement("p")
    x.textContent = ""
    
    let y = document.createElement("p")
    y.textContent = ""

    document.body.append(x, y)

    window.addEventListener("mousemove", (e) => {
        x.textContent = e.clientX
        y.textContent = e.clientY
    })


}