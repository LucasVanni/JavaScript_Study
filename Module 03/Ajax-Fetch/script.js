// // With fetch we get a promise
// fetch('https://alunos.b7web.com.br/api/ping')
//     .then( r =>  r.json() )
//     .then( json => console.log(json) )
//     .catch( error => error.json() )

const requisitar = () => {
    const url = 'https://alunos.b7web.com.br/api/ping';

    fetch(url)
        .then(r => r.json())
        .then(json => console.log(json));

    console.log('Alguma coisa')
};

const requisitar2 = async () => {
    const url = 'https://alunos.b7web.com.br/api/ping';

    return await fetch(url);
}


requisitar();

requisitar2().then(r => r.json()).then( json => {
    console.log(json)
    console.log('Alguma coisa');
});

