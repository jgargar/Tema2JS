"use strict"
{
    let tablero;
    let j1 = 'X', j2 = 'O'

    /**
     * function iniciar
     * funcion que pregunta al usuario si jugara con la maquina o con otro usuario
     * despues comprobara que los datos
     */
    function iniciar(){
        let exit = true;
        alert("Bienvenido al tres en raya")
        do{
            let opc = prompt("¿Deseas jugar contra la maquina(m) o contra otro jugador(j)?")
            switch(opc){
                case 'j':
                    jugarContraOtroJugador();
                    exit = false;
                    break;
                case 'm':
                    jugarContraLaMaquina();
                    exit = false;
                    break;
                default : alert("Introduce m para jugar contra la maquina o j para jugar con otro jugador")
            }
        }while(exit)
    }

    /**
     * function crearTablero()
     * funcion que crea el tablero del 3 en raya
     */
    function crearTablero(){
        tablero = Array.from(Array(3), () => new Array(3))
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                tablero[i][j] = '-'
            }
        }
    }

    function jugarContraOtroJugador(){
        let fJ1, cJ1, fJ2,cJ2
        crearTablero();
        do{
            console.log(tablero)
            do{
                fJ1 = prompt("J1: Fila donde colocar la X")
                cJ1 = prompt("J1: Columan donde colocar la X")
            }while(compruebaPosicion(fJ1, cJ1))
            tablero[fJ1][cJ1] = j1
            do{
                fJ2 = prompt("J2: Fila donde colocar la O")
                cJ2 = prompt("J2: Columan donde colocar la O")
            }while(compruebaPosicion(fJ2, cJ2))
            tablero[fJ2][cJ2] = j2
            console.log(tablero)
        }while(compruebaJuego())
    }

    function jugarContraLaMaquina(){
        let fJ1, cJ1
        crearTablero();
        do{
            console.log(tablero)
            fJ1 = prompt("J1: Fila donde colocar la X")
            cJ1 = prompt("J1: Columan donde colocar la X")
            tablero[fJ1][cJ1] = j1
            tablero[fJ2][cJ2] = j2
            console.log(tablero)
        }while(compruebaJuego())
    }
    /**
     * function compruebaPosicion(f, c)
     * funcion que comprueba si la casilla es -
     * @param {integer} f 
     * @param {integer} c 
     * @returns 
     */
    function compruebaPosicion(f, c){
        return tablero[f][c] == '-' ? false : true
    }

    /**
     * function compruebaJuego
     * funcion que comprueba si se hizo el tren en raya o no
     */
    function compruebaJuego(){
        let valor = compruebaJuegoLinea();
        return false;
    }

    function compruebaJuegoLinea(){
        let linea = 0;
        let string = "", devuelve = "-";
        for(let i = 0; i < 3; i++){
            string =+ tablero[linea][i]
        }
        if (string == 'XXX'){
            devuelve = 'X'
        } else if (string == 'OOO'){
            devuelve = 'O'
        }
        return devuelve;
    }
    
    function compruebaJuegoColumna(){
        let columna = 0;
        let string, devuelve = "-";
        for(let i = 0; i < 3; i++){
            string =+ tablero[i][columna]
            if (string == 'XXX'){
                devuelve = 'X'
            } else if (string == 'OOO'){
                devuelve = 'O'
            }
            columna++;
        }
        return devuelve;
    }

    function compruebaJuegoDiagonal(){

    }

    function muestraTablero(){
        let tableroString;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                tableroString =+ tablero[i][j]
            }
            tableroString =+ "/n"
        }
        alert(tableroString)
    }


    iniciar();
}