var express = require('express')
var router = express.Router()
var Obras = require("../controllers/obras")

// Função que responde com um objeto JSON que indica um erro
function sendError(res, err) {
    res.status(500).jsonp({ error: err })
}

/*
    Pedidos GET
*/
// GET das obras
router.get("/obras", function (req, res, next) {
    if ("ano" in req.query) {
        Obras.listarObrasAno(req.query.ano)
            .then(obras => res.jsonp(obras))
            .catch((err) => {
                console.log(err)
                sendError(res, "Não consegui devolver obras")
            })
    }
    else if ("compositor" in req.query) {
            if ("duracao" in req.query) {
                Obras.listarObrasCompositorDuracao(req.query.compositor, req.query.duracao)
                    .then(obras => res.jsonp(obras))
                    .catch((err) => {
                        console.log(err)
                        sendError(res, "Não consegui devolver obras")
                    })
            }
    }
    else if ("periodo" in req.query) {
        Obras.listarObrasPeriodo(req.query.periodo)
            .then(obras => res.jsonp(obras))
            .catch((err) => {
                console.log(err)
                sendError(res, "Não consegui devolver obras")
            })
    }
    else {
        Obras.listar()
            .then(obras => res.jsonp(obras))
            .catch((err) => {
                console.log(err)
                sendError(res, "Não consegui devolver obras")
            })
    }
})

// GET de um prémio
router.get('/obras/:id', function (req, res, next) {
    Obras.consultar(req.params.id)
        .then(obras => res.jsonp(obras))
        .catch(err => {
            console.log(err)
            sendError(res, "Não consegui devolver a obra pedida")
        })
})

// Pedidos restantes
router.all("*", function (req, res, next) {
    sendError(res, "Path not found")
})

module.exports = router
