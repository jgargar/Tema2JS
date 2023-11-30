"use strict"
{
    const datos = [
        {nombre:"Ana Perez Soler", DNI:"21147465T", edad: 4},
        {nombre:"Jesús García García", DNI:"49128307P", edad: 21},
        {nombre:"Álvaro García Castro", DNI:"456373448912L", edad: 9},
        {nombre:"Paloma González Máxim", DNI:"24545535G", edad: 32},
        {nombre:"Alberto Alguacil Alcalde", DNI:"797530W", edad: 17}
    ] 
    /*
     * Crea una función que reciba como parámetro el array original y devuelva un array
     * con los identificadores de los usuarios. Para ello debes coger la primera letra
     * (minúsculas y sin tildes) del nombre, las tres primeras letras del primer apellido
     * (minúsculas y sin tildes), las tres primeras del segundo apellido (minúsculas y sin
     * tildes) y los tres últimos dígitos del DNI. Usa la función map.(3p)
     * NOTA: Se entiende que los nombres y los apellidos no son compuestos y todos
     * tienen tres o más caracteres.
     */

    let resultProblema1 = datos.map(function(dato){
        let nombre = dato.nombre.toLowerCase().split(" ")
        let dni = dato.DNI.slice(0, -1)
        let sol = nombre[0].substring(0, 1).concat(nombre[1].substring(0, 3), nombre[2].substring(0, 3), dni.slice(-3));
        return sol;
    })

    console.log(resultProblema1);


    /**
     * Crea una función que reciba como parámetro el array original y devuelva un array
     * con los DNI que sean válidos. NOTA: Los DNI pueden tener la letra en mayúscula o
     * minúscula pero no tienen un separador entre número y letra. Usa la función filter y
     * map. (3p)
     */    
    const dniRegex = /^[0-9]{8}[a-zA-Z]$/i

    let datosDniValido = datos.filter(dato => dniRegex.test(dato.DNI))
    
    let resultProblema2 = datosDniValido.map((dato) => dato.DNI)
    
    console.log(resultProblema2);

    /**
     * Crea una función que reciba como parámetro el array original y devuelva un array
     * con los objetos ordenados por edad de mayor a menor. NOTA: Usar la función sort.
     * (2p)
     */

    let resultProblema3 = datos.sort((a, b) => b.edad - a.edad );

    console.log(resultProblema3)

    /**
     * Crea una función que reciba como parámetro el array original y devuelva un array
     * con las edades que sean números casi primos (es un número que solo es divisible
     * por sí mismo, la unidad y por un solo número que no sea ni la unidad ni si mismo).
     * Usa la función filter y map. (2p)
     */

    function devuelveNumero(numero){
        let cont = 0;
        for(let i = 1; i <= numero; i++){
            if(numero % i == 0){
                cont++;
            }
        }
        return cont;
    }

    let datosEdadCasiPrima = datos.filter(dato => devuelveNumero(dato.edad) == 3)

    let resultProblema4 = datosEdadCasiPrima.map((dato) => dato.edad)

    console.log(resultProblema4)




     


}