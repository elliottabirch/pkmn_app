const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function (app) {
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
  app.use(cors());
};
