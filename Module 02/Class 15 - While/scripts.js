let html = '';

let c = 0

while (c <= 10) {
    html += `Números: ${c} <br/>`
    c += 1;
}

document.getElementById('demo').innerHTML = html;