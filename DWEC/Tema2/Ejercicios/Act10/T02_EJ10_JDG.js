"use sctrict"
{
    /**
     * Realiza un formulario donde se pueda introducir y enviar un DNI con letra. El formulario 
     * deberá validar si la letra es correcta al: 
     * a) Perder el foco del campo de texto donde se introduce el DNI. 
     * b) Enviar el formulario, cancelando el envío si el formato no es correcto. 
     */
    

    let form = document.querySelector("#idForm");
    const exregDni = /^[0-9]{8}[a-zA-Z]$/i
    const letrasDni = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']

    form.addEventListener("submit", function(evento){
        let txtDni = document.querySelector("#idDni")
        if(!validaDni(txtDni.value)){
            evento.preventDefault(); //Evita lo que hace por defecto
            alert("El DNI no es correcto")
        } else {
            //Para decirte que lo envia
            alert("Se va a enviar el form")
        }
    })

    function validaDni(texto){
        let res = false
        if (exregDni.test(texto)){
            if(validadorLetra(texto)){
                res = true
            }            
        }
        return res
    }

    function validadorLetra(dato){
        let dniNumero = parseInt(dato.slice(0,-1))
        let letraDniActual = dato.slice(-1)
        let division = dniNumero % 23
        return letrasDni.indexOf(letraDniActual) == division ? true : false
    }
}