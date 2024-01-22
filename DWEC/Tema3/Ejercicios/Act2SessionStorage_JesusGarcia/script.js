"use strict"
{
    /**
     * 2. Realiza el ejercicio anterior usando LocalStorage y SessionStorage.
     */
    
    let h1SessionStorage = document.createElement("h1")
    
    window.addEventListener("load", () => {
        if (sessionStorage.getItem("visitas") == null){
            sessionStorage.setItem("visitas", 1)
            
            h1SessionStorage.textContent = sessionStorage.getItem("visitas")
        } else {
            let valorSessionStorage = Number.parseInt(sessionStorage.getItem("visitas"))
            
            sessionStorage.setItem("visitas", valorSessionStorage+=1)
            
            h1SessionStorage.textContent = sessionStorage.getItem("visitas")
        }
        document.body.append(h1SessionStorage)
    })

    let btn = document.createElement("button")
    btn.textContent = "Borrar Session Storage"
    btn.addEventListener("click", () => {
        sessionStorage.removeItem("visitas")
        h1SessionStorage.textContent = "Se ha borrado la sessionStorage"
    })
    document.body.append(btn)
}