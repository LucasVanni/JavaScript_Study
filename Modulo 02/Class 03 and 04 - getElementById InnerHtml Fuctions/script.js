let titulo = document.getElementById("titulo");

titulo.innerHTML = "Segundo Título";

let campo = document.getElementById('campo');

campo.placeholder = "Nome do usuário";


function alterar() {
    document.getElementById('titulo').innerHTML = "Paçoca";
    document.getElementById('campo').value = 'É uma delícia';
}

function alterarComProp(prop) {
    document.getElementById('titulo').innerHTML = prop;
    document.getElementById('campo').value = prop;
}

function somar(x, y) {
    document.getElementById('campo').value = x + y;
}

function somarComRetorno(x, y) {
    return x + y;
}

let result = somarComRetorno(10,15);

console.log(result);

function clicou(botao) {
    document.getElementById('titulo').innerHTML = "Clicado"
    botao.innerHTML = 'Clicou'
    // alert("Você clicou no botão")
}