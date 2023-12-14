"use sctrict"
{
    /**
     * Realiza un programa que al hacer doble click en la pantalla del navegador, cambie el 
     * fondo a un color aleatorio. 
     */

    function getRandomColor() {
        return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
    }

    window.addEventListener("dblclick", () => {
        let color = getRandomColor()
        document.body.style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    })

    
}