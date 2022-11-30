

function exec(fn, x, y){
    return fn(x, y)
}

const somarNoTerminal = (w , z) => w + z;
const subtrairNoTerminal = (w , z) => w - z;


console.log(exec(somarNoTerminal, 56, 38));
console.log(exec(subtrairNoTerminal, 128, 27));
