let timer;

function start() {
    timer = setInterval(showTime, 1000);
}

function stop() {
    clearInterval(timer);
}

function showTime() {
    let d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    document.querySelector('.demo').innerHTML = `${hour}:${minutes}:${seconds}`;
}

setTimeout(() => {
    console.log('Hello');
}, 20)

/*
    O setTimeout -> Vai esperar um tempo e rodar a função ( Executa uma única vez )
    O setInterval -> Vai de x em x tempo rodar a função ( Não Para, a não ser que sja parado manualmente )
 */