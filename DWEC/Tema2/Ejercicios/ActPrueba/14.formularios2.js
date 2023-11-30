"use strict"
{
    let form = document.querySelector("#idForm1");
    form.addEventListener("submit", function(evento){
        let cajaTexto = document.querySelector("#idText1")
        let email = document.querySelector("#idEmail1")

        if(cajaTexto.value.length != 4 || !validaEmail(email.value)){
            evento.preventDefault(); //Evita lo que hace por defecto
            if(cajaTexto.value.length != 4){
                mostrarMensaje("El texto tiene que tener 4 caracteres")
            }
            if(!validaEmail(email.value)){
                mostrarMensaje("El email tiene que tener un formato correcto")
            }
        } else {
            //Para decirte que lo envia
            alert("Se va a enviar el form")
        }
    })

    function validaEmail(texto){
        let emailVerdadero = /^[a-z0-9]+(\.[-_a-z0-9]+)*@/i
        return emailVerdadero.test(texto)
    }

    function mostrarMensaje(texto){
        const alerta = document.createElement("p")
        alerta.textContent = texto
        alerta.setAttribute("class", "error")
        form.append(alerta)
        setTimeout(() =>{
            alerta.remove()
        },3000)
    }
}