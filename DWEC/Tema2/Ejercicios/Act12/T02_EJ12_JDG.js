"use sctrict"
{
    /**
     * Realiza un formulario que tenga dos campos de texto. Deberá validar antes de enviarse 
     * si uno de los campos es un anagrama del otro y enviarse solo si lo es. Se ignorarán 
     * mayúsculas, minúsculas y espacios. 
     * Para más información sobre que es un anagrama https://es.wikipedia.org/wiki/Anagrama
     */
    

    let form = document.querySelector("#idForm");

    form.addEventListener("submit", function(evento){
        let txtTexto1 = document.querySelector("#idTexto1")
        let txtTexto2 = document.querySelector("#idTexto2")
        if(!validaAnagrama(txtTexto1.value, txtTexto2.value)){
            evento.preventDefault(); //Evita lo que hace por defecto
            alert("Los textos no son correcto")
        } else {
            //Para decirte que lo envia
            alert("Se va a enviar el form")
        }
    })

    function validaAnagrama(texto1, texto2){
        let arrayTexto1 = texto1.toLowerCase().replaceAll(" ","").split("").sort()
        let arrayTexto2 = texto2.toLowerCase().replaceAll(" ","").split("").sort()
        //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every
        return arrayTexto1.length === arrayTexto2.length && arrayTexto1.every((element, index) => element === arrayTexto2[index])
        
    }
}