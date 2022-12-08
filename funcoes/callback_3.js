const { get } = require("https");

const numeros = [ 1, 2, 5, 6, 24 ];

//Aqui a função map passará por cada item do array e executará a calback determinada no corpo da função.
numeros.map((v)=>{
    console.log(v*2)
});


const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
];

const getName = item => item.nome
const getTotal = item => `${ item.nome }: ${ item.qtde * item.preco }`

console.log(carrinho.map((item)=> getName(item)));
console.log(carrinho.map((item)=> getTotal(item)));