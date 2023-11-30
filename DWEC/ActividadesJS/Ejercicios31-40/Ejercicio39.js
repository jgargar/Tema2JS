"use strict"
{
    /**
     * Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi 
     * Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true]
     */

    function eliminaDuplicados(array){
        let result = array.filter((item,index)=>{
            return array.indexOf(item) === index;
        })
        return result
    }

    console.log(eliminaDuplicados([1,2,34,5,6,6,6,7,7,7,8,8,8,8,88,98,99]))

}
