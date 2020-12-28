const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  googleID: {
    type:     String,
    required: true,
  },
  email: {
    type:     String,
    required: true,
  },
  cidades: [{
    type:     mongoose.Types.ObjectId,
    ref:     'Cidade',
  }],
});

module.exports = mongoose.model('User', UserSchema);