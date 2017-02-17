import React from 'react';
import { Row, Col, Button, Thumbnail } from 'react-bootstrap';

const SelectedPokemon = ({ selectedPokemon, addToParty }) => {
  const card = (selectedPokemon ? <Thumbnail src={selectedPokemon[0].sprite} alt="242x200">
    <center><h2>{selectedPokemon[0].name}</h2></center>
    <Row>
      <Col sm={6} md={6} lg={6}>
        <h4>Stats</h4>
        {selectedPokemon[0].stats.map((stat, index) => <p key={`${stat + index}`}>{`${stat[0]}: ${stat[1]}`}</p>)}
      </Col>
      <Col sm={6} md={6} lg={6}>
        <h4>Abilities</h4>
        {selectedPokemon[0].abilities.map((ability, index) => <p key={`${ability + index}`}>{ability}</p>)}
      </Col>
      <Col sm={6} md={6} lg={6}>
        <h4>Types</h4>
        {selectedPokemon[0].types.map((type, index) => <p key={`${type + index}`}>{type}</p>)}
      </Col>
    </Row>
    <p>
      <Button style={{ float: 'right' }} onClick={() => addToParty(selectedPokemon[0])}bsStyle="primary">Add</Button>&nbsp;
    </p>
  </Thumbnail> : <center><h3>Choose a Pokemon to see its stats</h3></center>);

  return (
    <Row>
      <Col xs={12} md={12} lg={12}>
        {card}
      </Col>
    </Row>);
};

export default SelectedPokemon;
