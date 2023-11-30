"use strict"
{
    /**
     * En un vector de números, indicar: 
        a. El número de elementos del vector.
        b. Cuántos son pares y cuántos impares y cuáles son.
        c. La suma de todos los números negativos.
        d. El producto de todos los números positivos.
        e. Cuántos son primos y cuáles son.
        f. Los números que ocupan las posiciones pares del vector.
        g. El número mayor.
        h. El número menor.
        i. La media de todos los números, los números que están por encima y los que están por 
        debajo.
        j. El vector ordenado de mayor a menos y viceversa.
        k. Buscar un valor introducido por el usuario e indicar si existe o no.
     */

        function funcionArrays(array){
            //a. El número de elementos del vector.
            console.log(array.length)
            
            //b. Cuántos son pares y cuántos impares y cuáles son.
            let pares = [];
            let impares = [];
            for (const num of array) {
                if (num % 2 === 0) {
                    pares.push(num);
                } else {
                    impares.push(num);
                }
            }
            console.log("Pares: " + pares)
            console.log("Impares: " + impares)

            //c. La suma de todos los números negativos.
            console.log(array.reduce((acumulador, num) => (num < 0 ? acumulador + num : acumulador), 0));
            
            //d. El producto de todos los números positivos.
            console.log(array.reduce((acumulador, num) => (num > 0 ? acumulador * num : acumulador), 1));

            //e. Cuántos son primos y cuáles son.

            //f. Los números que ocupan las posiciones pares del vector.
            console.log(array.filter((_, index) => index % 2 === 0));
            
            //g. El número mayor.
            console.log("g: " + Math.max(...array));
            
            //h. El número menor.
            console.log("h: "+Math.min(...array));
            
            //i. La media de todos los números, los números que están por encima y los que están por debajo.
            console.log(array.reduce((acumulador, num) => acumulador + num, 0) / array.length)
            
            //j. El vector ordenado de mayor a menos y viceversa.
            console.log(array.sort((a,b) => a - b))
            console.log(array.sort((a,b) => b - a))
            
            //k. Buscar un valor introducido por el usuario e indicar si existe o no.
     

        }


        funcionArrays([1,2,3,4,16,5,6,7,8,9])
}