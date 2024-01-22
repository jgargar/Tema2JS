"use strict"
{
    // https://cors-anywhere.herokuapp.com/

//const imgURL = "https://iesmartinezm.es/wp-content/uploads/2020/05/ibo2-1e1591599064919.png";
const imgURL="https://iesmartinezm.es/wp-content/uploads/2023/11/20231129_200825-768x1024.jpg";


let btn = document.querySelector("#btn");

const createImgFromBlob = blob =>{ 
    const img = new Image();
    img.src = URL.createObjectURL(blob);
    return img;

}

const addToNode = elemento =>{
    document.body.appendChild(elemento);
}

const logStatus = response =>{
    console.log (response.status);
    console.log (response.statusText);//a veces aparece y otras no
    console.log (response.ok);//devuelve true si ok
    return response;
}
const checkResponse = response =>{
    if (!response.ok) 
        throw new Error ("Código del estado no encontrado");//envío errores para el catch final de la promesa
    return response;
}

btn.addEventListener("click", function (ev){
    //ev.preventDefault(); // no es necesario.
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    //accede primero a https://cors-anywhere.herokuapp.com/ o https://corsanywhere.herokuapp.com/corsdemo para habilitarlo de forma temporal
    
    fetch(corsAnywhere + imgURL, {  //Fetch puede tener un 2º parámetro para distintas configuraciones
    //fetch(imgURL, {
        //mode: 'no-cors',
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
    })
        .then (logStatus)
        .then(checkResponse)
        .then((response) => response.blob()) // .blob() sirve para acceder a un fichero binario
        .then(createImgFromBlob)
        .then(addToNode)
        .catch(ex => {
            console.log(ex);
            alert("No!!");
        })
    
}); 
 
 


}