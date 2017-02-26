const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PokemonTable = Schema({
  moves: Array,
  name: { type: String, unique: true },
  order: Number,
  sprite: String,
  stats: Array,
  types: Array,
  abilities: Array,
});

module.exports = mongoose.model('SmallPokemon', PokemonTable);
