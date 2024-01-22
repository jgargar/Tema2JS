"use strict"
{
    /**
     * 2. Realiza el ejercicio anterior usando LocalStorage y SessionStorage.
     */
    
    let h1LocalStorage = document.createElement("h1")
    
    window.addEventListener("load", () => {
        if (localStorage.getItem("visitas") == null){
            localStorage.setItem("visitas", 1)
            
            h1LocalStorage.textContent = localStorage.getItem("visitas")
        } else {
            let valorLocalStorage = Number.parseInt(localStorage.getItem("visitas"))
            
            localStorage.setItem("visitas", valorLocalStorage+=1)
            
            h1LocalStorage.textContent = localStorage.getItem("visitas")
        }
        document.body.append(h1LocalStorage)
    })

    let btn = document.createElement("button")
    btn.textContent = "Borrar Local Storage"
    btn.addEventListener("click", () => {
        localStorage.removeItem("visitas")
        h1LocalStorage.textContent = "Se ha borrado la localStorage"
    })
    document.body.append(btn)
}