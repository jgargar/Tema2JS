"use strict"
{
    /**
     * 1. Realiza una Web que almacene en una cookie el número de visitas que has realizado, 
     * incrementado el valor del número de visitas a cada visita realizada. La web debe tener una 
     * interfaz para visualizar el contenido de la cookie y para eliminar la cookie.
     */
    function setCookie (nombreCookie, valorCookie, diasExpiracion) {
        let fechaActual = new Date();
        fechaActual.setTime(fechaActual.getTime() + (diasExpiracion*24*60*60*1000)); // los dÃ­as de expiraciÃ³n los pasa a milisegundos
        let expires = "expires="+fechaActual.toUTCString();
        let nuevaCookie = nombreCookie + "=" + valorCookie + ";" + expires + ";path=/";
        //console.log(nuevaCookie);
        document.cookie = nuevaCookie; // Para almacenar la cookie en el navegador
    }
    
    function getCookie(cname) { 
        let name = cname + "=";
        let ca = document.cookie.split(';'); // convierte el string con todas las cookies que tenga la pÃ¡gina (estÃ¡n separadas por ;) a [] con todas las cookies
        //console.log(ca); // [cookie1=valor1, cookie2=valor2, ...]
        for(let i = 0; i < ca.length; i++) { // tiene 3 elementos ['nombre=Federico', 'edad=34', 'altura=178']
            let c = ca[i];
            //console.log(c); // escribe el valor de la cookie
            while (c.charAt(0) == ' ') { // eliminar espacios que pueda haber por delante
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) { // comprueba si es la cookie buscada
                return c.substring(name.length, c.length); // devuelve el valor
            }
        }
        return "";
    }
    
    function deleteCookie(cname) { 
        document.cookie = cname+'=; expires=Thu, 01 Jan 2024 00:00:01 GMT;path=/'; 
    }
    let h1 = document.createElement("h1")
    window.addEventListener("load", () => {
        if (getCookie("visitas") == ""){
            setCookie("visitas", 1, 10)
            h1.textContent = getCookie("visitas")
        } else {
            let valor = Number.parseInt(getCookie("visitas"))
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
}