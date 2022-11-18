const express = require('express');

const server = express();

//Query Params = ?nome=NodeJs
//Route Params = /curso/2
//Request Body = { nome: 'NodeJs', tipo: 'Backend'}

//localhost:3000
server.get('/cursos/:id', (req, res) => {
//Query Params const nome = req.query.nome;
//Route Params const nome = req.query.id;
//Request Body

 const nome = req.query.id;
    return res.json({curso: `id curso ${id}`});
})

server.listen(3000);