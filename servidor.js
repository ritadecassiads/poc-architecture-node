require('./db/mongo') //conectando com o mongo
const mongoose = require('mongoose')
const express = require('express')
const cors = require("cors");

const servidor = express() // inicialização do express
servidor.use(express.json()); // solicitações recebidas em json

// aceita requisição de qualquer IP
servidor.use(cors());

// mapear as rotas de cada entidade aqui no servidor
// gerenciar as rotas, encaminhar cada requisição para a router certa
const tarefaRouter = require('./routes/tarefaRouter')

servidor.use('/tarefas', tarefaRouter) // sempre que a rota for /tarefas ele vai usar a tarefaRoutes

servidor.listen(3000,
    function(){
        console.log("Servidor rodando na porta 3000")
    }  
)