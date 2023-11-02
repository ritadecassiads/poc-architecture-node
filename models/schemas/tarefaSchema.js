const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TarefaSchema = new Schema({
    tarefaId: Number,
    titulo: { type: String, required:[true, "Titulo obrigatorio!"]},
    descricao: String,
    criadaEm: { type: Date, default: Date.now },
    concluirEm: Date,
    concluida: Boolean
})

module.exports = TarefaSchema