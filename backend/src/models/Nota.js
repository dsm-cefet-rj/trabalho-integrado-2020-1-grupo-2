const mongoose = require('mongoose');

const NotaSchema = mongoose.Schema({
  name: {
    type:     String,
    required: true,
  },
  data: {
    type:     String,
    required: true,
  },
  visits: {
    type:     Number,
    required: true,
  },
  idCidade: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  created: {
    type:     Data,
    required: true,
  },
});

module.exports = mongoose.model('Nota', NotaSchema);