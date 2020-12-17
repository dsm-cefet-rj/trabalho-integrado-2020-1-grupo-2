const Nota     = require('../models/Nota');
const NotaView = require('../views/NotaView');

module.exports = {
  async index(request, response, next) {
    try {
      const notas = await Nota.find();

      response.json(NotaView.renderMany(notas));
    } catch(error) {
      next(error);
    }
  },
  async show(request, response, next) {
    try {
      const { id } = request.params;
      const nota   = await Nota.findById(id);

      response.json(NotaView.render(nota));
    } catch(error) {
      next(error);
    }
  },
  async store(request, response, next) {
    try {
      const nota = await Nota.create(request.body);

      response.json(NotaView.render(nota));
    } catch(error) {
      next(error);
    }
  },
  async update(request, response, next) {
    try {
      const { id } = request.params;
      const nota   = await Nota.findByIdAndUpdate(id, request.body, {new: true});

      response.json(NotaView.render(nota));
    } catch(error) {
      next(error);
    }
  },
  async destroy(request, response, next) {
    try {
      const { id } = request.params;
      const nota   = await Nota.findByIdAndRemove(id);

      response.json(NotaView.render(nota));
    } catch(error) {
      next(error);
    }
  },
}