"use strict"
{
    let formularioCompleto = document.getElementById("idForm1")
    console.log(formularioCompleto)
    console.log(formularioCompleto.nTexto.value)
    console.log(formularioCompleto.nUrl.value)
    console.log(formularioCompleto.nTexto.type)

    let inputText1 = document.getElementById("idTexto")
    console.log()

    inputText1.oninput = function(e){
        console.log(e.data)
        console.log(e.target.value)
    }

    inputText1.onChange = function(e){
        console.log(e.target.value)
    }

    let textArea = document.getElementsByName("nTextArea1")
    console.log(textArea[0].value)

    

}