const config          = require('./config.json');
const express         = require('express');
const mongoose        = require('mongoose');
const routes          = require('./routes');
const cors            = require('cors');
const errorHandler    = require('./middlewares/errrorHandler');
const notFoundHandler = require('./middlewares/notFoundHandler');

mongoose.connect(
  config.mongoURL,
  {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Connected to MongoDB');
  },
);

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(config.port, () => {
  console.log(`Server listening on port: ${config.port}`);
});