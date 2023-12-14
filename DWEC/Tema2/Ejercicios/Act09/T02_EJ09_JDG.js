"use sctrict"
{
    /**
     * Realiza un programa que tenga una imagen de una bola de papel y una papelera vacía. 
     * Cuando se arrastre la bola de papel a la papelera vacía, deberá cambiar la imagen de la 
     * papelera vacía a una papelera llena. 
     */
    let bola = document.querySelector(".basura")
    let papelera = document.querySelector(".papelera")

    bola.draggable = true
    
    papelera.addEventListener("dragover", (e) => {
        e.preventDefault();//para que ejecute el drop
        console.log("dragover");
    });
    
    papelera.addEventListener("drop", (e) => {
        console.log("drop");
        bola.remove()
        papelera.setAttribute("src","papeleraLlena.png")
    });
    
    
}