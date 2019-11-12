var express = require('express');
var axios = require('axios');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  console.log("1")
  axios.get('http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ')
    .then(dados=>{
      res.render('entidades',{entidades:dados.data})
    })
    .catch(erro=>{
      res.render('error',{error:erro});
    })
});

// GET entidade.
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var entidade,tipologias,dono,participante;
  axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ')
  .then(dados=>{
    entidade=dados.data;
    axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ')
    .then(dados=>{
      tipologias=dados.data;
      axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ')
    .then(dados=>{
      dono=dados.data; 
      axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0ODgwMDgsImV4cCI6MTU3NjA4MDAwOH0.UD0UdMrzKcWDop8HlwqdeOuK_ZzZxHvOMOP2DMkIjUQ')
    .then(dados=>{
      participante=dados.data;
      res.render('entidade',{ent:entidade,tip:tipologias,dn:dono,par:participante})
    })
    .catch(erro=>{
      res.render('error',{error:erro});
    })
    })
    .catch(erro=>{
      res.render('error',{error:erro});
    })
    })
    .catch(erro=>{
      res.render('error',{error:erro});
    })
  
  })
  .catch(erro=>{
    res.render('error',{error:erro});
  })

});

module.exports = router;