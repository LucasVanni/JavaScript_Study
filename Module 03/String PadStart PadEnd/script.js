let telefone = '5';

console.log(telefone.padEnd(9, '*'));

console.log(telefone.padStart(9, '&'));

// Máscara cartão
let creditCard = '1234123412341234';

let lastDigits = creditCard.slice(-4);

console.log(lastDigits.padStart(16, '*'));