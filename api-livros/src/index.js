const express = require('express');
const app =express();

app.use(express.json());

const livros = require("./livros.jsonn");

app.get('/livros', (request, response) =>{
    //const{ autor  } = request.query;
    return responnse.json( livros )
});

app.post('/livros', (request, response) =>{
    const { titulo, autor, anoPublicacao } = request.body;
    return response.json( { titulo: titulo, autor: autor, ano: anoPublicacao } )
});

app.put('/livros/:id', (request, response) => {
    const parametro = request.params;
    return reponse.json( parametro )
});

app.delete('/livros/:id', (request, response) =>{
    const { id } =request.params;
    return response.json( id )
});

app.listen(3000, () => console.log('Servidor na porta 3000'))
