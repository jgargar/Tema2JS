"use strict"
{
    /**
     * Realiza una web con las siguientes funcionalidades:
     * 1. Las siguientes verificaciones se realizarán al perder el foco del campo del formulario:
     *      a. El campo Nombre y apellidos no puede tener números. [2p]
     *      b. El campo Fecha de nacimiento debe ser anterior a 2010. [2p]
     * 2. Las siguientes verificaciones se realizarán al enviar el formulario:
     *      a. Todas las anteriores. [1p]
     *      b. Todos los campos deben tener contenido y/o haber seleccionado una opción. [3p]
     * 3. Los mensajes de error de las verificaciones durarán 5 segundos y estarán debajo del 
     * campo en cuestión con un formato proporcionado por una clase CSS (color rojo). [2p]
     * Se valorará el uso de funciones para las validaciones y los mensajes de error.
     */

    const form = document.querySelector(".formulario");
    const sexo = document.querySelectorAll('[name="sexo"]');
    const aficiones = document.querySelectorAll('[name="aficiones"]');
    const ciudades = document.querySelectorAll(".ciudadesLista");
    const mensaje = document.querySelectorAll('[name="mensaje"]');
    const nombreApellidos = document.querySelector(".nombreApellidos");
    const fechaNac = document.querySelector(".fecha");
    
    form.addEventListener("submit", function(evento){
        if(!validaNombreApellidos(nombreApellidos.value) || !validaAnio(fechaNac)
            || !validaAnio(fechaNac.value) || !compruebaCheck(sexo)
            || !compruebaCheck(aficiones) || mensaje.value == ""){
            evento.preventDefault(); //Evita lo que hace por defecto
            if(validaNombreApellidos(nombreApellidos.value)){
                mostrarMensaje("El nombre esta vacio o puede que contenga numeros", nombreApellidos)
            }
            if(!validaAnio(fechaNac.value)){
                mostrarMensaje("El año tiene que ser inferior a 2010", fechaNac)
            }
            if(!compruebaCheck(sexo)){
                mostrarMensaje("Debes de seleccionar algun valor",  document.querySelector(".divRadio"))
            }
            if(!compruebaCheck(aficiones)){
                mostrarMensaje("Debes de tener almenos una aficion", document.querySelector(".divAficiones"))
            }
            if(mensaje.value == ""){
                mostrarMensaje("Debes de introducir algun valor", mensaje)
            }
        } else {
            //Para decirte que lo envia
            alert("Se va a enviar el form")
        }
    })

    nombreApellidos.addEventListener("blur", () => {
        if(validaNombreApellidos(nombreApellidos.value)){
            mostrarMensaje("El nombre no puede contener numeros", nombreApellidos)
        }
    })

    fechaNac.addEventListener("blur", () => {
        if(!validaAnio(fechaNac.value)){
            mostrarMensaje("El año tiene que ser inferior a 2010", fechaNac)
        }
    })

    function validaNombreApellidos(texto){
        let exregnum = /.[0-9]/i
        let exit = true
        if (texto.value != ""){
            exit = exregnum.test(texto)
        }
        return exit
    }

    function validaAnio(fecha){
        let slitFecha = fecha.split("-")
        return slitFecha[0] < "2010" ? true : false
    }

    function compruebaCheck(lista){
        let contCheckTrue = 0;
        for(let i = 0; i < lista.length; i++){
            if(lista[i].checked===true){
                contCheckTrue++;
            }
        }
        return contCheckTrue >= 1 ? true : false
    }

    function mostrarMensaje(texto, campo){
        const alerta = document.createElement("p")
        alerta.textContent = texto
        alerta.setAttribute("class", "error")
        campo.insertAdjacentElement("afterend", alerta);
        setTimeout(() =>{
            alerta.remove()
        },5000)
    }

}