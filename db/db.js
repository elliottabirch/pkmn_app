const mongoose = require('mongoose');

const DBUrl = process.env.MONGODB_URI || 'mongodb://localhost/pkmnnames';

mongoose.connect(DBUrl);
const db = mongoose.connection;

module.exports = db;
