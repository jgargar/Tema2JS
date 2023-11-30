"Use strict"

function numerosEntreNumero(num1, num2){
    for (let index = num1; index <= num2; index++) {
        console.log(index);
    }
}

let numero1, numero2;
numero1=parseInt(prompt("Introduce un numero",""));
numero2=parseInt(prompt("Introduce otro numero",""));

// Llamamos a la funcion creada anteriormente.
numerosEntreNumero(numero1, numero2);