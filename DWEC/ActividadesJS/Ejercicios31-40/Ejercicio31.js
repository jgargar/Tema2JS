"use strict"
{
    /**
     * Programa una función que dada una fecha válida determine cuantos años han pasado hasta 
     * el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”) 
     */  
    function anioPasados(fecha){
        let anio;
        const fechaActual = new Date(Date.now())
        if(typeof fecha === "string"){
            let fechaString = new Date(Date.parse(fecha))
            anio = fechaActual.getFullYear() - fechaString.getFullYear() 
        } else {
            anio = fechaActual.getFullYear() - fecha.getFullYear()
        }
        return anio
    }

    console.log(anioPasados(new Date(1985,11,8)))
    console.log(anioPasados("11/01/2002"))
}