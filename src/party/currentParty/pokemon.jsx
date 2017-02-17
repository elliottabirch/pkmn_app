import React from 'react';
import { Image, Col } from 'react-bootstrap';

const pokemon = ({ pokemon, handleRemove }) => {
  const pokemonParty = pokemon.map((pkmn, index) => ( 
    <Col sm={4} xs={4} md={2} lg={2} key={pkmn + index + ''} onClick={()=>{handleRemove(pkmn.name)}}>
      <center><Image src={pkmn.sprite} rounded /></center>
      <center><h3>{pkmn.name}</h3></center>
    </Col>
    ));
  return (
    <div >
      {pokemonParty}
    </div>
  );
};

export default pokemon;
