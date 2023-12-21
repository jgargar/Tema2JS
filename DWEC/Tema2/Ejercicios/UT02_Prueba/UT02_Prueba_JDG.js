"use sctrict"
{
    /**
     * Realiza una web con un cuadro de texto y dos botones ("Crear botones" y "Reiniciar"):
     *      • El usuario introduce un número N y pulsa en "Crear botones" y se crean N botones entre 
     *      los dos anteriores [3p] con el texto rgb(aleatorio,aleatorio,aleatorio) y ese color de fondo 
     *      [1p].
     *      • Al pulsar sobre alguno de los nuevos botones creados de forma dinámica, el fondo de la 
     *      web cambiará a ese color [4p]
     *      • Al pulsar sobre "Reiniciar" volverá todo a como estaba al principio.[2p]
     * Importante:
     *      No puedes añadir etiquetas al documento .html, pero sí puedes modificarlas.
     *      No tienes que comprobar que el usuario introduzca otra cosa que no sea un número, ni que se 
     *      pulse "Crear botones" antes de poner un número.
     */

    const btnCrearBotones = document.querySelector(".crearBotones")
    const btnReiniciar = document.querySelector(".reiniciar")
    
    let txtNumeroBotones = document.querySelector(".inputNBotones")

    //Devuelve un array con 3 numeros aleatorios del 0 hasta el 255
    function getRandomColor() {
        return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
    }

    function crearBoton(){
        if (txtNumeroBotones.value > 0){
            for (let n = 0; n < txtNumeroBotones.value; n++) {
                let btn = document.createElement("button")
                let color = getRandomColor()
                btn.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
                //Le agrego un atributo de tipo name con el nombre btnGenerado para su localizacion
                btn.setAttribute("name", "btnGenerado");
                btn.textContent = "rgb(" + color[0] + "), (" + color[1] + "), (" + color[2] + ")"
                //Le añado un event listener q cuando haga click la pantalla cambie de color
                btn.addEventListener("click", () => {
                    document.body.style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
                })
                //Añado detras del btn 'crearBotones' el nuevo btn creado
                btnCrearBotones.insertAdjacentElement("afterend", btn);
            }
        }
    }

    function reiniciar(){
        let btns = document.querySelectorAll('[name="btnGenerado"]');
        if (btns.length > 0){
            //Obtengo todos los buttons con la etiqueta name=btnGenerado, y las voy recorriendo y eliminando
            for(let btn of btns){
                btn.remove();
            }
        }
        //Codigo RGB del blanco
        document.body.style.background = `rgb(255, 255, 255)`;
    }
    
    btnCrearBotones.addEventListener("click", crearBoton)
    btnReiniciar.addEventListener("click", reiniciar)
}