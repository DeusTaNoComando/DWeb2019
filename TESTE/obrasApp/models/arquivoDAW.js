var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PartituraSchema = new Schema({
    voz: {type: String},
    type: {type: String},
    path: {type: String}
})

var InstrumentoSchema = new Schema({
    designacao: {type: String},
    partitura: [PartituraSchema]
})

var InstrumentosSchema = new Schema({
    instrumento: [InstrumentoSchema]
})

var ArquivoSchema = new Schema({
    id: {type: String, required: true},
    titulo: {type: String, required: true},
    tipo: {type: String, required: true},
    compositor: {type: String, required: true},
    arranjo: {type: String},
    instrumentos: [InstrumentosSchema]
})
module.exports = mongoose.model('Arquivo', ArquivoSchema,'arquivoDAW')