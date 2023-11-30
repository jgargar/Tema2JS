"use strict"
{
    /**
     * Realiza un programa que cuando se pulse un botón con el texto “Nuevo número”, 
     * añada un elemento con un número aleatorio a una lista desordenada (elemento UL).
     */
    const btnAniadir = document.querySelector("#btnAniadir")
    const btnEliminar = document.querySelector("#btnEliminar")
    const listaU = document.querySelector("#listaUl");
    
    function getRandomInt() {
        return Math.floor(Math.random() * 100);
    }

    function aniadir(){
        let li = document.createElement("li")
        li.textContent = getRandomInt()
        listaU.appendChild(li);
    }

    function eliminar(){
        let ultimoHijo = listaU.lastChild
        try{
            listaU.removeChild(ultimoHijo)
        }catch{
            let p = document.createElement("p")
            p.textContent = "Se ha eliminado toda la lista"
            document.body.appendChild(p);
        }
    }

    
    btnAniadir.addEventListener("click", aniadir)
    btnEliminar.addEventListener("click", eliminar)
    
}