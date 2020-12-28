const { Router } = require('express');
const passport   = require('passport');

const CidadeController = require('./controllers/CidadeController');
const NotaController   = require('./controllers/NotaController');
const loginHandler     = require('./middlewares/loginHandler');
const home             = require('./middlewares/home');

const routes = Router();

routes.get('/OAuth/google/login',    passport.authenticate('google', { scope: ['profile', 'email']}));
routes.get('/OAuth/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(request, response) {
    response.redirect('/good');
  }
);

routes.get('/logout', (request, response) => {
  request.session = null;
  request.logout();
});

routes.get   ('/cidades',     loginHandler, CidadeController.index   );
routes.get   ('/cidades/:id', loginHandler, CidadeController.show    );
routes.post  ('/cidades',     loginHandler, CidadeController.store   );
routes.put   ('/cidades/:id', loginHandler, CidadeController.update  );
routes.delete('/cidades/:id', loginHandler, CidadeController.destroy );

routes.get   ('/notas',       loginHandler, NotaController.index     );
routes.get   ('/notas/:id',   loginHandler, NotaController.show      );
routes.post  ('/notas',       loginHandler, NotaController.store     );
routes.put   ('/notas/:id',   loginHandler, NotaController.update    );
routes.delete('/notas/:id',   loginHandler, NotaController.destroy   );

routes.get('/', home);

module.exports = routes;