const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
];

const semEstoque = item => item.qtde === 0;
const emEstoque = item => item.qtde > 0;
const showNome = item => item.nome;

const showSemEstoque = carrinho.filter(semEstoque);
console.log(showSemEstoque);

const showEmEstoque = carrinho.filter(emEstoque)
console.log(showEmEstoque)

//é possivel concatenar várias funções em uma só chamada
const showItemNome = carrinho
    .filter(emEstoque)
    .map(showNome)

console.log(showItemNome)

