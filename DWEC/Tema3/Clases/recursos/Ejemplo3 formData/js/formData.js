"use strict" 
{

    let formulario = document.querySelector("#idFormulario");

    const datos = new FormData (formulario); // clave : valor
    console.log("nombre de usuario: " + datos.get("nombre")); // la clave es el name
    console.log("la edad del usuario : " + datos.get("edad"));
    console.log("el email del ususario: " + datos.get("email"));


    console.log("\n\n");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("funciona");
      
        const datos = new FormData(formulario);
        console.log("nombre de usuario: " + datos.get("nombre")); // la clave es el name
        console.log("la edad del usuario : " + datos.get("edad"));
        console.log("el email del usuario: " + datos.get("email"));
      

        // Incluso puede añadirle más campos a mano, con append.
        datos.append("dni", "11222333P") ;
        datos.append("direccion", "calle del contubernio 49, bajo interior");
        
        for (let campo of datos.values()) { // Itera sobre todos los campos  y devuelve el valor
            console.log(campo);
        }
      
        for (let campo of datos.entries()) { // Itera sobre todos los campos y devuelve la pareja campo:valor en forma de array [clave, valor]
            console.log(campo);
        }
      });


    
}