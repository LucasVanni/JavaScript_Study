const adicionar = (...numeros) => {
    console.log(numeros);
}


adicionar(5, 6, 7, 8, 9, 10);

const adicionarNomes = (...nomes) => {
    console.log(nomes);
}

adicionarNomes("Lucas", "Francisco")




const adicionarNomesEx = (nomes,...novosNomes) => [...nomes, ...novosNomes]


let nomes = ["Lucas", "Bonieky"];

let outros = adicionarNomesEx(nomes, "João", "Maria", "José");

console.log(outros)