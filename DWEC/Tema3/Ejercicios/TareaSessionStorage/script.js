/**
 * Usando la tecnología de sessionStorage, almacena en una variable llamada username el nombre del usuario y, al cargar la página, verificar:
 * - si la variable no existe:
 * - Indicarle al usuario que no está identificado.
 * - Mostrarle un prompt para que introduzca su nombre de usuario.
 * - Controlar si deja el prompt en blanco y hace click en cancelar.
 * - guardar el valor de la variable username.
 * - si la variable ya existe:
 * - Saludar al usuario escribiendo: ¡Bienvenido de nuevo, username!
 * Añadir en la parte superior un botón para eliminar la variable username.
 * 
 * NOTA: excepto el prompt para pedirle los datos al usuario, todo debe escribirse en el DOM
 * usando los elementos HTML que creas necesarios.
 * NOTA2: probar el funcionamiento recargando la página tras haber introducido un username y tras borrarlo tanto con el botón como desde el navegador.
 * NOTA3: cerrar la ventana del navegador y abrir de nuevo y ver las diferencias con localStorage
 */

"use strict"
{
    let textoInicio = "¡Bienvenido!"

    let h1 = document.createElement("h1")
    let btn = document.createElement("button")
    
    btn.textContent = "Borrar session storage"
    
    btn.addEventListener("click", () => {
        if (sessionStorage.getItem("username") != null){
            sessionStorage.removeItem("username")
            location.reload()
        }
    })
    
    let res = prompt("Introduce tu nombre")

    if(res == "" || res == null){
        textoInicio+= " Identificate."
    } else {
        sessionStorage.setItem("username", res)
        textoInicio+= " " + sessionStorage.getItem("username")
    }

    h1.textContent = textoInicio

    document.body.append(h1, btn)
}
    