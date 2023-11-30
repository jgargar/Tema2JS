"use sctrict"
{
    /**
     * Realiza un programa que cree 100 elementos “checkbox” con números aleatorios.
     * Además, la página tendrá un botón “Marcar todos” y un botón “Desmarcar todos”,
     * con su correspondiente funcionalidad.
     * 
     * - Los números aleatorios serán entre 100 y 200.
     * - Además, en cada checkbox hay que capturar el evento de change;
     * - si se marca el check, debe escribir por consola: "checkXXX marcado"
     * - Si se desmarca, debe escribir por consola: "checkXXX desmarcado" Siendo XXX un número del 0 al 100.
     * - Añade otro botón que le cambie el tamaño a los checks (CSS width y height) que tengan números pares.
     * - Y otro botón que le devuelva el tamaño inicial a los checks
     */

    const btnMarcarTodos = document.querySelector("#btnMarcarTodos")
    const btnDesmarcarTodos = document.querySelector("#btnDesmarcarTodos")
    const btnCambiarTamanio = document.querySelector("#btnCambiarTamanio")
    const btnRestaurarTamanio = document.querySelector("#btnRestaurarTamanio")
    const divCheckbox = document.getElementById("#divCheckbox")

    function getRandomNumber() {
        return Math.floor(Math.random() * 101) + 100;
    }

    // Función para crear checkboxes con números aleatorios
    function crearCheckboxes() {
        for (let i = 0; i < 100; i++) {
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'checkbox' + i;

            let label = document.createElement('label');
            label.htmlFor = 'checkbox' + i;
            label.appendChild(document.createTextNode(getRandomNumber()));

            div.appendChild(checkbox);
            div.appendChild(label);
      }
    }

    // Función para marcar todos los checkboxes
    function marcarTodos() {
        let listaCheckBox = document.querySelectorAll('input[type="checkbox"]');
        listaCheckBox.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    }

    // Función para desmarcar todos los checkboxes
    function desmarcarTodos() {
        let listaCheckBox = document.querySelectorAll('input[type="checkbox"]');
        listaCheckBox.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    }

    btnMarcarTodos.addEventListener("click", marcarTodos())
    btnDesmarcarTodos.addEventListener("click", desmarcarTodos())
    btnCambiarTamanio.addEventListener("click", aniadir)
    btnRestaurarTamanio.addEventListener("click", aniadir)

    crearCheckboxes();
}