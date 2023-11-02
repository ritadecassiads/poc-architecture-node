// gerenciador de rotas/requisições que chegarem para a entidade conteudo
// manda a requisição para a controller
const tarefaController = require('../controller/tarefaController')
const express = require('express')
const router = express.Router() // para fazer todo o processo de roteamento

router.post('/salvar', tarefaController.salvar)
router.get('/listar', tarefaController.listar)
router.get('/listar/:id', tarefaController.buscarPorId)
router.put('/atualizar/:id', tarefaController.atualizar)
router.put('/atualizar/:id/done', tarefaController.atualizarFeita)
router.delete('/excluir/:id', tarefaController.excluir)

module.exports = router