"use sctrict"
{
    /**
     * Realiza un programa que al hacer doble click en la pantalla del navegador, cambie el 
     * fondo a un color aleatorio. 
     */

    function generarNuevoColor(){
        let simbolos = "0123456789ABCDEF";
        let color = "#";
    
        for(var i = 0; i < 6; i++){
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
        return color
    }

    window.addEventListener("dblclick", () => {
        document.body.style.background = generarNuevoColor();
    })

    
}