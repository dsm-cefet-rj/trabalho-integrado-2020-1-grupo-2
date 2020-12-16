const mongoose = require('mongoose');

const CidadeSchema = mongoose.Schema({
  _id: {
    type:     mongoose.Types.ObjectId,
    required: true,
  },
  name: {
    type:     String,
    required: true,
  },
  latitude: {
    type:     Number,
    required: true,
  },
  longitude: {
    type:     Number,
    required: true,
  },
  notas: [{
    type:     mongoose.Types.ObjectId,
    ref:     'Cidades',
  }],
});

module.exports = mongoose.model('Cidade', CidadeSchema);