const express = require("express");
const routes = express.Router();

routes.use(express.json());

const games = [
    'FIFA',
    'Strit Fighter',
    'PES',
    'Super Mario ',
    'GTA',
    'Sonic',
    'Mortal Combat',
    'Mario Card',
    'Free Fire',
    'Black',
    'FiFA Strit'

]

const msgInicio = [
    'Bem vindos',
    'Bem vindo ao servidor',
    'Servidor de jogos',
    'Este é o melhor servidor de jogos',
    'Curta os melhores jogos ',
    
];

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function frase(num) {
    return msgInicio[num];
}

//GET / home
routes.get('/', (req, res) => {
    res.send(`<h1>${frase(randomMinMax(0, msgInicio.length))}</h1>`);
});

routes.get('/games', (req, res) => {
    res.send(games);
});

routes.get('/games/:id', (req, res) => {
    const id = req.params.id - 1;
    const game = games[id];
    if (game) {
        res.send(game);
    } else {
        res.send('Jogo não encontrado.');
    }
});

routes.post('/games', (req, res) => {
    const game = req.body.game;
    games.push(game);
    const id = games.length;
    res.send(`O jogo ${game} foi adicionado. Ele possui o ID ${id}`);
});

routes.put('/games/:id', (req, res) => {
    const updateGame = req.body.game;
    const id = req.params.id - 1;
    games[id] = updateGame;
    res.send(`As informações do jogo foram atualizadas.`);
});

routes.delete('/games/:id', (req, res) => {
    const id = req.params.id - 1;
    delete games[id];
    res.send('O jogo foi deletado.');
});


module.exports = routes;
