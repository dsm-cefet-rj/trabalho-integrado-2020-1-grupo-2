const mongoose = require('mongoose');

const CidadeSchema = mongoose.Schema({
  weatherID: {
    type:     Number,
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
  idUsuario: {
    type:     mongoose.Types.ObjectId,
    required:  true,
  },
  notas: [{
    type:     mongoose.Types.ObjectId,
    ref:     'Nota',
  }],
});

module.exports = mongoose.model('Cidade', CidadeSchema);