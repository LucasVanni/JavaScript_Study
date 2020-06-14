let numeros = [1, 2, 3, 4];

let outros = [...numeros, 5, 6, 7, 8];

console.log(outros);

let info = {
    nome: 'Lucas',
    sobrenome: 'Vanni',
    idade: 23,
};

let novaInfo = {
    ...info,
    cidade: 'Macatuba',
    estado: 'São Paulo',
    pais: 'Brasil'
};

console.log(novaInfo);

const adicinarInfo = (info) => ({
        ...info,
        status: 0,
        token: 'dsadsadsad',
        dataCadastro: '...'
    })

console.log(adicinarInfo({
    nome: 'Lucas',
    sobrenome: 'Vanni',
    cpf: '44430765812'
}));