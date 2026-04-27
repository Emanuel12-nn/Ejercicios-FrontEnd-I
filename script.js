let numero = document.getElementById('contador')
let aumentar = document.getElementById('aumentar')
let disminuir = document.getElementById('disminuir')
let resetear = document.getElementById('resetear')

const valoresVerdes = [6, 11, 24, 27] 
let colorFondoOriginal = document.body.style.backgroundColor

function verificarColorFondo(valor) {
    if (valoresVerdes.includes(valor)) {
        document.body.style.backgroundColor = '#90EE90'
    } else {
        document.body.style.backgroundColor = colorFondoOriginal
    }
}

aumentar.addEventListener('click', () => {
    numero.innerHTML = parseInt(numero.innerHTML) + 1
    let valor = parseInt(numero.innerHTML)
    
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
})

disminuir.addEventListener('click', () => {
    numero.innerHTML = parseInt(numero.innerHTML) - 1
    let valor = parseInt(numero.innerHTML)
    
    if (valor <= -1) {
        numero.style.color = 'red'
    }
    if (valor < 10 && valor > 0) {
        numero.style.color = 'black'
    }
    
    verificarColorFondo(valor)
})

resetear.addEventListener('click', () => {
    numero.innerHTML = 0
    if (numero.innerHTML == 0) {
        numero.style.color = 'green'
    }
    verificarColorFondo(0)
})


