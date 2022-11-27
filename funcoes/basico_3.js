// ARROW FUNCTION

()=> console.log('Bom dia!') /**
    Apesa de válida, essa função nunca será executada pois não há como chamá-la, via de regra toda arrow function
    é anônima e necessita ser atribuida a algo para ser executada.
*/

const bomDia = () => console.log('Bom dia') /**
    O retorno da arrow function é implícito, a menos que a arrow function tenha uma abertura de corpo {}.
*/
bomDia()

const soma = numeros => { // Quando há somente um parâmetro pode-se passar sem os parênteses.
    let total = 0
    for(let i of numeros){
        total += i
    }
    return total
}
console.log(soma([1, 2, 3, 4, 5, 6]))

const soma2 = (...numeros) => { // Usando o rest operator.
    let total = 0
    for(let i of numeros){
        total += i}
    return total
}
console.log(soma2(2, 5, 9, 14))



// "arrow function no prototype"

//Como podemos ver abaixo o "this" se comporta de modo diferente quando usamos arrow function

Array.prototype.primeiro = function(){
    return this[0]
}
Array.prototype.ultimo = function(){
    return this[this.length - 1]
}

const newArr = [5, 6, 8, 3];
console.log(newArr.primeiro());
console.log(newArr.ultimo());


Array.prototype.segundo = ()=>{
    return this[1]
}
Array.prototype.penultimo = ()=> {
    return this[this.length - 2]
}

const newArray = [5, 6, 8, 3];
console.log(newArray.segundo());
console.log(newArray.penultimo());