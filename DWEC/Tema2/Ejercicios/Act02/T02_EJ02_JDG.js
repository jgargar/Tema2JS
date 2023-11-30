"use strict"
{
    /**
     * Realiza un programa que cree dinámicamente una tabla de 100x100. Cada elemento 
     * de la tabla tendrá un número único, que empezará en 1 y se irá incrementando de 
     * 1 en 1.
     */
    const btnNumeroPrimo = document.querySelector("#btnNumeroPrimo")
    const btnRestablecerCeldas = document.querySelector("#btnRestablecerCeldas")
    const tabla = document.querySelector("#tabla");

    function crearTabla(){
        let num = 1;
        for (let fila = 1; fila <= 10; fila++) {
            let tr = document.createElement("tr")
            for (let columna = 1; columna <= 10; columna++){
                let td = document.createElement("td")
                td.textContent = num
                tr.appendChild(td)
                num++
            }
            tabla.appendChild(tr)
        }
    }

    crearTabla()

    
    btnRestablecerCeldas.addEventListener("click",crearTabla)
    
}