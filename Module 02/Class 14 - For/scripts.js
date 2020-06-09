let text = '';

for(let i = 0; i <= 50; i++) {
    text = `${text} ${i} <br/>`;
}

document.getElementById('demo').innerHTML = text;

let html = '<ul>';
let carros = ['Fusca', 'Palio', 'Corolla', 'Fusion', 'Galardo'];

for (let i in carros){
    html += `<li> ${carros[i]} </li>`
}

html += '</ul>'

document.getElementById('carros').innerHTML = html;

