/**
 * 1. Criar uma função somar como exemplo somar(3)(4)(5)
 * 2. Criar função que receba dois parâmetros e a função para calculo
 */

function somar(a){
    return function(b) {
        return function (c) {
            return a+b+c
        }
    }
}

const somarResultado = somar(2)(4)(24);
console.log(somarResultado);



function soma(a, b) {
    return a+b
}
function subtrai(a, b) {
    return a-b
}
function divide(a, b) {
    return a/b
}
function multiplica(a, b) {
    return a*b
}


const calcular = (a)=>{
    return (b) => {
        return(fn) => {
            return fn(a, b)
        }
    }
}

console.log(calcular(2)(4)(soma))
console.log(calcular(2)(4)(subtrai))
console.log(calcular(2)(4)(divide))
console.log(calcular(2)(4)(multiplica))