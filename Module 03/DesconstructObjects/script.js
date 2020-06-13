let pessoa = {
    nome: 'Lucas',
    sobrenome: 'Vanni',
    // idade: 90,
    social: {
        facebook: 'Lucas',
        instagram: 'LucasV'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

// let { nome, sobrenome:segundoNome, idade = 23, social: { instagram, facebook }} = pessoa;
//
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// console.log(pessoa.nomeCompleto());
//
// console.log(nome, segundoNome, idade, instagram, facebook);

const pegarNomeCompleto = ({nome, sobrenome}) => `${nome} ${sobrenome}`



console.log(pegarNomeCompleto(pessoa));