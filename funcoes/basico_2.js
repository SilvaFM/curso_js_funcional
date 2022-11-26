//No JS é possível passar uma função como parâmetro para outra função:

function excutarQualquerCoisa(fn){
    typeof fn === 'function' ? fn() : console.log(`O parâmetro ${fn} do tipo ${typeof fn} não é uma função`);
};

const bomDia = () => {
    console.log('Bom dia')
};

excutarQualquerCoisa(bomDia);
excutarQualquerCoisa(3);




//Retornando uma função dentro de outra função

function calculaBits(base) {
    return function(exp) {
        return Math.pow(base, exp);
    };
};

const bits8 = calculaBits(8);// Aqui é armazenado o resultado da primeira função
console.log(bits8(2)); //Aqui é usado o retorno da primeira função para gerar o resultado.

const bits16 = calculaBits(16)(2); //Essa é a maneira de passar parâmetros encadeados.
console.log(bits16);
