"use sctrict"
{
    /**
     * Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer 
     * click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestra un 
     * “alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia. 
     * 
     * Fuente: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
     */

    let btnIniciarSaludo = document.createElement("button")
    btnIniciarSaludo.textContent = "Iniciar Saludo"

    let btnPararSaludo = document.createElement("button")
    btnPararSaludo.textContent = "Parar Saludo"
    
    let intervalId;

    document.body.append(btnIniciarSaludo, btnPararSaludo)

    btnIniciarSaludo.addEventListener("click", () => {
        if (!intervalId){
            intervalId = setInterval(() => {
                alert("Hola")
            }, 5000)
        }
    })

    btnPararSaludo.addEventListener("click", () => {
        clearInterval(intervalId)
        intervalId = null
    })

    
}