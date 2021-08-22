const express = require('express')
const routes = express.Router()

routes.use(express.json());

const filmes = [
    'CLICK',
    'VINGADORES',
    'LIGA DA JUSTIÇA',
    'O INCRIVEL HULCK',
    'THOR',
    'VELOZES E FURIOSOS',
    'MINHA MÃE É UMA PEÇA',
    'HOMENS DE PRETO',
    'TAXI',
    'DURO DE MATAR'
];
// GET / HOME
routes.get('/', (req, res) => {
    res.send('Hello Bluemer!');
});

// ROTA ONDE ESTÃO TODOS OS FILMES 
routes.get('/filmes', (req, res) => {
    res.send(filmes);
});

// ROTA FILME(ID)
routes.get('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = filmes[id];

    if (filme) {
        res.send(filme);
    }
    res.send('Filme não encontrado');
});



// ROTA PARA CADASTRAR
routes.post('/filmes', (req, res) => {
    const filme = req.body.filme;
    filmes.push(filme);
    const id = filmes.length;

    res.send(`Filme adicionado com sucesso: ${filme}. O ID do filme é ${id}.`);
});

// ROTA PARA ATUALIZAR
routes.put('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = req.body.filme;

    filmes[id] = filme;
    res.send(`Filme atualizado com sucesso! ${id} - ${filme}`)
});

// ROTA PARA DELETAR
routes.delete('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    delete filmes[id];

    res.send('Filme excluído com sucesso!');
});



module.exports = routes