var mongoose = require("mongoose")

var Schema = mongoose.Schema

var ObraSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    anoCriacao: {
        type: String,
        required: true
    },
    periodo: {
        type: String,
        required: true
    },
    compositor: {
        type: String,
        required: true
    },
    duracao: {
        type: String,
        required: true
    }
})

var ObrasSchema = new Schema({
    obras: [ObraSchema]
})

module.exports = mongoose.model("obra", ObrasSchema)
