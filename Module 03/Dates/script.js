let d = new Date();

// let newDate = d.toUTCString()

// console.log(d.toString());

// Métodos de pegar as informações da data

// let newDate = d.getFullYear();

// let newDate = d.getMonth();

// let newDate = d.getDay(); // Dia da Semana

// let newDate = d.getDate(); // Dia do mês

// let newDate = d.getHours();

// let newDate = d.getMinutes();

// let newDate = d.getSeconds();

// let newDate = d.getMilliseconds();

// let newDate = d.getTime();

// console.log(newDate);

// console.log(Date.now());

// Métodos para setar valores nas datas

d.setFullYear(2023);

d.setMonth(11);

d.setDate( d.getDate() + 7);

console.log(d);