const mongoose = require("mongoose");

const bootSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  preco: {
    type: String,
    require: true,
  },
  ano: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
});

const boots = mongoose.model('items',bootSchema)

module.exports = boots;
