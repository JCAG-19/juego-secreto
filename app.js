
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximoIntentos = 3;
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un Numero del 1 al 10'; 

function asiganarTextoElemento(elemento, texto) { // dentro de una funcion se puede colocar parametros para ser reutilizable
    //let titulo = document.querySelector('h1');
    //titulo.innerHTML = 'Juego del Número Secreto';
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    // se usa con la etiqueta del HTML
    //let numeroDeUsuario = document.querySelector('input');
    // se usa con la el imput de HTML pero con un ID
    //toma un numero de del imput pero es texto
    //let numeroDeUsuario = document.getElementById('valorUsuario').value;
    // toma un numero del imput de texto pero se convierte en numero entero
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //consolo imprime en pantalla consola y typeof me dice que tipo es lo escrito en el imput
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    // condicion de and si se cumple muestra true y si no false
    // == Igual, === estrictamente igual
    //console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {  // funcion ternaria ${(intentos === 1) ? 'vez' : 'vecez'} ? if, : else
        asiganarTextoElemento('p',`Acertastes el número en ${intentos} ${(intentos === 1) ? 'vez' : 'vecez'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asiganarTextoElemento('p','El número secreto es menor');
        } else {
            asiganarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() { // # para que el queryselecto diga que lo buscaremos por un ID del imput
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    //let numeroSecreto =Math.floor(Math.random()*10)+1;
    //return numeroSecreto;
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Si el número generaro está incluido en la lista
    // includes recore la lista y nos dice si esta y nos da un dato booleano false o true

    //si ya sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asiganarTextoElemento('p','Ya se sortearon todos los números');
    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            // push coloca el número al final que se genero e la lista
            listaNumerosSorteados.push(numeroGenerado);
           return numeroGenerado; 
         }
    }
    intentos++;
}

function condicionesIniciales() {
    asiganarTextoElemento('h1','Juego del Número Secreto');
    asiganarTextoElemento('p',`Indica un Numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja()

    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();

    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();