const Cidade     = require('../models/Cidade');
const CidadeView = require('../views/CidadeView');

module.exports = {
  async index(request, response, next) {
    try {
      const cidades = await Cidade.find();

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
      const cidade = await Cidade.create(request.body);
      
      response.json(CidadeView.render(cidade));
    } catch(error) {
      next(error);
    }
  },
  async update(request, response, next) {
    try {
      const { id } = request.params;
      const cidade = await Cidade.findByIdAndUpdate(
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
      const cidade = await Cidade.findByIdAndRemove(id);

      response.json(CidadeView.render(cidade));
    } catch(error) {
      next(error);
    }
  },
}