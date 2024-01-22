"use strict"
{
    //ejemplo1: string <-> json
    let a = "Hola Caracola"
    let textoJson = JSON.stringify(a)
    console.log(a)
    console.log(textoJson)
    let miInfoOriginal = JSON.parse(textoJson)
    console.log(miInfoOriginal)

    //ejemplo2: array <-> JSON
    let array = new Array()
    array[0] = "Hola Mundo"
    array[0] = "Hola Galaxia"
    let textoJson2 = JSON.stringify(array)
    console.log(array)
    console.log(textoJson2)
    let miInfoOriginal2 = JSON.parse(textoJson2)
    console.log(miInfoOriginal2)

    //ejemplo3: objeto literal <-> JSON

    let miObjetoLiteral = {
        nombre: "Jesus",
        edad: 22,
        dni: "49128307P"
    }

    let textoJson3 = JSON.stringify(miObjetoLiteral)
    console.log(miObjetoLiteral)
    console.log(textoJson3)

    let miObjetoLiteralOrigen = JSON.parse(textoJson3)
    console.log(miObjetoLiteralOrigen)


    //ejemplo: array objeto literales <-> JSON
    let arrayObjetoLiteral = new Array()
    arrayObjetoLiteral[0] = {
        nombre: "Nerea",
        edad: 20,
        dni: "49128308K"
    }
    arrayObjetoLiteral[0] = {
        nombre: "Jesus",
        edad: 22,
        dni: "49128307P"
    }

    let textoJson4 = JSON.stringify(arrayObjetoLiteral)
    console.log(arrayObjetoLiteral)
    console.log(arrayObjetoLiteral)

    let arrayObjetoLiteralOrigen = JSON.parse(textoJson4)
    console.log(arrayObjetoLiteralOrigen)

}