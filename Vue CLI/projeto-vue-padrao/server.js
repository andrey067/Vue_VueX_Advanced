//Configurando o Express para entregar a versão de produção para o servidor

const express = require('express');


const app = express();
//responder requisicoes feitas para o servidor web por meio da rota get

app.use(express.static(__dirname + '/dist/'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
});

app.listen(3000, function () {
    console.log('Servidor em web em execução')
});