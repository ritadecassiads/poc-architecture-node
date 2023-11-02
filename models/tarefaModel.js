const mongoose = require('mongoose')
const TarefaSchema = require('./schemas/tarefaSchema')
module.exports = mongoose.model('tarefa', TarefaSchema)