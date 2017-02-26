const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PokemonList = Schema({
  forms: Array,
  abilities: Array,
  stats: Array,
  name: { type: String,
    unique: true },
  weight: Number,
  moves: Array,
  sprites: Array,
  held_items: Array,
  location_area_encounters: String,
  height: Number,
  is_default: Boolean,
  species: Array,
  id: Number,
  order: Number,
  game_indices: Array,
  base_experience: Number,
  types: Array,
});

module.exports = mongoose.model('Pokemon', PokemonList);
