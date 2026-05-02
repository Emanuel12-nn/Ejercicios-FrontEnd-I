let numero = document.getElementById('contador')
let btnAumentar = document.getElementById('aumentar')
let btnDisminuir = document.getElementById('disminuir')
let btnResetear = document.getElementById('resetear')

let cuenta = 0;

const valoresVerdes = [6, 11, 24, 27] 
let colorFondoOriginal = document.body.style.backgroundColor

function verificarColorFondo(valor) {
    if (valoresVerdes.includes(valor)) {
        document.body.style.backgroundColor = '#90EE90'
    } else {
        document.body.style.backgroundColor = colorFondoOriginal
    }
}

function aumentar() {
    cuenta++;
    document.getElementById("contador").innerHTML = cuenta;
    let valor = cuenta;
    if (valor >= 0) {
        numero.style.color = 'black'
    }
    if (valor > 9) {
        numero.style.color = 'blue'
    } 
    if (valor == 6 || valor == 11 || valor == 24 || valor == 27) {
        numero.style.color = 'green'
    }
    verificarColorFondo(valor)
}

function disminuir() {
    cuenta--;
    document.getElementById("contador").innerHTML = cuenta;
    let valor = cuenta;
    if (valor <= -1) {
        numero.style.color = 'red'
    }
    if (valor < 10 && valor > 0) {
        numero.style.color = 'black'
    }
    verificarColorFondo(valor)
}

function resetear() {
    cuenta = 0;
    document.getElementById("contador").innerHTML = cuenta;
    numero.style.color = 'green'
    verificarColorFondo(0)
}

btnAumentar.addEventListener('click', aumentar);
btnDisminuir.addEventListener('click', disminuir);
btnResetear.addEventListener('click', resetear);


