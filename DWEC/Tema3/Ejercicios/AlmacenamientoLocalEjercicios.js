"use strict"
{
    
    /**
     * 2. Realiza el ejercicio anterior usando LocalStorage y SessionStorage.
     */
    let h1 = document.createElement("h1")
    window.addEventListener("load", () => {
        if (getCookie("visitas") == ""){
            setCookie("visitas", 1, 10)
            h1.textContent = getCookie("visitas")
        } else {
            let valor = Number.parseInt(getCookie("visitas")) 
            deleteCookie("visitas")
            setCookie("visitas", valor+=1, 10)
            h1.textContent = getCookie("visitas")
        }
        document.body.append(h1)
    })

    let btn = document.createElement("button")
    btn.textContent = "Borrar Cookie"
    btn.addEventListener("click", () => {
        deleteCookie("visitas")
        h1.textContent = "Se ha borrado la cookie"
    })
    document.body.append(btn)


    /**
     * 3. Realiza una web del tipo TODO list donde puedas ir guardando tareas y prioridad (alta, media 
     * y baja) y las vaya mostrando por orden de prioridad.
     */
}