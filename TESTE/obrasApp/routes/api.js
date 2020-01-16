var express = require('express');
var router = express.Router();
var Arquivo = require('../controllers/arquivoDAW')

router.get('/obras', (req,res)=>{
    Arquivo.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).send('Erro na listagem das obras'))
})

router.get('/obras/:id', (req,res)=>{
  Arquivo.consultar(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na consulta da obra'))
})

router.get('/tipos', (req,res)=>{
  Arquivo.listartipos()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem de tipos'))
})

router.get('/obras/compositor/:c', (req,res)=>{
  Arquivo.listarcompositor(req.params.c)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).send('Erro na listagem de compositores'))
})

module.exports = router;
