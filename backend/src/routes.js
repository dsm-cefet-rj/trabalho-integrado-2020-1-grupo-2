const { Router } = require('express');

const CidadeController = require('./controllers/CidadeController');
const NotaController   = require('./controllers/NotaController');
const home             = require('./middlewares/home');

const routes = Router();

routes.get   ('/cidades',     CidadeController.index   );
routes.get   ('/cidades/:id', CidadeController.show    );
routes.post  ('/cidades',     CidadeController.store   );
routes.put   ('/cidades/:id', CidadeController.update  );
routes.delete('/cidades/:id', CidadeController.destroy );

routes.get   ('/notas',     NotaController.index   );
routes.get   ('/notas/:id', NotaController.show    );
routes.post  ('/notas',     NotaController.store   );
routes.put   ('/notas/:id', NotaController.update  );
routes.delete('/notas/:id', NotaController.destroy );

routes.get('/', home);

module.exports = routes;