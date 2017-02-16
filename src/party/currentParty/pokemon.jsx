import React from 'react';
import { Image } from 'react-bootstrap';

const pokemon = ({ pokemon }) => {
  const pokemonParty = pokemon.map(pkmn => (
    <div key={pkmn.id}>
      <Image src={pkmn.sprite} rounded />
      <h3>{pkmn.name}</h3>
    </div>
    ));
  return (
    <div >
      {pokemonParty}
    </div>
  );
};

export default pokemon;
