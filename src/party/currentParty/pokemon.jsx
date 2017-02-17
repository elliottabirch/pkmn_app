import React from 'react';
import { Image } from 'react-bootstrap';

const pokemon = ({ pokemon, handleRemove }) => {
  const pokemonParty = pokemon.map((pkmn, index) => ( 
    <div key={pkmn + index + ''} onClick={()=>{handleRemove(pkmn.name)}}>
      <Image src={pkmn.sprite} rounded />
      <center><h3>{pkmn.name}</h3></center>
    </div>
    ));
  return (
    <div >
      {pokemonParty}
    </div>
  );
};

export default pokemon;
