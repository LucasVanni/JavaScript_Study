let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

let arrayToString = lista.toString();


let res = lista.join('-');



let numeros = [45, 4, 9, 16, 25];

let usuarios = [
    {id: 1, fistName: 'Lucas', lastName: 'Vanni'},
    {id: 2, fistName: 'Fabio', lastName: 'Melo'},
    {id: 3, fistName: 'Higor', lastName: 'Pacheco'},
    {id: 4, fistName: 'Carlos', lastName: 'Vanni'}
];

let lista2 = [];

    lista2 = usuarios.filter((item) => (item.lastName === 'Vanni'));

console.log(lista2);