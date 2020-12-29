const config          = require('./config.json');
const express         = require('express');
const mongoose        = require('mongoose');
const routes          = require('./routes');
const cors            = require('cors');
const passport        = require('passport');
const bodyParser      = require('body-parser');
const cookieSession   = require('cookie-session');
const errorHandler    = require('./middlewares/errrorHandler');
const notFoundHandler = require('./middlewares/notFoundHandler');

require('./passportSetup');

mongoose.connect(
  config.mongoDB.URL,
  {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
    useCreateIndex:     true,
  },
  () => {
    console.log('Connected to MongoDB');
  },
);

const app = express();

app.use(cors({
  origin: /localhost/,
  credentials: true,
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieSession({
  name:   'testando-sessao-cookie',
  maxAge: config.cookie.maxAge,
  keys:   config.cookie.keys,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(config.port, () => {
  console.log(`Server listening on port: ${config.port}`);
});