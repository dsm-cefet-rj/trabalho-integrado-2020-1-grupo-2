const Nota     = require('../models/Nota');
const Cidade   = require('../models/Cidade');
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
      const nota   = await Nota.create({
        ...request.body,
        created: Date.now(),
      });
      const cidade = await Cidade.findById(nota.idCidade);

      await cidade?.updateOne({
        notas: [...cidade.notas, nota._id],
      });

      response.json(NotaView.render(nota));
    } catch(error) {
      next(error);
    }
  },
  async update(request, response, next) {
    try {
      const { id } = request.params;
      const nota   = await Nota.findById();

      nota?.updateOne(id, request.body, {new: true});

      response.json(NotaView.render(nota));
    } catch(error) {
      next(error);
    }
  },
  async destroy(request, response, next) {
    try {
      const { id } = request.params;
      const nota   = await Nota.findById(id);

      nota?.deleteOne();

      response.json(NotaView.render(nota));
    } catch(error) {
      next(error);
    }
  },
}