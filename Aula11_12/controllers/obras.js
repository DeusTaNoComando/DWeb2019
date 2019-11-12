var Obra = require("../models/obra")

module.exports.listar = () => {
    return Obra.find().exec()
}

module.exports.listarObrasAno = (ano) => {
    return Obra.find({ anoCriacao: ano }).exec()
}

module.exports.listarObrasCompositorDuracao = (compos, dur) => {
    return Obra.find({ $and: [{compositor: compos}, {duracao: { $gt: dur }}] }).exec()
}

module.exports.listarObrasPeriodo = (per) => {
    return Obra.find({ periodo: per }).exec()
}

module.exports.consultar = idnew => {
    return Obra.findOne({ id: idnew }).exec()
}
