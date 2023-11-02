// startar o servidor mongo: sudo systemctl start mongod
// ver se ta rodando: sudo systemctl status mongod

// ferramente que auxilia a manipulacao de dados no mongo
const mongoose = require('mongoose')

const URL = "mongodb://127.0.0.1:27017/taskManager"

const db = mongoose.connect(URL)

mongoose.connection.on('connected', () => {
    console.log('Conectado com o MongoDB!')
})
mongoose.connection.on('error', (erro) => {
    console.log('Erro: ' + erro)
})


module.exports = db