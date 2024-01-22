"use strict"
{
    const btnAgregarTarea = document.querySelector('#btnAgregarTarea')

    function addTask() {
        //Rescato los valores
        const taskInput = document.getElementById('inputTask');
        const prioritySelect = document.getElementById('selectPrioridad');
      
        const taskText = taskInput.value;
        const priorityValue = prioritySelect.value;
        
        //Compruebo si la el texto tiene value 
        if (taskText === "") {
            alert("Tienes que escribir una tarea antes")
        } else {
            saveTask(taskText, priorityValue);
            taskInput.value = '';
        }
      
        
    }
      
    function saveTask(task, priority) {
        //Rescato todas las tasks
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        
        //Compruebo si tras rescatar las task tiene task o no
        if (tasks){
            //Añado la nueva task conjunto con su prioridad
            tasks.push({ task, priority });
        } else {
            //Si no tiene, digo que 'tasks' es un arry y le añado la tarea
            tasks = new Array()
            tasks.push({ task, priority })
        }

        //Por ultimo, los almaceno en el localStorage (previamente convirtiendolo a json)
        localStorage.setItem('tasks', JSON.stringify(tasks)); 

        //Las muestro
        loadTasks();
    }
      
    function loadTasks() {
        const taskList = document.getElementById('taskList');
        taskList.textContent = '';
        
        //Obtengo todas las tareas
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        if (tasks){
            //Lo ordeno por la prioridad
            tasks.sort((a, b) => {
                const priorityOrder = { alta: 1, media: 2, baja: 3 };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            });
            
            //Lo muestro
            tasks.forEach(task => {
                const taskElement = document.createElement('li');
                taskElement.textContent = task.task;
                taskElement.classList.add(task.priority);
                taskList.appendChild(taskElement);
            });
        }
        
    }

    //Evento para cuando inicies la pagina o la reinicies
    window.addEventListener("load", loadTasks)
    btnAgregarTarea.addEventListener("click", addTask)
}