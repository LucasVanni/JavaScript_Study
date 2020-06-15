const fazer = () => {
    return new Promise((resolve, reject) => {

        // O setTimeout é só para criar uma espera falsa
        setTimeout(() => {
            resolve('OK');
        }, 3000)
    });
};

fazer().then( resp => {
    console.log(resp)
})