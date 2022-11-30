const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'exibir.txt');

//QUando chamamos um callback ele trabalha de forma assincrona.
fs.readFile(caminho, {}, (err, data)=>{
    console.log(data.toString());
});

