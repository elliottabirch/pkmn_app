const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pkmnnames');
const db = mongoose.connection;

module.exports = db;
