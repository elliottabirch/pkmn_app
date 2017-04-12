const express = require('express');
const path = require('path');

const db = require('../db/db.js');
const router = require('./routes');

const app = express();

const port = process.env.PORT || 3001;


require('./middleware')(app);
app.use('/', express.static(path.join(__dirname.slice(0, -7), 'build')));

app.use(router);


db.on('error', (err) => {
  console.error(`there was an error; ${err}`);
});
db.once('open', () => {
  console.log('connected to DB');
  app.listen(port, (err) => {
    if (err) { throw err; }
    console.log(`connected to server on port ${port}`);
  });
});

