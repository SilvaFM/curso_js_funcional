/**
 * Function Declaration:
 * A função pé construida e chamada de maneira explicita como no exemplo abaixo.
 */

function bomDia() {
    console.log('bom dia');
};
bomDia()

/**
 * Function Expression:
 * A função é atribuida de forma anônima a uma variável, possibilitando assim chamar essa variável como uma função.
 */

const boaTarde = ()=> console.log('Boa Tarde!!!');

boaTarde();

//No JS existe flexibilidade na passagem de parâmentros para a função como exemplificado abaixo:
function somar(a, b) {
    return a+b
};

console.log(somar(2,6)); //Aqui passamos o numero de parâmetros esperado e portanto executou dentro do esperado.
console.log(somar(2, 9, 45, 33, 23)); //Aqui, como passamos mais parâmetros do que o esperado, o JS usará os necessários e ignorará os demais.
console.log(somar(6)); //Aqui como não passamos os parâmetros necessários, o segundo será um undefined, portanto 6+undefined = NaN


//Pode-se usar a atribuição de parâmetro padrão como exemplificado abaixo:
function somar2(a, b=0) {
    return a+b
};
console.log(somar2(6)); //Embora tenhamos passado somente um parâmetro, o b assumiu o valor padrão de 0 evitando assim o "undefined".