let nome = "Lucas Vanni";

let result = "";

console.log(nome.length);

if (nome.indexOf('Vanni')) {
    result = "Achou!";
} else {
    result = 'Não Achou!';
}

console.log(result);

let resultado = nome.slice(0, 10);

console.log(resultado)