import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const PokemonTd = ({ selectPokemon, addToParty, cellData }) => (
  <td>
    <span>{cellData}</span>
    <span onClick={() => { addToParty(cellData); }}><Glyphicon className="pokemonTableButton" glyph="plus" style={{ float: 'right' }} /></span>
    <span onClick={() => { selectPokemon(cellData); }}><Glyphicon className="pokemonTableButton" glyph="info-sign" style={{ float: 'right' }} /></span>
  </td>
  );

export default PokemonTd;
