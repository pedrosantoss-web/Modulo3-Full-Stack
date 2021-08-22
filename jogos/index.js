const express = require('express');
const app = express();
const routes = require('./config/routes')
const port = 3000;


app.use(routes)

app.listen(port, function() {
    console.info(`Rodando na porta http://localhost:${port}/`);
});