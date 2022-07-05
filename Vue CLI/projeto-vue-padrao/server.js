//Configurando o Express para entregar a versão de produção para o servidor

const express = require('express');
const app = express();

//Porta atribuida pela variavel de ambiente do heroku
const porta = process.env.PORT || 3000;



app.use(express.static(__dirname + '/dist/'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
});



app.listen(porta, function () {
    console.log('Servidor em web em execução')
});