"use sctrict"
{
    /**
     * Realiza un formulario con dos elementos “select”. Al cambiar el primero, se actualizará 
     * el segundo. Al enviar el formulario, se comprobará que ambos han sido marcados. 
     * Cuando no tengan ninguna selección previa, los “select” mostrarán “Select no seleccionado”. <option value="">Elige una opción</option> 
     * Los valores del primer “select” serán “Alicante”, “Castellón”, “Valencia”. 
     * Por defecto no habrá ninguno seleccionado. 
     * Los valores del segundo “select” son: 
     *      ● Para Alicante: “Alicante Capital”, “Elche”, “Orihuela”. 
     *      ● Para Castellón: “Castellón Capital”, “Oropesa”, “Vinaroz”. 
     *      ● Para Valencia: “Valencia Capital”, “Torrent”, “Mislata”. 
     *      (Aquí saldrá por defecto seleccionado “Mislata”). (option selected)
     */

    let arraySelect1 = ["","Alicante", "Castellón", "Valencia"]
    let arrayAlicante = ["","Alicante Capital", "Elche", "Orihuela"]
    let arrayCastellon = ["","Castellón Capital", "Oropesa", "Vinaroz"]
    let arrayValecia = ["","Valencia Capital", "Torrent", "Mislata"]
    
    let select = document.createElement("select")
    select.setAttribute("name", "select1");
    select.setAttribute("id", "select1");
    select.setAttribute("required", "");
    
    arraySelect1.forEach(element => {
        let option = document.createElement("option")
        let optionTexto = " "
        option.setAttribute("value", element);
        if (element === ""){
            optionTexto = document.createTextNode("Select no seleccionado");
        } else {
            optionTexto = document.createTextNode(element);
        }
        option.appendChild(optionTexto);
        select.appendChild(option);
    }); 

    document.body.append(select)

    let valor = arraySelect1
}