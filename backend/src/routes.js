const { Router } = require('express');
const passport   = require('passport');

const CidadeController = require('./controllers/CidadeController');
const NotaController   = require('./controllers/NotaController');
const UserController   = require('./controllers/UserController');
const loginHandler     = require('./middlewares/loginHandler');
const home             = require('./middlewares/home');

const routes = Router();

routes.get('/OAuth/google/login',    passport.authenticate('google', 
  {
    scope:
      [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ]
  }
));
routes.get('/OAuth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('http://localhost:3000/dashboard');
  }
);

routes.get('/logout', (request, response) => {
  request.logout();
  response.redirect('http://localhost:3000');
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

routes.get   ('/users',       loginHandler, UserController.index     );
routes.get   ('/users/:id',   loginHandler, UserController.show      );
routes.post  ('/users',       loginHandler, UserController.store     );
routes.put   ('/users/:id',   loginHandler, UserController.update    );
routes.delete('/users/:id',   loginHandler, UserController.destroy   );

routes.get('/', home);

module.exports = routes;