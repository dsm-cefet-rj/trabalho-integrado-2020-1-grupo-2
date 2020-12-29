const User       = require('../models/User');
const Cidade     = require('../models/Cidade');
const CidadeView = require('../views/CidadeView');

module.exports = {
  async index(request, response, next) {
    try {
      const cidades = await Cidade.find({idUsuario: request.user._id});

      response.json(CidadeView.renderMany(cidades));
    } catch(error) {
      next(error);
    }
  },
  async show(request, response, next) {
    try {
      const { id } = request.params;
      const cidade = await Cidade.findById(id).populate('notas');

      response.json(CidadeView.render(cidade));
    } catch(error) {
      next(error);
    }
  },
  async store(request, response, next) {
    try {
      const cidade = await Cidade.create({
        ...request.body,
        idUsuario: request.user._id,
      });

      const user   = await User.findById(request.user._id);

      await user?.updateOne({
        cidades: [...user.cidades, cidade._id],
      });
      response.json(CidadeView.render(cidade));
    } catch(error) {
      next(error);
    }
  },
  async update(request, response, next) {
    try {
      const { id } = request.params;
      const cidade = await Cidade.findById(id);

      cidade.updateOne(
        id,
        request.body,
        {new: true}
      );

      response.json(CidadeView.render(cidade));
    } catch(error) {
      next(error);
    }
  },
  async destroy(request, response, next) {
    try {
      const { id } = request.params;
      const cidade = await Cidade.findById(id);

      cidade?.deleteOne();

      response.json(CidadeView.render(cidade));
    } catch(error) {
      next(error);
    }
  },
}