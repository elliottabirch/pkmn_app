const express = require('express');

const db = require('../db/db.js');
const router = require('./routes');

const app = express();

require('./middleware')(app);

app.use('/', router);


db.on('error', (err) => {
  console.error(`there was an error; ${err}`);
});
db.once('open', () => {
  console.log('connected to DB');
  app.listen(3001, (err) => {
    if (err) { throw err; }
    console.log('connected to server on port 3001');
  });
});

