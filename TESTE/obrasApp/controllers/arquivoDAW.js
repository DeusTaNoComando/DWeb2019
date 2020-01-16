var Arquivo = require('../models/arquivoDAW')

module.exports.listar = () => {
    return Arquivo
        .find({},{id:true, titulo:true, tipo:true, compositor:true})
        .exec()
}

module.exports.consultar = pid => {
    return Arquivo
        .find({id: pid})
        .exec()
}

module.exports.listartipos = () => {
    return Arquivo
        .distinct("tipo")
        .exec()
}

module.exports.listarcompositor = comp => {
    return Arquivo
        .find({compositor: comp})
        .exec()
}