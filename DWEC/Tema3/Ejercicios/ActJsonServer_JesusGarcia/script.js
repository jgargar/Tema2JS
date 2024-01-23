"use strict"
{
    /** 
     * Dado el archivo db.json, arrancar el servidor json-server para servir dicho json.
     *
     * Tarea 1: crear un botón que se llame "cargar imágenes" que muestre las imágenes de todos los usuarios en etiquetas img
     * Tarea 2: crear un botón que se llame "añadir usuario" para añadir un nuevo usuario con datos reales tuyos; ponte el id=4
     * Tarea 3: crear un botón que se llame "modificar imágenes" para modificar las imágenes de todos los usuarios poniéndoles a
     *          todos la imagen del 1º de ellos. No modifiques el resto de campos.
     * Tarea 4: crear un botón que se llame "modificar nombre" modificar el nombre de tu usuario que has creado en la tarea 2:
     *          añádete tu primer apellido tras el nombre
     * Tarea 5: crear un botón que se llame "eliminar héroe" para eliminar el 2º superhéroe.
     *
     * NOTA: te recomiendo encarecidamente que, antes de ejecutar tu programa, hagas copia de seguridad del archivo db.json, por lo que pueda pasar.
     */
    const usuarios = "http://localhost:3000/usuarios"
    const heroes = "http://localhost:3000/heroes"

    //Tarea 1
    let btnCargarImagenes = document.createElement("button")
    btnCargarImagenes.textContent = "Cargar imagenes"
    btnCargarImagenes.addEventListener("click", () => {
        fetch(usuarios)
        .then(response => response.json())
        .then(data => {
          data.forEach(user => {
            const img = document.createElement('img')
            img.src = user.foto
            document.body.appendChild(img)
          })
        })
    })
    document.body.append(btnCargarImagenes)

    //Tarea 2
    let btnAniadirUsuario = document.createElement("button")
    btnAniadirUsuario.textContent = "Añadir mi Usario"
    btnAniadirUsuario.addEventListener("click", () => {
        //Primero creo el usuario
        const miUsuario = {
            id: "4",
            usuario: 'Jesus',
            email: 'jdgarciaa11@gmail.com',
            foto: 'https://media.licdn.com/dms/image/D4D03AQEoAfe-P2HfLg/profile-displayphoto-shrink_400_400/0/1643188498565?e=1711584000&v=beta&t=CK7xJ-_Y6j9OqoqjuoLEmFY8YVFIGc6dFip_wCG3FGk',
        }
        //Depues hago un fetch
        fetch(usuarios,{
            method: "POST",
            body : JSON.stringify(miUsuario),
            headers: {'Content-type': 'application/json'}
        })
        .then(function(response){
            //Rescato la respuesta para ver si se ha insertado correctamente
            console.log(response.status)
            if(response.ok){
                return response.json()
            }
        })
        .then(console.log)
        .catch(error => console.log(error)) //Capturo los error que pueda ocasionar
    })
    document.body.append(btnAniadirUsuario)

    //Tarea 3
    let btnModificarImagenes = document.createElement("button")
    btnModificarImagenes.textContent = "Modificar Imagenes"
    btnModificarImagenes.addEventListener("click", () => {
        fetch(usuarios)
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                fetch(usuarios + "/" + user.id,{
                    method: 'PATCH',
                    body : JSON.stringify({ foto : data[0].foto }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then(function(response){
                    //Rescato la respuesta para ver si se ha insertado correctamente
                    console.log(response.status)
                    if(response.ok){
                        return response.json()
                    }
                })
                .then(console.log)
                .catch(error => console.log(error))
            })
        })
    })
    document.body.append(btnModificarImagenes)

    //Tarea 4
    let btnModificarNombre = document.createElement("button")
    btnModificarNombre.textContent = "Modificar mi nombre"
    btnModificarNombre.addEventListener("click", () => {
        fetch(usuarios + "/4",{
            method: 'PATCH',
            body : JSON.stringify({ nombre : "Jesus Garcia" }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(function(response){
            //Rescato la respuesta para ver si se ha insertado correctamente
            console.log(response.status)
            if(response.ok){
                return response.json()
            }
        })
        .then(console.log)
        .catch(error => console.log(error))
    })
    document.body.append(btnModificarNombre)

    //Tarea 5
    let btnEliminarHeroe = document.createElement("button")
    btnEliminarHeroe.textContent = "Eliminar heroe"
    btnEliminarHeroe.addEventListener("click", () => {
        fetch(heroes + "/2",{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(function(response){
            //Rescato la respuesta para ver si se ha insertado correctamente
            console.log(response.status)
            if(response.ok){
                return response.json()
            }
        })
        .then(console.log)
        .catch(error => console.log(error))
    })
    document.body.append(btnEliminarHeroe)
    
}