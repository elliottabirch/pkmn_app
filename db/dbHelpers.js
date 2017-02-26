const PokemonTable = require('./Schema/pokemonTable');
const TypeList = require('./Schema/typeList');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function logError(e) {
  if (e) {
    console.error(e);
  }
}

const postNewPokemon = (req, res) => {
  for (const key in req.body) {
    const pokemon = new PokemonTable(req.body[key]);
    pokemon.save((e) => {
      logError(e);
      console.log(`${req.body[key].name}was saved to the DB`);
    });
  }
  res.send();
};

const getPokemon = (req, res) => {
  PokemonTable.find(req.query).exec((e, pokemon) => {
    logError(e);
    res.send(pokemon.map((pkmn) => {
      pkmn.name = capitalizeFirstLetter(pkmn.name);
      return pkmn;
    }));
  })
  .catch(e => console.log(e));
};

const postNewType = (req, res) => {
  for (let i = 0; i < req.body.length; i++) {
    request(req.body[i].url, (e, response, body) => {
      body = JSON.parse(body);

      logError(e);
      const storage = {};

      storage.moves = [];
      storage.name = body.name;

      for (const key in body.damage_relations) {
        storage[key] = [];
        for (let j = 0; j < body.damage_relations[key].length; j++) {
          storage[key].push(body.damage_relations[key][j].name);
        }
        console.log(storage[key]);
      }

      for (let k = 0; k < body.moves.length; k++) {
        storage.moves.push(body.moves[k].name);
      }

      const type = new TypeList(storage);
      type.save();
      console.log(`${storage.name} was saved to the DB`);
    });
  }
  res.send('success');
};

const getTypes = (req, res) => {
  TypeList.find(req.query)
    .exec((e, types) => {
      res.send(types.map((type) => {
        type.name = capitalizeFirstLetter(type.name);
        return type;
      }).filter(type => (type.name !== 'Unknown' && type.name !== 'Shadow')));
    })
   .catch(e => console.log(e));
};

module.exports = {
  postNewPokemon,
  getPokemon,
  postNewType,
  getTypes,
};
