const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const TypeList = Schema({
  name: {
    type: String,
    unique: true,
  },
  half_damage_from: Array,
  no_damage_from: Array,
  half_damage_to: Array,
  double_damage_from: Array,
  no_damage_to: Array,
  double_damage_to: Array,
  moves: Array,
});

module.exports = mongoose.model('Type', TypeList);
