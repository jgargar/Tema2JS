"use sctrict"
{
    /**
     * Realiza un programa que tenga 3 elementos <p> y al hacer salir el puntero del ratón 
     * sobre ellos desaparezcan (se oculten) y al hacer doble clic (los elimine del DOM). 
     * También deberá tener un botón “Reaparecer” que hará que aparezcan todos los 
     * elementos desaparecidos (pero no los eliminados). 
     */

    let p1 = document.createElement("p")
    p1.textContent = "Parrafo 1"
    
    let p2 = document.createElement("p")
    p2.textContent = "Parrafo 2"
    
    let p3 = document.createElement("p")
    p3.textContent = "Parrafo 3"
    
    let btnReaparecer = document.createElement("button")
    btnReaparecer.textContent = "Reaparecer"
    btnReaparecer.id = "btnReaparecer"
    
    document.body.append(p1, p2, p3, btnReaparecer)

    let listaParrafo = document.getElementsByTagName("p")

    for(let elemento of listaParrafo){
        elemento.addEventListener("mouseout", () =>
            elemento.style.visibility = "hidden"
        )
        
        elemento.addEventListener("dblclick", () =>
            elemento.remove()
        )

        btnReaparecer.addEventListener("click", () =>
            elemento.style.visibility = "visible"
        )
    }
}