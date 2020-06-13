// let array = [
//     { nomeCompleto: 'Lucas Vanni' },
//     { nome: 'Lucas' },
//     { sobrenome: 'Vanni'},
//     { instagram: {
//           url: '@LucasV'
//     }}
// ];
//
// let [ {nomeCompleto}, {nome}, {sobrenome}, {instagram: {url: instagram}} ] = array;
//
// console.log( nomeCompleto, nome, sobrenome, instagram);

let [ {nomeCompleto}, {nome}, {sobrenome}, {instagram: {url: instagram}} ] = [
        { nomeCompleto: 'Lucas Vanni' },
        { nome: 'Lucas' },
        { sobrenome: 'Vanni'},
        { instagram: {
            url: '@LucasV'
        }}
    ];

console.log( nomeCompleto, nome, sobrenome, instagram);