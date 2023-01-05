// formula de baskara

function somar(){

let a = window.document.getElementById('a')
let b = window.document.getElementById('b')
let c = window.document.getElementById('c')

a = a.value
b = b.value
c = c.value

var delta = b**2 - 4 * a * c
var raiz = Math.sqrt(delta)


const bask_1 = (- b + raiz ) / (2 * a)
const bask_2 = (- b - raiz) / (2 * a)
console.log(`${bask_1} e ${bask_2}`)
let resultado = window.document.getElementById('resultado')

resultado.innerHTML = `As raízes da equação são:${bask_1} e ${bask_2}`
}
