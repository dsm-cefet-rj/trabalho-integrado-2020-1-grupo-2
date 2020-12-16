const { Router } = require('express');

const CidadeController = 1;
const NotaController   = 1;

const routes = Router();

routes.post  ('/cidades', CidadeController);
routes.get   ('/cidades', CidadeController);
routes.put   ('/cidades', CidadeController);
routes.delete('/cidades', CidadeController);

routes.post  ('/notas', NotaController);
routes.get   ('/notas', NotaController);
routes.put   ('/notas', NotaController);
routes.delete('/notas', NotaController);

module.exports = routes;