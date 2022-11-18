const express = require('express');

const server = express();

server.use(express.json());

//Query Params = ?nome=NodeJs
//Route Params = /curso/2
//Request Body = { nome: 'NodeJs', tipo: 'Backend'}

const cursos = ['node JS', 'JavaScript'];

server.get('/cursos', (req, res)=>{
 return res.json(cursos)});
//localhost:3000
server.get('/cursos/:index', (req, res) => {
//Query Params const nome = req.query.nome;
//Route Params const nome = req.query.id;
    const {index} = req.params;
    return res.json(cursos[index]);

});

server.post('/cursos', (req, res)=>{
    const {name } = req.body;
    cursos.push(name);

    return res.json(cursos);
})

server.put('/cursos/:index', (req, res)=>{
    const {index} = req.params;
    const{name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

server.delete('/cursos/:index', (req, res)=>{
    const {index} = req.params;
    cursos.splice(index, 1);
    return res.json({ message: "curso deletado com sucesso"});
})

server.listen(3000);